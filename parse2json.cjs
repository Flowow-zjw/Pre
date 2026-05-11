const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("paper_text.txt", pdfParser.getRawTextContent().toString());
    console.log("Saved to paper_text.txt")
});

pdfParser.loadPDF("Text2GS Text-Driven 3D Scene Generation via Progressive Multi-Stage Decou-pling.pdf");
