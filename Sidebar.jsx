import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import FilmCard from '../components/FilmCard'
import './Library.css'

const FILTERS = ['All', 'Seen', 'Watching', 'Watchlist', 'Dropped', 'Rewatch']

export default function Library({ onAddFilm }) {
  const [films, setFilms] = useState([])
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('newest')
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadFilms() }, [])

  const loadFilms = async () => {
    setLoading(true)
    const { data } = await supabase.from('films').select('*').order('created_at', { ascending: false })
    setFilms(data || [])
    setLoading(false)
  }

  const filtered = films
    .filter(f => filter === 'All' || f.status === filter.toLowerCase())
    .filter(f => !search || f.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'newest') return new Date(b.created_at) - new Date(a.created_at)
      if (sort === 'rating') return (b.user_rating || 0) - (a.user_rating || 0)
      if (sort === 'title') return a.title.localeCompare(b.title)
      if (sort === 'year') return (b.release_year || 0) - (a.release_year || 0)
      return 0
    })

  return (
    <div className="library">
      <div className="library-topbar">
        <div>
          <div className="page-title">My Library</div>
          <div className="page-sub mono">{films.length} titles logged</div>
        </div>
        <button className="btn-primary" onClick={onAddFilm}>+ Add Film</button>
      </div>

      <div className="library-controls">
        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="filter-count mono">
                {f === 'All' ? films.length : films.filter(x => x.status === f.toLowerCase()).length}
              </span>
            </button>
          ))}
        </div>
        <div className="library-right-controls">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search library..."
            style={{ width: 200 }}
          />
          <select value={sort} onChange={e => setSort(e.target.value)} style={{ width: 140 }}>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="title">A–Z</option>
            <option value="year">Release Year</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="loading mono">Loading your library...</div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">◈</div>
          <div className="empty-title">No films here yet</div>
          <div className="empty-sub mono">Add your first film to get started</div>
          <button className="btn-primary" onClick={onAddFilm} style={{ marginTop: 16 }}>+ Add Film</button>
        </div>
      ) : (
        <div className="library-grid">
          {filtered.map(f => <FilmCard key={f.id} film={f} />)}
        </div>
      )}
    </div>
  )
}
