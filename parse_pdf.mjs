import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('Text2GS Text-Driven 3D Scene Generation via Progressive Multi-Stage Decou-pling.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('paper_text.txt', data.text);
    console.log('Saved to paper_text.txt');
}).catch(console.error);
