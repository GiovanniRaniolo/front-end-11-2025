function TailwindPage() {
  return (
    <main className="grid grid-cols-3 gap-4 h-screen bg-amber-100">
      <h1 className="text-sm md:text-2xl lg:text-6xl 2xl:text-9xl text-amber-200 md:text-amber-400 lg:text-[#ffffff] ">Tailwind Page</h1>
      <h2 className="text-3xl text-brand-primary"> TITOLO</h2>
      <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
        CLICCA
      </button>
      <div className="p-4 m-4 w-3xs min-h-40 bg-pink-500 text-blue-800 font-bold text-3xl border-8 rounded-2xl shadow-lg">BOX</div>
      <div className="p-4 m-4 w-3xs min-h-40 bg-pink-500 text-blue-800 font-bold text-3xl border-8 rounded-2xl shadow-lg">BOX 2</div>
      <div className="p-4 m-4 w-3xs min-h-40 bg-pink-500 text-blue-800 font-bold text-3xl border-8 rounded-2xl shadow-lg">BOX 2</div>
    </main>
  );
}

export default TailwindPage;
