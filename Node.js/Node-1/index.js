// npm audit fix

// import export in node js............................
// const messages = require('./message.js')
// messages.SayHello()



//*********************************************************************************************/
//Creating my own server...............................
// const http = require("http");

// const serverCallBackFunction = (req, res) => {
//     console.log("method is ", req.method);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("Yo!!! Hello From node app");
// }

// const server = http.createServer(serverCallBackFunction);

// // server.listen(3000, () => {
// //     console.log("server is listening on port 3000");
// // })
// server.listen(3000)
// console.log(server.listen);
//*********************************************************************************************/


//*********************************************************************************************/
//requesting server
// const http = require("http");

// const options = {
//     hostname: "www.google.com",
//     port: 80,
//     path: "/",
//     method: "Get"
// };

// const req = http.request(options, (res) => {
//     console.log("Status Code", res.statusCode);
//     res.on("data", (data) => {
//         process.stdout.write(data);
//     })
//     res.on("error", (error) => {
//         console.error(error);
//     })
// })
// req.end();
//*********************************************************************************************/



//*********************************************************************************************/
//file system module in node js......................................
// const fs = require("fs");

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     if (err)
//         throw err;
//     console.log(data);
// })

// const fileContent = "Text coming dynamically"
// fs.writeFile("sample.txt", fileContent, err => {
//     if (err)
//         throw err;
//     console.log("File Created");
// })

// fs.mkdir("sample", err => {
//     if (err)
//         throw err;
//     console.log("directory created");
// })


//synchronus
// const fs = require("fs");
// const data = fs.readFileSync("test.txt", "utf-8")
// console.log(data);
//*********************************************************************************************/


//*********************************************************************************************/
//Path.................................................
// const path = require("path");
// const normalizePath = path.normalize("/this/is\\my/path.js/")
// console.log(normalizePath);
//*********************************************************************************************/


//*********************************************************************************************/
// OS
// const os = require("os");
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.arch());
//*********************************************************************************************/




//*********************************************************************************************/
// BUFFER
// const buf1 = new Buffer.alloc(10);
// const buf2 = Buffer.from([10, 20, 30, 40, 50]);
// const buf3 = new Buffer.alloc(5, 'hello', 'utf-8');

// console.log(buf1);
// console.log(buf2);
// console.log(buf3);
// console.log(buf3.subarray(2, 4));

// const str = buf3.toString('utf-8', 0, buf3.length) //convert back to string
// console.log(str);

// const buf4 = Buffer.alloc(5, 'Yo-yo', 'utf-8')
// const buf5 = new Buffer.alloc(10);
// console.log(buf4);
// console.log(buf5);

// buf4.copy(buf5);
// console.log(buf5.toString('utf-8'));
// // if size is bigger than data  then data repeats
//*******************************************************************************************/




//URL*******************************************************************************************/
// const url = require('url');
// const urlString = 'https://www.example.com/path/to/page?param1=value1&param2=value2#section1'
// const parseURL = url.parse(urlString);
// console.log(parseURL.host);
// console.log(parseURL.protocol);
// console.log(parseURL.pathname);
// console.log(parseURL.query);
// console.log(parseURL.hash);


// const urlObject = {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.example.com',
//     port: null,
//     hash: '#fragment',
//     search: '?query=value',
//     query: { query: 'value' },
//     pathname: 'path/to/file',
//     // hostname: 'www.example.com',
//     // path: 'path/to/file?query=value',
//     // href: 'https://www.example.com/path/to/file?query=value#fragment'
// };

// const urlString2 = url.format(urlObject)
// console.log(urlString2);


// const fromUrl = 'https://www.example.com/path/to/file';
// const toUrl = '../other/file';
// const resolvedUrl = url.resolve(fromUrl, toUrl)
// console.log(resolvedUrl);
//URL*******************************************************************************************/


// CHALK***********************************************************************/
// require "type": "module"
// import chalk from 'chalk'
// console.log(chalk.blue('Hello World'));
// console.log(chalk.red('Hello World'));
// console.log(chalk.green('Hello World'));
//******************************************************** */

// const path = require('path');

// const resolvedPath = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
// console.log(resolvedPath);

//******************************************************** */


// const newmodule = require('mymodule')

// const chosenColor = newmodule.getRandomColor();
// console.log("you have choosen", chosenColor);

// console.log(newmodule.allColors);

// console.log(newmodule.testColor);
//******************************************************** */
