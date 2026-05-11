import fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const pdfPath = 'Text2GS Text-Driven 3D Scene Generation via Progressive Multi-Stage Decou-pling.pdf';
const data = new Uint8Array(fs.readFileSync(pdfPath));

const loadingTask = pdfjsLib.getDocument({data: data});
loadingTask.promise.then(async function(pdf) {
    let fullText = "";
    const numPages = pdf.numPages;
    for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(" ");
        fullText += pageText + "\n";
    }
    fs.writeFileSync('paper_text.txt', fullText);
    console.log("Extracted with pdfjs-dist!");
}).catch(console.error);
