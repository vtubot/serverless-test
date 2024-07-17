const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

// Directory and file paths
const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'testFile.txt');
const fileContent = 'Hello, Serverless World!';

const requestHandler = (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Create directory
        fs.mkdir(dirPath, { recursive: true }, (err) => {
            if (err) {
                console.error(`Error creating directory: ${err.message}`);
                res.statusCode = 500;
                return res.end(`Error creating directory: ${err.message}`);
            }
            console.log('Directory created successfully!');

            // Create file inside the directory
            fs.writeFile(filePath, fileContent, (err) => {
                if (err) {
                    console.error(`Error creating file: ${err.message}`);
                    res.statusCode = 500;
                    return res.end(`Error creating file: ${err.message}`);
                }
                console.log('File created successfully!');
                res.statusCode = 200;
                res.end('Directory and file created successfully!');
            });
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
