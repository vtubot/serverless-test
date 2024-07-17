const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Directory and file paths
const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'testFile.txt');
const fileContent = 'Hello, Serverless World!';

app.get('/', (req, res) => {
    // Create directory
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            console.error(`Error creating directory: ${err.message}`);
            return res.status(500).send(`Error creating directory: ${err.message}`);
        }
        console.log('Directory created successfully!');

        // Create file inside the directory
        fs.writeFile(filePath, fileContent, (err) => {
            if (err) {
                console.error(`Error creating file: ${err.message}`);
                return res.status(500).send(`Error creating file: ${err.message}`);
            }
            console.log('File created successfully!');
            res.send('Directory and file created successfully!');
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
