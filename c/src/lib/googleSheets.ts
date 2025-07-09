// Google Sheets API endpoint
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwCLK4WFe8_I1SKQWhjaCCQE_FwjKVXzoPrJKK9IaRsI5iJrf9efyc3jVHy7955Hqs/exec';

export async function sendToGoogleSheets(data: any) {
    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
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