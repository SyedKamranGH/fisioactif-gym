import Header from "../components/layout/Header";
import PageTitle from "../components/layout/PageTitle";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <PageTitle title="Equipa" breadcrumbs={["Home", "Equipa"]} />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">Welcome to Fisio Actif</h2>
          <p className="mb-8 text-neutral-600">
            Your health and wellness partner. Professional physiotherapy services with a modern
            approach to rehabilitation and fitness.
          </p>

          {/* Demo Grid - Similar to Figma design */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="flex h-48 items-center justify-center bg-neutral-200">
                  <span className="text-neutral-500">Placeholder Image</span>
                </div>
                <div className="p-4">
                  <div className="bg-primary mb-3 inline-block px-3 py-1 text-sm font-medium text-white">
                    LOREM
                  </div>
                  <button className="bg-primary hover:bg-primary-dark w-full rounded px-4 py-2 text-white transition-colors">
                    Lorem Ipsum
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
