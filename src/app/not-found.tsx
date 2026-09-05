export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h2 className="text-4xl font-bold tracking-tight mb-4">404</h2>
      <p className="text-zinc-400 mb-6">Página no encontrada</p>
      <a
        href="/"
        className="px-4 py-2 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700 transition-colors text-sm font-medium"
      >
        Volver al inicio
      </a>
    </div>
  );
}
