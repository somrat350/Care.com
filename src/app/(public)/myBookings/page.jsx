import PrivatePageProtector from "@/components/PrivatePageProtector";
import { getServerSession } from "next-auth";
import Link from "next/link";

const getMyBookings = async (email) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/booking?email=${email}`
  );
  const data = await res.json();
  return data || [];
};

const MyBookingsPage = async () => {
  const session = await getServerSession();
  const bookings = await getMyBookings(session?.user.email);

  return (
    <PrivatePageProtector>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-4xl font-bold text-secondary mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <p className="text-base-content/70">You have no bookings yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Duration</th>
                  <th>Location</th>
                  <th>Total Cost</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.serviceName}</td>
                    <td>
                      {booking.duration} {booking.durationType}
                    </td>
                    <td>{booking.address}</td>
                    <td>$ {booking.cost}</td>
                    <td>
                      <span
                        className={`badge ${
                          booking.status === "pending"
                            ? "badge-warning"
                            : booking.status === "confirmed"
                            ? "badge-info"
                            : booking.status === "completed"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="flex gap-2">
                      <Link
                        href={`/myBookings/${booking._id}`}
                        className="btn btn-xs btn-outline"
                      >
                        View
                      </Link>

                      {booking.status === "pending" && (
                        <button className="btn btn-xs btn-error">Cancel</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PrivatePageProtector>
  );
};

export default MyBookingsPage;
