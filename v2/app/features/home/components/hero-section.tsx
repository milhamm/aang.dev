export function HeroSection() {
  return (
    <section className="h-[60vh] col-span-3! relative overflow-hidden isolate">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
        <img
          src="/images/fractal-bg.png"
          alt="reeded glass"
          className="object-cover mix-blend-soft-light"
        />  
      </div>
      <div className="flex h-full justify-center flex-col border-b border-b-border z-10 relative">
        <div className="max-w-4xl w-full mx-auto space-y-6 px-6">
          <h1 className="text-4xl font-bold font-bricolage w-fit">
            Muhammad Ilham Mubarak {'//'} <span className="text-primary">Aang</span>
          </h1>
          <h3 className="text-2xl">Software Engineer</h3>
        </div>
      </div>
    </section>
  );
}
