const fs = require('fs');
const path = require('path');

const historyDir = './migrated_prompt_history';
const files = fs.readdirSync(historyDir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const data = JSON.parse(fs.readFileSync(path.join(historyDir, file), 'utf8'));
    for (const message of data) {
      if (message.payload && message.payload.files) {
        for (const fileDataStr of message.payload.files) {
          try {
            const fileData = JSON.parse(fileDataStr);
            if (fileData.name && fileData.data) {
              const base64Data = fileData.data.split(',')[1] || fileData.data;
              fs.writeFileSync(fileData.name, Buffer.from(base64Data, 'base64'));
              console.log(`Extracted ${fileData.name}`);
            }
          } catch (e) {
            console.error(e);
          }
        }
      }
    }
  }
}
