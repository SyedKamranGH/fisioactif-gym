import Header from "../../components/layout/Header";
import PageTitle from "../../components/layout/PageTitle";
import InputField from "../../components/ui/Input";
import CustomButton from "../../components/ui/Button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <PageTitle title="Contactos" breadcrumbs={["Home", "Contactos"]} />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-neutral-900">Get in Touch</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField type="underline" placeholder="Your Name" />
                <InputField type="underline" placeholder="Your Email" />
              </div>

              <InputField type="underline" placeholder="Subject" />

              <div>
                <textarea
                  placeholder="Your Message"
                  className="focus:border-primary w-full resize-none border-b border-neutral-300 py-2 focus:outline-none"
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="text-primary focus:ring-primary h-4 w-4 rounded border-neutral-300"
                />
                <label htmlFor="privacy" className="text-sm text-neutral-600">
                  I agree to the privacy policy
                </label>
              </div>

              <CustomButton
                label="Send Message"
                variant="slanted"
                onClick={() => console.log("Message sent")}
              />
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-primary font-bold">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Email</p>
                    <p className="text-neutral-600">info@fisioactif.pt</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-primary font-bold">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Phone</p>
                    <p className="text-neutral-600">+351 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-primary font-bold">🕒</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Working Hours</p>
                    <p className="text-neutral-600">09:00H - 20:00H</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
