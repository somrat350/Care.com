const { connect } = require("@/lib/connectDB");

const servicesCollection = await connect("services");

export async function GET(req) {
  try {
    const result = await servicesCollection.find().toArray();
    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
