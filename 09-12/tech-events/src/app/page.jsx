import Link from "next/link";
import Image from "next/image";
import { events } from "../lib/events";

export default function Home() {
  return (
    <main>
      <h1>HOM PAGE</h1>
      <p>{events.length} eventi disponibili</p>
      <Image src="/events/events-image.png" alt="Event Image" width={500} height={300} />
      <section>
        {events.map((event) => (
          <div key={event.slug}>
            <h2>{event.title}</h2>

            <Link href={`/events/${event.slug}`}>Dettagli</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
