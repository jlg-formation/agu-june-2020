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

function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

(async function () {
  try {
    await sleep(2000);
    // tache 1
    await appendFilePromise(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n"
    );
    // tache 2
    await appendFilePromise(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n"
    );
    // tache 3
    await appendFilePromise(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n"
    );
    // tache 4
    await appendFilePromise(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n"
    );
    // tache 5
  } catch (err) {
    console.log("err: ", err);
  }
})();
