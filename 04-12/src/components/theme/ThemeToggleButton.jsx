import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggleButton() {
  const { toggleTheme, theme } = useTheme();

  return <button onClick={toggleTheme}>{theme === "light" ? "🌙 Scuro" : "☀️ Chiaro"}</button>;
}
