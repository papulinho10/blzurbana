import https from 'https';

https.get('https://drive.usercontent.google.com/download?id=1K7livqzzCCHd9Gm4EvMOY3PuqUhG9mmU&export=download', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
});
