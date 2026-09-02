import { NextResponse } from 'next/server';
import { sendInquiryEmail } from '../../../../server/emailHandler.js';
import { connectToDatabase } from '../../../lib/mongodb.js';
import Inquiry from '../../../models/Inquiry.js';

export async function POST(request) {
  try {
    const data = await request.json();

    // 1. Save to MongoDB (if configured)
    let savedInquiryId = null;
    try {
      const conn = await connectToDatabase();
      if (conn) {
        const newInquiry = await Inquiry.create({
          formType: data.formType || 'contact',
          name: data.name,
          phone: data.phone,
          email: data.email || '',
          service: data.service || 'General Inquiry',
          areaSize: data.areaSize || '',
          location: data.location || '',
          estimatedPrice: data.estimatedPrice || '',
          message: data.message || '',
          notes: data.notes || '',
          status: 'New',
        });
        savedInquiryId = newInquiry._id;
        console.log('✅ Saved inquiry to MongoDB with ID:', savedInquiryId);
      }
    } catch (dbError) {
      console.error('⚠️ Could not save to MongoDB (proceeding with email):', dbError.message);
    }

    // 2. Send SMTP Email Notification
    const emailResult = await sendInquiryEmail(data);

    return NextResponse.json({
      success: true,
      messageId: emailResult.messageId,
      dbId: savedInquiryId,
    });
  } catch (error) {
    console.error('SMTP Next.js Route Handler Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
