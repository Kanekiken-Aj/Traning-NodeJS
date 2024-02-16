const fs = require('fs');
const filename = process.argv[2];

if(!filename){
    console.error("Please provide a file name.");
    process.exit(1);
}

fs.readFile(filename, 'utf-8',(err,data)=>{
    if(err){
        console.error(`Error reading file: ${err}`);
        process.exit(1);
    }
    console.log("File content:");
    console.log(data)
});