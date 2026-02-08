import { FiHeart, FiShield, FiCalendar, FiUsers } from "react-icons/fi";

export const metadata = {
  title: "About Us | Care App",
  description:
    "Care App is a trusted care service platform for booking baby, elderly, and patient care services.",
};

export default function About() {
  return (
    <div className="w-full py-16 space-y-20">
      {/* HERO SECTION */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-secondary">About Care App</h1>
        <p className="max-w-3xl mx-auto text-gray-500 text-lg">
          A trusted digital platform that connects families with verified care
          professionals — making care booking simple, secure, and stress-free.
        </p>
      </section>

      {/* STATS */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {[
          { title: "Verified Caregivers", value: "100+" },
          { title: "Happy Families", value: "500+" },
          { title: "Secure Bookings", value: "100%" },
          { title: "Support Availability", value: "24/7" },
        ].map((item, i) => (
          <div key={i} className="stats shadow bg-base-200">
            <div className="stat text-center">
              <div className="stat-value text-secondary">{item.value}</div>
              <div className="stat-title">{item.title}</div>
            </div>
          </div>
        ))}
      </section>

      {/* WHO WE ARE */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-gray-600">
            Care App is a full-stack web application built to simplify the
            process of finding reliable baby care, elderly care, and patient
            care services. We prioritize trust, transparency, and user safety.
          </p>
          <p className="text-gray-600">
            Our platform ensures that every booking is protected through secure
            authentication, private routes, and email confirmation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Feature
            icon={<FiShield className="text-4xl text-secondary mx-auto" />}
            title="Secure Platform"
          />
          <Feature
            icon={<FiCalendar className="text-4xl text-secondary mx-auto" />}
            title="Easy Booking"
          />
          <Feature
            icon={<FiUsers className="text-4xl text-secondary mx-auto" />}
            title="Verified Caregivers"
          />
          <Feature
            icon={<FiHeart className="text-4xl text-secondary mx-auto" />}
            title="Trusted Service"
          />
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-base-200 rounded-2xl p-10 text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="max-w-4xl mx-auto text-gray-600">
          Our mission is to create a reliable digital ecosystem where families
          can easily find and book trusted care services while ensuring safety,
          privacy, and peace of mind.
        </p>
      </section>

      {/* VISION */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We envision a future where quality care services are accessible to
          everyone through technology, making care management effortless and
          transparent.
        </p>
      </section>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="card bg-base-200 shadow">
      <div className="card-body items-center text-center">
        {icon}
        <h3 className="font-semibold mt-2">{title}</h3>
      </div>
    </div>
  );
}
