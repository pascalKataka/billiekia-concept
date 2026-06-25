const stats = [
  { value: "10+", label: "Années d'expérience" },
  { value: "50+", label: "Projets réalisés" },
  { value: "100%", label: "Satisfaction client" },
  { value: "20+", label: "Experts techniques" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#E85420] py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="wrapper relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center text-white">
              <div
                className="text-5xl font-bold mb-2"
                style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
              >
                {s.value}
              </div>
              <div
                className="text-orange-100 text-sm uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bw, Barlow, sans-serif)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
