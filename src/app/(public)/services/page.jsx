import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";
export default async function AllServicesPage() {
  const services =
    (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`).then((res) =>
      res.json()
    )) || [];
  return (
    <div className="">
      <title>Our Services | Care.com</title>
      {/* Hero Section */}
      <section className="py-10 bg-base-200 rounded-2xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">
            Our Services
          </h1>
          <p className="sm:text-lg text-base-content/70">
            Explore our range of care services designed for every stage of life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-5">
            {services.map((service) => (
              <div key={service._id} className="card-body text-center group">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    fill
                    src={service.img}
                    alt={service.title}
                    className="w-full object-cover rounded-lg group-hover:rotate-2 group-hover:scale-110 transition duration-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-base-content/70 mb-4">{service.desc}</p>
                <Link
                  href={`/services/${service._id}`}
                  className="btn btn-secondary w-full font-semibold hover:scale-105 transition skeleton bg-secondary"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
