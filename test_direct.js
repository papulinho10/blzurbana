import http from 'http';
import https from 'https';

https.get('https://drive.google.com/uc?export=download&id=1K7livqzzCCHd9Gm4EvMOY3PuqUhG9mmU', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
});
