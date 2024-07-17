const fs = require('fs');
const path = require('path');

// Directory and file paths
const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'testFile.txt');
const fileContent = 'Hello, Serverless World!';

// Create directory
fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        return console.error(`Error creating directory: ${err.message}`);
    }
    console.log('Directory created successfully!');

    // Create file inside the directory
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            return console.error(`Error creating file: ${err.message}`);
        }
        console.log('File created successfully!');
    });
});
