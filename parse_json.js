import fs from 'fs';

const data = JSON.parse(fs.readFileSync('Text2GS Text-Driven 3D Scene Generation via Progressive Multi-Stage Decou-pling.json', 'utf8'));

let texts = [];
if (data && data.formImage && data.formImage.Pages) {
  data.formImage.Pages.forEach(page => {
    if (page.Texts) {
      page.Texts.forEach(text => {
        try {
          texts.push(decodeURIComponent(text.R[0].T));
        } catch (e) {
          texts.push(unescape(text.R[0].T));
        }
      });
    }
  });
}
fs.writeFileSync('paper_text.txt', texts.join(' '));
console.log('Saved to paper_text.txt');
