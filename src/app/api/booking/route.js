const { connect } = require("@/lib/connectDB");

const bookingCollection = await connect("booking");

export async function POST(req) {
  try {
    const newBooking = await req.json();
    const result = await bookingCollection.insertOne(newBooking);
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
    const result = await bookingCollection.find(query).toArray();
    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
