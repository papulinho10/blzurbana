import https from 'https';

https.get('https://corsproxy.io/?' + encodeURIComponent('https://drive.google.com/uc?export=view&id=1K7livqzzCCHd9Gm4EvMOY3PuqUhG9mmU'), (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
});
