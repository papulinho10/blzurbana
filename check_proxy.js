import http from 'http';

http.get('http://localhost:3000/api/video', { headers: { range: 'bytes=0-100' } }, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
});
