const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
export const IMG_BASE = 'https://image.tmdb.org/t/p/w500'
export const IMG_THUMB = 'https://image.tmdb.org/t/p/w200'

const get = async (path, params = {}) => {
  const url = new URL(`${BASE_URL}${path}`)
  url.searchParams.set('api_key', API_KEY)
  url.searchParams.set('language', 'en-US')
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
  const res = await fetch(url)
  return res.json()
}

export const searchMulti = (query) => get('/search/multi', { query, include_adult: false })
export const getMovie = (id) => get(`/movie/${id}`, { append_to_response: 'credits,videos,similar,release_dates' })
export const getTVShow = (id) => get(`/tv/${id}`, { append_to_response: 'credits,videos,similar' })
export const getTrending = (type = 'all') => get(`/trending/${type}/week`)
export const getPopular = (type = 'movie') => get(`/${type}/popular`)
export const getTopRated = (type = 'movie') => get(`/${type}/top_rated`)
export const getNowPlaying = () => get('/movie/now_playing')
export const getMovieGenres = () => get('/genre/movie/list')
export const getTVGenres = () => get('/genre/tv/list')
export const discoverMovies = (params) => get('/discover/movie', params)
