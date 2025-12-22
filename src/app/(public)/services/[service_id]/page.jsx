// "use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    _id: 1,
    img: "https://img.freepik.com/premium-photo/woman-pink-shirt-sits-floor-living-room_85574-10046.jpg?w=1060",
    title: "Baby Care",
    desc: "Professional and loving caregivers to support newborns, toddlers, and young children in a safe and nurturing environment.",
    details:
      "Our Baby Care service ensures newborns, toddlers, and young children receive personalized attention, safe handling, feeding assistance, and playful activities. Caregivers are trained, background-checked, and compassionate.",
  },
];

const getServiceDetails = async (id) => {
  return services.find((s) => s._id == id);
};

const ServiceDetail = async ({ params }) => {
  const { service_id } = await params;
  const service = await getServiceDetails(service_id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-secondary">Service Not Found</h1>
        <p className="mt-4 text-base-content/70">
          The service you are looking for does not exist.
        </p>
        <Link href="/services" className="btn btn-secondary mt-6">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto sm:py-10">
      {/* Service Hero */}
      <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-80">
          <Image
            src={service.img}
            alt={service.title}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            {service.title}
          </h1>
          <p className="text-base-content/70 mb-6">{service.details}</p>
          <Link
            href={`/services/booking/${service._id}`}
            className="btn btn-secondary bg-secondary skeleton btn-lg hover:scale-105 transition font-semibold"
          >
            Book Service
          </Link>
        </div>
      </div>

      {/* Additional Info */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          Why Choose Our {service.title}?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-base-content/70">
          <li>Certified and background-checked caregivers</li>
          <li>Personalized care tailored to your needs</li>
          <li>Flexible scheduling and home visits</li>
          <li>Transparent pricing and trust-focused platform</li>
        </ul>
      </section>
    </div>
  );
};

export default ServiceDetail;
