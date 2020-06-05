const fs = require("fs");
const path = require("path");

// tache 1
fs.appendFile(path.resolve(__dirname, "./toto.txt"), "hello jlg\n", (err) => {
  // tache 2
  fs.appendFile(path.resolve(__dirname, "./toto.txt"), "hello jlg\n", (err) => {
    // tache 3
    fs.appendFile(
      path.resolve(__dirname, "./toto.txt"),
      "hello jlg\n",
      (err) => {
        // tache 4
        fs.appendFile(
          path.resolve(__dirname, "./toto.txt"),
          "hello jlg\n",
          (err) => {
            // tache 5
          }
        );
      }
    );
  });
});
