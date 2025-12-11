import { pizze } from "../../../lib/pizze";

export async function GET() {
  return Response.json(pizze);
}

export async function POST(request) {
  const body = await request.json();
  const nuovaPizza = {
    id: Date.now(),
    nome: body.nome,
    ingredienti: body.ingredienti,
    prezzo: body.prezzo,
  };
  pizze.push(nuovaPizza);
  return Response.json(nuovaPizza, { status: 201 });
}
