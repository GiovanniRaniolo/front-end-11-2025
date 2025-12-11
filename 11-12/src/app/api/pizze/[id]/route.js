import { pizze } from "../../../../lib/pizze";

export async function GET(_, { params }) {
  const { id } = await params;
  const pizza = pizze.find((p) => p.id === parseInt(id));
  if (pizza) {
    return Response.json(pizza);
  } else {
    return Response.json({ error: "Pizza non trovata" }, { status: 404 });
  }
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  console.log("Deleting pizza with id:", id);
  const index = pizze.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return Response.json({ error: "Pizza non trovata" }, { status: 404 });
  }

  const eliminata = pizze.splice(index, 1)[0];
  return Response.json({ message: "Pizza eliminata", pizza: eliminata });
}
