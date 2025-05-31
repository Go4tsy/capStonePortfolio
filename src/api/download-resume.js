// API route to log resume downloads and redirect to the actual PDF
// In production, you could log to a database or analytics service
export default function handler(req, res) {
  // TODO: Add logging logic here (e.g., send event to analytics or database)
  res.writeHead(302, { Location: '/resume.pdf' });
  res.end();
} 