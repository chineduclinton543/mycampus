"use client";
import { useEffect, useState } from "react";
import { THEME_KEY as KEY } from "../lib/theme";

const current = () => document.documentElement.dataset.theme === "dark" ? "dark" : "light";

// One button that switches between light and dark. It names the theme you'll get, the way the app's settings do.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);
  useEffect(() => setTheme(current()), []);
  if (!theme) return <span className="theme-toggle" aria-hidden="true" style={{ visibility: "hidden" }}>Dark mode</span>;

  const next = theme === "dark" ? "light" : "dark";
  const flip = () => {
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch {}
    setTheme(next);
  };
  return <button type="button" className="theme-toggle" onClick={flip}>
    {next === "dark"
      ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
      : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>}
    {next === "dark" ? "Dark mode" : "Light mode"}
  </button>;
}
