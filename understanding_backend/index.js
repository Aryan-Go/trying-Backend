const fs = require('fs');

fs.writeFile("hey.txt", "Hello world\n", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Mission accomplished");
    }
})

fs.appendFile("hey.txt", "hellosdgklsdjh world appended", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mission accomplished");
  }
});

fs.rename("hey.txt", "rename.txt", (err)=> {
    if(err) {
        console.log(err);
    }
    else{
        console.log("File renamed successfully");
    }
})

fs.copyFile("rename.txt", "./copy/copy.txt", (err) => {
    if (err) {
        console.log(err);
    }    
    else {
            console.log("Mission accomplished last");
        }
})

fs.unlink("./copy/copy.txt", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File deleted successfully");
    }
})