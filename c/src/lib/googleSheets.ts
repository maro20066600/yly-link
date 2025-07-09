// Google Sheets API endpoint
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwCLK4WFe8_I1SKQWhjaCCQE_FwjKVXzoPrJKK9IaRsI5iJrf9efyc3jVHy7955Hqs/exec';

interface FormData {
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
