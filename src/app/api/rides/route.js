import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"
import Ride from "@/models/Ride";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("BODY RECEIVED:",body);
    console.log(body);
    


    const ride = await Ride.create(body);

    return NextResponse.json({
      success: true,
      data: ride,
    });
  } catch (error) {
    console.log("Mongo Error:", error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}

export async function GET() {
    try {
  await connectDB();

  const rides = await Ride.find().sort({ createdAt: -1 });

  return NextResponse.json(rides);
} catch (error) {
    console.log("fetch Error:" , error);
    return NextResponse.json(
        {
            success: false,
            error: error.message,

        },
        { status: 500}
    );

}
}

