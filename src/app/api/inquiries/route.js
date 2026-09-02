import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb.js';
import Inquiry from '../../../models/Inquiry.js';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({
        success: false,
        error: 'MongoDB is not connected. Please check your MONGODB_URI in .env',
        data: [],
      });
    }

    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const { id, status } = await request.json();
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({ success: false, error: 'Database not connected' }, { status: 500 });
    }

    const updated = await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
