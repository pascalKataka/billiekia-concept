import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-6">
      <div className="text-center text-white">
        <div
          className="text-9xl font-bold text-[#E85420] mb-4"
          style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
        >
          404
        </div>
        <h1
          className="text-4xl font-bold uppercase mb-4"
          style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
        >
          Page introuvable
        </h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-orange">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
