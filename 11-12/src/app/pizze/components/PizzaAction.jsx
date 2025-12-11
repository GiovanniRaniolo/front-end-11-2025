"use client";
import { useRouter } from "next/navigation";

export default function PizzaAction({ pizzaId, pizzaNome }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await fetch(`/api/pizze/${pizzaId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
    router.push("/pizze");
  }

  return (
    <button className="bg-red-500 text-white font-bold px-4 py-2 rounded" onClick={handleDelete}>
      Cancella {pizzaNome}
    </button>
  );
}
