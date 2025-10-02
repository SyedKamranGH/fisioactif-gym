import Header from "../../components/layout/Header";
import PageTitle from "../../components/layout/PageTitle";

export default function Calendar() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <PageTitle title="Calendário" breadcrumbs={["Home", "Calendário"]} />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">Schedule Your Appointment</h2>
          <p className="mb-8 text-neutral-600">
            Book your physiotherapy session with our professional team.
          </p>

          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Available Time Slots</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {["09:00", "10:30", "14:00", "15:30", "16:00", "17:30", "18:00", "19:30"].map(
                (time) => (
                  <button
                    key={time}
                    className="bg-primary hover:bg-primary-dark rounded px-4 py-2 text-white transition-colors"
                  >
                    {time}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
