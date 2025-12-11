import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <Link href={`/events/${event.slug}`}>Dettagli →</Link>
    </article>
  );
}
