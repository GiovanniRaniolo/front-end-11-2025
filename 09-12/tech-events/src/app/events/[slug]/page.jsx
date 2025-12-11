import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventBySlug, events } from "../../../lib/events";

// Genera i parametri statici per tutte le pagine degli eventi
export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

// Genera i metadata dinamici per SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Evento non trovato",
    };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <Link href="/">← Torna alla Home</Link>

      <h1>{event.title}</h1>
      <p>{event.description}</p>

      <h2>Programma</h2>
      <section>
        {event.program.map((session) => (
          <div key={session.sessionId}>
            <h3>{session.title}</h3>
            <p>
              <strong>Orario:</strong> {session.time}
            </p>
            <p>{session.description}</p>
            <Link href={`/events/${slug}/${session.sessionId}`}>Dettagli sessione →</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
