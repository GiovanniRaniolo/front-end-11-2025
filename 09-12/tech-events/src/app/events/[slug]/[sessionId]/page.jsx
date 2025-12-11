import Link from "next/link";
import { notFound } from "next/navigation";
import { getSession, getEventBySlug, events } from "../../../../lib/events";

// Genera i parametri statici per tutte le sessioni
export function generateStaticParams() {
  const paths = [];

  events.forEach((event) => {
    event.program.forEach((session) => {
      paths.push({
        slug: event.slug,
        sessionId: session.sessionId,
      });
    });
  });

  return paths;
}

// Genera i metadata dinamici per SEO
export async function generateMetadata({ params }) {
  const { slug, sessionId } = await params;
  const session = getSession(slug, sessionId);
  const event = getEventBySlug(slug);

  if (!session || !event) {
    return {
      title: "Sessione non trovata",
    };
  }

  return {
    title: `${session.title} | ${event.title}`,
    description: session.description,
  };
}

export default async function SessionPage({ params }) {
  const { slug, sessionId } = await params;
  const event = getEventBySlug(slug);
  const session = getSession(slug, sessionId);

  if (!event || !session) {
    notFound();
  }

  return (
    <main>
      <Link href={`/events/${slug}`}>← Torna a {event.title}</Link>

      <h1>{session.title}</h1>

      <div>
        <p>
          <strong>Evento:</strong> {event.title}
        </p>
        <p>
          <strong>Orario:</strong> {session.time}
        </p>
      </div>

      <section>
        <h2>Descrizione</h2>
        <p>{session.description}</p>
      </section>

      <Link href="/">← Torna alla Home</Link>
    </main>
  );
}
