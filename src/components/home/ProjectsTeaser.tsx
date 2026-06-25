import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

const projects = [
  { img: "/images/bc/bc-32.jpg", category: "Infrastructures routières", title: "Supervision de route nationale", desc: "Contrôle et supervision des travaux de réhabilitation d'un axe routier national — conformité, qualité et respect des délais.", tag: "Terminé" },
  { img: "/images/bc/bc-03.jpg", category: "Ouvrages d'art", title: "Pont — Fondations & colonnes", desc: "Étude technique et supervision de la construction d'un pont : fondations profondes, coffrage colonnes, ferraillage.", tag: "Terminé" },
  { img: "/images/bc/bc-31.jpg", category: "Géotechnique", title: "Supervision de pieux forés", desc: "Mission de contrôle et suivi des travaux de forage de pieux pour fondations d'ouvrage d'art.", tag: "En cours" },
];

export default function ProjectsTeaser() {
  return (
    <section className="section-gap bg-[#F8F9FA]">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-bw)" }}>Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] uppercase section-title" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
              Quelques réalisations
            </h2>
          </div>
          <Link href="/projets" className="inline-flex items-center gap-2 text-[#1B3A6B] font-semibold hover:text-[#E85420] transition-colors group flex-shrink-0" style={{ fontFamily: "var(--font-bw)" }}>
            Voir tous les projets
            <Icon name="arrow-right" size={16} className="[&_path]:stroke-[#1B3A6B] group-hover:[&_path]:stroke-[#E85420] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group">
              <div className="h-56 relative overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112850]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${p.tag === "En cours" ? "bg-[#E85420] text-white" : "bg-white/20 text-white backdrop-blur-sm"}`} style={{ fontFamily: "var(--font-bw)" }}>
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#E85420] text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-bw)" }}>{p.category}</p>
                <h3 className="text-xl font-bold text-[#1B3A6B] uppercase mb-4 leading-tight" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
