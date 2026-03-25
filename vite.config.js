.film-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color .15s, transform .15s;
}
.film-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.film-poster {
  height: 140px;
  position: relative;
  overflow: hidden;
  background: var(--bg3);
}
.film-poster img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.film-no-poster {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 32px; font-weight: 800;
  color: var(--text4);
}

.film-rating {
  position: absolute; top: 6px; right: 6px;
  background: rgba(0,0,0,.85);
  color: var(--accent);
  font-size: 10px; font-weight: 700;
  padding: 2px 6px; border-radius: 4px;
  font-family: var(--mono);
}

.film-status {
  position: absolute; top: 6px; left: 6px;
  font-size: 8px; letter-spacing: 1px;
  padding: 2px 5px; border-radius: 3px;
  font-family: var(--mono); font-weight: 600;
}
.film-status.seen { background: var(--accent); color: #fff; }
.film-status.watching { background: #2a4a1a; color: #6dc46d; }
.film-status.watchlist { background: var(--border2); color: var(--text3); }
.film-status.dropped { background: #3a1a1a; color: #c46d6d; }
.film-status.rewatch { background: #2a2a0a; color: #c4b46d; }

.film-info { padding: 8px 10px; }
.film-title {
  font-size: 11px; font-weight: 700;
  color: var(--text2);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.film-meta { font-size: 10px; color: var(--text4); margin-top: 2px; }
