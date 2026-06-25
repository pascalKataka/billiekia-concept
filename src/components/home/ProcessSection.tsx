const steps = [
  { num: "01", title: "Consultation initiale", desc: "Nous analysons vos besoins, votre contexte et vos objectifs pour définir ensemble le cadre de notre intervention." },
  { num: "02", title: "Études & Conception", desc: "Notre équipe technique réalise les études préliminaires, la collecte de données et la conception des solutions adaptées." },
  { num: "03", title: "Dossiers techniques", desc: "Élaboration des dossiers complets : APS, APD, CCTP, DAO, estimations financières et cahiers des charges." },
  { num: "04", title: "Suivi & Livraison", desc: "Supervision des travaux, contrôle qualité sur le terrain et accompagnement jusqu'à la réception finale des ouvrages." },
];

export default function ProcessSection() {
  return (
    <section className="section-gap bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-5" style={{ background: "linear-gradient(to left, #1B3A6B, transparent)" }} />
      <div className="wrapper">
        <div className="text-center mb-20">
          <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-bw)" }}>
            Notre méthodologie
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] uppercase section-title-center" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
            Comment nous travaillons
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="relative inline-flex mb-8">
                <div className="w-20 h-20 rounded-full bg-[#1B3A6B] flex items-center justify-center mx-auto lg:mx-0">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-bc)" }}>{step.num}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#E85420]" />
              </div>
              <h3 className="text-xl font-bold text-[#1B3A6B] uppercase mb-4" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
