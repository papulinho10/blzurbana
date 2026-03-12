import http from 'http';

http.get('http://localhost:3000/api/video', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', chunk => {
    data += chunk.toString('utf8');
    if (data.length > 500) {
      console.log('Body start:', data.substring(0, 500));
      res.destroy();
    }
  });
});
