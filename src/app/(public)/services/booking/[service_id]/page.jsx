"use server";

import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/public/booking/BookingForm";
import PrivatePageProtector from "@/components/PrivatePageProtector";

const getServiceDetails = async (id) => {
  const data =
    (await fetch(`${process.env.NEXTAUTH_URL}/api/services/${id}`).then((res) =>
      res.json()
    )) || [];
  return data;
};

const wareHouses =
  (await fetch(`${process.env.NEXTAUTH_URL}/location.json`).then((res) =>
    res.json()
  )) || [];

const BookingPage = async ({ params }) => {
  const { service_id } = await params;
  const service = await getServiceDetails(service_id);

  // If service not found
  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-secondary">Service Not Found</h1>
        <p className="mt-4 text-base-content/70">
          The service you are looking for does not exist.
        </p>
        <Link href="/" className="btn btn-secondary mt-6">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <PrivatePageProtector>
      <div className="max-w-6xl mx-auto sm:py-10">
        <h1 className="text-4xl font-bold text-secondary mb-6">
          Book {service.title}
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Service Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-80">
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <BookingForm service={service} wareHouses={wareHouses} />
        </div>
      </div>
    </PrivatePageProtector>
  );
};

export default BookingPage;

export async function generateMetadata({ params }) {
  const { service_id } = await params;
  const service = await getServiceDetails(service_id);

  if (!service) {
    return {
      title: "Service Not Found | Care.com",
    };
  }

  return {
    title: `${service.title} | Care.com`,
    description: service.desc,
    openGraph: {
      title: service.title,
      description: service.desc,
      url: `${process.env.NEXTAUTH_URL}/services/${service_id}`,
      siteName: "Care.com",
      images: [
        {
          url: service.img,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
