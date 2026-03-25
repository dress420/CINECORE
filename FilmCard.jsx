*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0c0f;
  --bg2: #0d1017;
  --bg3: #111820;
  --border: #161c24;
  --border2: #1e2a36;
  --accent: #4d9fd6;
  --accent-dim: #0d1e2e;
  --text: #c8dff0;
  --text2: #8ab8d4;
  --text3: #3a5060;
  --text4: #2a3a4a;
  --mono: 'JetBrains Mono', monospace;
  --sans: 'Syne', sans-serif;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  min-height: 100vh;
  overflow: hidden;
}

#root { height: 100vh; display: flex; }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }

input, textarea, select {
  font-family: var(--sans);
  background: var(--bg2);
  border: 1px solid var(--border);
  color: var(--text2);
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  outline: none;
  transition: border-color .15s;
  width: 100%;
}
input:focus, textarea:focus { border-color: var(--accent); }
input::placeholder { color: var(--text4); }

button {
  font-family: var(--sans);
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  transition: all .15s;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  padding: 9px 18px;
  font-weight: 700;
}
.btn-primary:hover { opacity: .9; }

.btn-secondary {
  background: var(--bg3);
  color: var(--text3);
  border: 1px solid var(--border2);
  padding: 8px 14px;
}
.btn-secondary:hover { color: var(--text2); border-color: var(--accent); }

.badge {
  background: var(--accent);
  color: #fff;
  font-size: 9px;
  letter-spacing: 1.5px;
  padding: 3px 8px;
  border-radius: 4px;
  font-family: var(--mono);
  font-weight: 600;
}

.mono { font-family: var(--mono); }

.tag {
  background: var(--bg3);
  border: 1px solid var(--border2);
  color: var(--text3);
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 5px;
  font-family: var(--mono);
}
.tag.active {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
}

.overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.75);
  display: flex; align-items: center; justify-content: center;
  z-index: 100;
  padding: 20px;
}

.modal {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
}

.section-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 12px;
}
.section-title {
  font-size: 11px; font-weight: 700;
  color: var(--text3); letter-spacing: 2px;
  font-family: var(--mono);
}
.section-link {
  font-size: 11px; color: var(--accent);
  cursor: pointer; font-family: var(--mono);
}
