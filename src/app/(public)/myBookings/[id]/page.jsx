import Link from "next/link";
import PrivatePageProtector from "@/components/PrivatePageProtector";

const statusColor = {
  pending: "badge-warning",
  confirmed: "badge-info",
  completed: "badge-success",
  cancelled: "badge-error",
};

const getSingleBooking = async (id) => {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/bookings/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());
  return data || {};
};

const BookingDetailsPage = async ({ params }) => {
  const { id } = await params;
  const booking = await getSingleBooking(id);
  return (
    <PrivatePageProtector>
      <div className="max-w-5xl mx-auto my-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-secondary">Booking Details</h1>
          <p className="text-base-content/70 mt-1">
            Review your service booking information
          </p>
        </div>

        {/* Main Card */}
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body space-y-6">
            {/* Top Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  {booking.serviceName}
                </h2>
                <p className="text-sm text-base-content/70">
                  Booking ID: #{booking._id}
                </p>
              </div>

              <span className={`badge badge-lg ${statusColor[booking.status]}`}>
                {booking.status}
              </span>
            </div>

            <div className="divider"></div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-base-content/60">Duration</p>
                <p className="font-semibold text-lg">
                  {booking.duration} {booking.durationType}
                </p>
              </div>

              <div>
                <p className="text-sm text-base-content/60">Total Cost</p>
                <p className="font-semibold text-lg text-secondary">
                  $ {booking.cost}
                </p>
              </div>

              <div>
                <p className="text-sm text-base-content/60">Address</p>
                <p className="font-semibold">{booking.address}</p>
              </div>

              <div>
                <p className="text-sm text-base-content/60">Booked On</p>
                <p className="font-semibold">
                  {new Date(booking.createdAt).toISOString()}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {booking.status === "pending" && (
                <button className="btn btn-error text-white flex-1">
                  Cancel Booking
                </button>
              )}

              <Link href="/myBookings" className="btn btn-outline flex-1">
                Back to My Bookings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PrivatePageProtector>
  );
};

export default BookingDetailsPage;
