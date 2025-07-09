const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwb0V4pbGRpkFqyzZ_fzO1fCCUi7DFzr2sa8Tz39gdzSMTLYq4519qHY-ga__HDPHJ0/exec';

export interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  governorate: string;
  university: string;
  college: string;
  year: string;
  committee: string;
  hasVolunteered: string;
  volunteerHistory: string;
  acceptTerms: boolean;
  timestamp: string;
}

export async function sendToGoogleSheets(data: FormData): Promise<boolean> {
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // 👈 حل مشكلة CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // مفيش طريقة نعرف إذا وصل أو لا، فهنرجع true دائمًا
    return true;
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    return false;
  }
}
