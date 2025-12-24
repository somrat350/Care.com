import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/public/booking/BookingForm";
import PrivatePageProtector from "@/components/PrivatePageProtector";

import wareHouses from "../../../../../../public/location.json";

export const dynamic = "force-dynamic";

const getServiceDetails = async (id) => {
  try {
    // Option 1: If you have an external API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/services/${id}`, {
      cache: 'no-store' // Ensures fresh data
    });
    
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
};

const BookingPage = async ({ params }) => {
  const { id } = await params;
  const service = await getServiceDetails(id);

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
  const { id } = await params;
  const service = await getServiceDetails(id);

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
      url: `/services/${id}`,
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