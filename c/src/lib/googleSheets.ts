// src/lib/googleSheets.ts

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

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwb0V4pbGRpkFqyzZ_fzO1fCCUi7DFzr2sa8Tz39gdzSMTLYq4519qHY-ga__HDPHJ0/exec';

export async function sendToGoogleSheets(data: FormData): Promise<boolean> {
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    return true;
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    return false;
  }
}
