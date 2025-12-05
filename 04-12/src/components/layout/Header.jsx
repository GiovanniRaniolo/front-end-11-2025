import { useTheme } from "../../hooks/useTheme";
import ThemeToggleButton from "../theme/ThemeToggleButton";

export default function Header() {
  const { colors, theme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        padding: "20px",
        borderBottom: `2px solid ${colors.secondary}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>🌐 La Mia App</h1>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span>
          Tema: <strong>{theme}</strong>
        </span>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
