import ContactForm from "@/components/public/ContactForm";

export const metadata = {
  title: "Contact Us | Care App",
  description:
    "Get in touch with Care App for support, feedback, or inquiries.",
};

export default function Contact() {
  return (
    <div className="w-full py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-secondary mb-4">Contact Us</h1>
        <p className="text-gray-500">We’d love to hear from you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Get in Touch</h2>

            <div className="space-y-2">
              <p>
                Have questions, feedback, or need support? Feel free to contact
                us anytime.
              </p>
              <p className="mt-4">🌐 Website: care-mauve.vercel.app</p>
              <p>📧 Email: mdsomratsordaro350@gmail.com</p>
              <p>⏰ Support Hours: 8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
