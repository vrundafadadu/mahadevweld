/**
 * Send inquiry or quote data to the backend SMTP endpoint
 */
export async function sendInquiry(payload) {
  try {
    const res = await fetch('/api/send-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return { success: false, error: error.message };
  }
}
