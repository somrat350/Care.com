import { ObjectId } from "mongodb";

const { connect } = require("@/lib/connectDB");

const bookingsCollection = await connect("bookings");

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const query = {};
    if (id) {
      query._id = new ObjectId(id);
    }
    const result = await bookingsCollection.findOne(query);
    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
