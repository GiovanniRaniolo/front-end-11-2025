import { useTheme } from "../hooks/useTheme";

export default function ArticleCard({ title, text }) {
  const { colors } = useTheme(); // prendo solo colors

  return (
    <article
      style={{
        backgroundColor: colors.card,
        border: `1px solid ${colors.secondary}`,
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        color: colors.text,
      }}
    >
      <h3 style={{ color: colors.primary }}>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
