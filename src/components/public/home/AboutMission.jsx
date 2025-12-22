import { FaClock } from "react-icons/fa";
import { FaHandshakeAngle, FaShieldHeart, FaUsers } from "react-icons/fa6";

const missions = [
  {
    icon: <FaHandshakeAngle size={36} />,
    title: "Care With Compassion",
    desc: "Our mission is to connect families with trusted caregivers who provide compassionate, reliable, and personalized care for children, elders, and patients.",
  },
  {
    icon: <FaShieldHeart size={36} />,
    title: "Safety & Trust First",
    desc: "We verify caregivers carefully to ensure safety, transparency, and peace of mind for every family using our platform.",
  },
  {
    icon: <FaUsers size={36} />,
    title: "Empowering Communities",
    desc: "We aim to build a caring community where caregivers find meaningful work and families receive the support they truly deserve.",
  },
  {
    icon: <FaClock size={36} />,
    title: "Accessible & Flexible Care",
    desc: "We make it easy for families to find care services that fit their schedule, budget, and unique needs—anytime, anywhere.",
  },
];

export default function AboutMission() {
  return (
    <section className="py-10 bg-base-200 rounded-2xl my-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Mission
          </h2>
          <p className="text-base-content/70 sm:text-lg">
            We believe care should be accessible, trusted, and driven by
            empathy. Our platform bridges the gap between families and
            professional caregivers.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="card-body text-center">
                <div className="mx-auto mb-4 text-secondary">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base-content/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
