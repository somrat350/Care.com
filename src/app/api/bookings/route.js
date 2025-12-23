const { connect } = require("@/lib/connectDB");

const bookingsCollection = await connect("bookings");

export async function POST(req) {
  try {
    const newBooking = await req.json();
    const result = await bookingsCollection.insertOne(newBooking);
    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const query = {};
    if (email) {
      query.email = email;
    }
    const result = await bookingsCollection.find(query).toArray();
    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
