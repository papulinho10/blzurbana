import http from 'http';
import fs from 'fs';

const file = fs.createWriteStream('test.mp4');
http.get('http://localhost:3000/api/video', (res) => {
  console.log('Status:', res.statusCode);
  res.pipe(file);
  res.on('end', () => {
    console.log('Download complete');
  });
});
