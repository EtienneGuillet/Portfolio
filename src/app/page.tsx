import ExperienceList from "../modules/experiences/components/experience-list";

export default function Home() {
  return (
    <section className="flex justify-between gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Etienne Guillet
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Frontend Engineer
          </h2>
        </div>
      </header>
      <main className="pt-24 lg:w-1/2 lg:py-24 text-slate-200">
        <ExperienceList />
      </main>
    </section>
  );
}
