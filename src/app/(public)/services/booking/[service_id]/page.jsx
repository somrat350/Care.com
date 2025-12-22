"use server";

import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/public/booking/BookingForm";

const services = [
  {
    _id: 1,
    img: "https://img.freepik.com/premium-photo/woman-pink-shirt-sits-floor-living-room_85574-10046.jpg?w=1060",
    title: "Baby Care",
    pricePerDay: 50,
  },
];

const wareHouses =
  (await fetch("http://localhost:3000/location.json").then((res) =>
    res.json()
  )) || [];

const BookingPage = async ({ params }) => {
  const { service_id } = await params;
  const service = services.find((s) => s._id == service_id);

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
        <BookingForm wareHouses={wareHouses} />
      </div>
    </div>
  );
};

export default BookingPage;
