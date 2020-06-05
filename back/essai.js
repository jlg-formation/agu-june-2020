const fs = require("fs");
const path = require("path");

function appendFilePromise(file, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, str, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

// tache 1
appendFilePromise(path.resolve(__dirname, "./toto.txt"), "hello jlg\n")
  .then((result) => {
      // tache 2
    return appendFilePromise(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n"
    );
  })
  .then((result) => {
      // tache 3
    return appendFilePromise(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n"
    );
  })
  .then((result) => {
      // tache 4
    return appendFilePromise(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n"
    );
  })
  .catch((err) => {
    console.log("err: ", err);
  });
