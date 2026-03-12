import http from 'http';

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/video',
  headers: {
    'Range': 'bytes=1000-2000'
  }
};

http.get(options, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = Buffer.alloc(0);
  res.on('data', chunk => {
    data = Buffer.concat([data, chunk]);
  });
  res.on('end', () => {
    console.log('Downloaded bytes:', data.length);
  });
});
