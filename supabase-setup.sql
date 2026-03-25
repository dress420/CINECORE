import { useState } from 'react'
import { searchMulti, getMovie, getTVShow, IMG_THUMB } from '../lib/tmdb'
import { supabase } from '../lib/supabase'
import './AddFilmModal.css'

const STATUS_OPTIONS = [
  { value: 'seen', label: 'Seen' },
  { value: 'watching', label: 'Currently Watching' },
  { value: 'watchlist', label: 'Watchlist' },
  { value: 'dropped', label: 'Dropped' },
  { value: 'rewatch', label: 'Rewatch' },
]

const FORMAT_OPTIONS = ['Netflix', 'Prime Video', 'Disney+', 'Cinema', 'Blu-Ray', 'DVD', 'Other']

export default function AddFilmModal({ onClose, onAdded }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(null)
  const [status, setStatus] = useState('seen')
  const [rating, setRating] = useState('')
  const [reaction, setReaction] = useState('')
  const [format, setFormat] = useState('')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  const search = async (e) => {
    const q = e.target.value
    setQuery(q)
    if (q.length < 2) { setResults([]); return }
    setLoading(true)
    const data = await searchMulti(q)
    setResults((data.results || []).filter(r => r.media_type !== 'person').slice(0, 6))
    setLoading(false)
  }

  const select = async (item) => {
    setSelected(null)
    setResults([])
    setQuery(item.title || item.name)
    const details = item.media_type === 'tv'
      ? await getTVShow(item.id)
      : await getMovie(item.id)
    const genres = (details.genres || []).map(g => g.name)
    const releaseDate = details.release_date || details.first_air_date || ''
    setSelected({
      tmdb_id: item.id,
      title: item.title || item.name,
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
      overview: details.overview,
      release_year: releaseDate ? parseInt(releaseDate.split('-')[0]) : null,
      genres,
      runtime: details.runtime || null,
      vote_average: details.vote_average || null,
      media_type: item.media_type,
    })
  }

  const save = async () => {
    if (!selected) return
    setSaving(true)
    const { error } = await supabase.from('films').upsert({
      tmdb_id: selected.tmdb_id,
      title: selected.title,
      poster_path: selected.poster_path,
      backdrop_path: selected.backdrop_path,
      overview: selected.overview,
      release_year: selected.release_year,
      genres: selected.genres,
      runtime: selected.runtime,
      vote_average: selected.vote_average,
      media_type: selected.media_type,
      status,
      user_rating: rating ? parseFloat(rating) : null,
      first_reaction: reaction || null,
      format_tag: format || null,
      watched_date: status === 'seen' ? new Date().toISOString() : null,
    }, { onConflict: 'tmdb_id' })
    setSaving(false)
    if (!error) { onAdded && onAdded(); onClose() }
    else console.error(error)
  }

  return (
    <div className="overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal add-modal">
        <div className="modal-header">
          <div className="badge">ADD FILM / SERIES</div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="search-wrap" style={{ marginTop: 16 }}>
          <input
            value={query}
            onChange={search}
            placeholder="Search TMDB — film or series..."
            autoFocus
          />
          {loading && <div className="search-hint mono">Searching...</div>}
          {results.length > 0 && (
            <div className="search-results">
              {results.map(r => (
                <div key={r.id} className="search-result-item" onClick={() => select(r)}>
                  {r.poster_path
                    ? <img src={`${IMG_THUMB}${r.poster_path}`} alt={r.title || r.name} />
                    : <div className="result-no-img">{(r.title || r.name)?.charAt(0)}</div>
                  }
                  <div className="result-info">
                    <div className="result-title">{r.title || r.name}</div>
                    <div className="result-meta mono">
                      {r.media_type === 'tv' ? 'Series' : 'Film'} · {(r.release_date || r.first_air_date || '').split('-')[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selected && (
          <div className="selected-film">
            <div className="selected-header">
              {selected.poster_path && (
                <img src={`${IMG_THUMB}${selected.poster_path}`} alt={selected.title} className="selected-poster" />
              )}
              <div className="selected-info">
                <div className="selected-title">{selected.title}</div>
                <div className="selected-meta mono">{selected.release_year} · {selected.media_type === 'tv' ? 'Series' : 'Film'}</div>
                {selected.vote_average && (
                  <div className="selected-rating mono">TMDB {selected.vote_average.toFixed(1)}</div>
                )}
                <div className="selected-genres">
                  {selected.genres?.map(g => <span key={g} className="tag">{g}</span>)}
                </div>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="mono">STATUS</label>
                <div className="status-options">
                  {STATUS_OPTIONS.map(s => (
                    <button
                      key={s.value}
                      className={`status-btn ${status === s.value ? 'active' : ''}`}
                      onClick={() => setStatus(s.value)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="mono">YOUR RATING (0-10)</label>
                  <input
                    type="number" min="0" max="10" step="0.5"
                    value={rating} onChange={e => setRating(e.target.value)}
                    placeholder="e.g. 9.5"
                  />
                </div>
                <div className="form-group">
                  <label className="mono">FORMAT</label>
                  <select value={format} onChange={e => setFormat(e.target.value)}>
                    <option value="">Select...</option>
                    {FORMAT_OPTIONS.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="mono">FIRST REACTION</label>
                <textarea
                  value={reaction}
                  onChange={e => setReaction(e.target.value)}
                  placeholder="How did you feel right after watching?"
                  rows={2}
                />
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', marginTop: 16 }} onClick={save} disabled={saving}>
              {saving ? 'Saving...' : '+ Add to CINECORE'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
