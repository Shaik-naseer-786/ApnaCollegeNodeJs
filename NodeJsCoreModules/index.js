const path = require('path');
//1. Path Module
// path join
// const folderPath = '/Users/username/Documents';
// const fileName = 'example.txt';

// const filePath = path.join(folderPath, fileName);
// // Output: /Users/username/Documents/example.txt
// console.log(filePath);

//2. Path resolve
// const absolutepath='Users/username/Documents/example.txt';
// const relativePath='../images/pic.jpeg';

// const resolvePath=path.resolve(absolutepath,relativePath);
// console.log(resolvePath);

//3. path parse 

// const foldername='/user/downloads/documents/example.txt';
// const output=path.parse(foldername);
// console.log(output);

//4.path normalize
// const foldername='/user/downloads/documents/./images/../pic.jpeg/example.txt';
// const output=path.normalize(foldername);
// console.log(output);
//5. path extname

//  const foldername='/user/downloads/documents/example.txt';
// const output=path.extname(foldername);
// console.log(output);

