import { FaWheelchair } from "react-icons/fa";
import { FaBaby, FaPersonCane, FaUserNurse } from "react-icons/fa6";

const services = [
  {
    icon: <FaBaby size={38} />,
    title: "Baby Care",
    desc: "Professional and loving caregivers to support newborns, toddlers, and young children in a safe and nurturing environment.",
  },
  {
    icon: <FaPersonCane size={38} />,
    title: "Elderly Care",
    desc: "Compassionate assistance for seniors, including daily activities, companionship, and personalized care at home.",
  },
  {
    icon: <FaUserNurse size={38} />,
    title: "Sick People Care",
    desc: "Trained caregivers to support patients during recovery, medication assistance, and comfort-focused care services.",
  },
  {
    icon: <FaWheelchair size={38} />,
    title: "Special Needs Care",
    desc: "Dedicated caregivers providing respectful, patient-centered support for individuals with disabilities or special care requirements.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-10 bg-base-200 rounded-2xl my-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-base-content/70 sm:text-lg">
            We offer trusted care services tailored to every stage of life.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="card-body text-center">
                <div className="mx-auto mb-4 text-secondary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-base-content/70">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
