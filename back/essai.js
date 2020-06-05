const fs = require("fs");
const path = require("path");

fs.appendFile(path.resolve(__dirname, "./toto.txt"), "hello jlg\n",);
fs.appendFileSync(path.resolve(__dirname, "./toto.txt"), "hello jlg\n");
fs.appendFileSync(path.resolve(__dirname, "./toto.txt"), "hello jlg\n");
fs.appendFileSync(path.resolve(__dirname, "./toto.txt"), "hello jlg\n");
