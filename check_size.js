import fs from 'fs';
const stats = fs.statSync('test.mp4');
console.log('Size:', stats.size);
