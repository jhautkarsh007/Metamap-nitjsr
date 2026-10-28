import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const assetsDir = path.join(projectRoot, 'public', 'assets');

const img1Path = path.join(assetsDir, 'brochure_page1.jpg');
const img2Path = path.join(assetsDir, 'brochure_page2.jpg');
const outPdfPath = path.join(assetsDir, 'METAMAP_2027_Brochure.pdf');

const img1Data = fs.readFileSync(img1Path);
const img2Data = fs.readFileSync(img2Path);

const width = 1024;
const height = 723;

const contentStream1 = Buffer.from(`q\n${width} 0 0 ${height} 0 0 cm\n/Im1 Do\nQ\n`, 'binary');
const contentStream2 = Buffer.from(`q\n${width} 0 0 ${height} 0 0 cm\n/Im2 Do\nQ\n`, 'binary');

const chunks = [];
const offsets = [0]; // index 0 is dummy

function addChunk(strOrBuf) {
  const buf = typeof strOrBuf === 'string' ? Buffer.from(strOrBuf, 'binary') : strOrBuf;
  chunks.push(buf);
}

function getCurrentOffset() {
  return chunks.reduce((acc, c) => acc + c.length, 0);
}

// Header
addChunk('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');

// Obj 1: Catalog
offsets[1] = getCurrentOffset();
addChunk(`1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
`);

// Obj 2: Pages
offsets[2] = getCurrentOffset();
addChunk(`2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R 4 0 R]
  /Count 2
>>
endobj
`);

// Obj 3: Page 1
offsets[3] = getCurrentOffset();
addChunk(`3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 ${width} ${height}]
  /Resources <<
    /ProcSet [/PDF /ImageC]
    /XObject <<
      /Im1 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
`);

// Obj 4: Page 2
offsets[4] = getCurrentOffset();
addChunk(`4 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 ${width} ${height}]
  /Resources <<
    /ProcSet [/PDF /ImageC]
    /XObject <<
      /Im2 7 0 R
    >>
  >>
  /Contents 8 0 R
>>
endobj
`);

// Obj 5: Image 1 XObject
offsets[5] = getCurrentOffset();
addChunk(`5 0 obj
<<
  /Type /XObject
  /Subtype /Image
  /Width ${width}
  /Height ${height}
  /ColorSpace /DeviceRGB
  /BitsPerComponent 8
  /Filter /DCTDecode
  /Length ${img1Data.length}
>>
stream
`);
addChunk(img1Data);
addChunk('\nendstream\nendobj\n');

// Obj 6: Content Stream 1
offsets[6] = getCurrentOffset();
addChunk(`6 0 obj
<<
  /Length ${contentStream1.length}
>>
stream
`);
addChunk(contentStream1);
addChunk('endstream\nendobj\n');

// Obj 7: Image 2 XObject
offsets[7] = getCurrentOffset();
addChunk(`7 0 obj
<<
  /Type /XObject
  /Subtype /Image
  /Width ${width}
  /Height ${height}
  /ColorSpace /DeviceRGB
  /BitsPerComponent 8
  /Filter /DCTDecode
  /Length ${img2Data.length}
>>
stream
`);
addChunk(img2Data);
addChunk('\nendstream\nendobj\n');

// Obj 8: Content Stream 2
offsets[8] = getCurrentOffset();
addChunk(`8 0 obj
<<
  /Length ${contentStream2.length}
>>
stream
`);
addChunk(contentStream2);
addChunk('endstream\nendobj\n');

// Cross-reference table
const startxref = getCurrentOffset();
let xref = `xref\n0 9\n0000000000 65535 f \n`;
for (let i = 1; i <= 8; i++) {
  const offStr = String(offsets[i]).padStart(10, '0');
  xref += `${offStr} 00000 n \n`;
}

addChunk(xref);
addChunk(`trailer
<<
  /Size 9
  /Root 1 0 R
  /Info <<
    /Title (METAMAP 2027 Workshop Brochure)
    /Author (NIT Jamshedpur)
    /Subject (Metallurgical and Materials Processing: Principles and Industrial Practices)
    /Creator (National Institute of Technology Jamshedpur)
  >>
>>
startxref
${startxref}
%%EOF
`);

const finalPdfBuffer = Buffer.concat(chunks);
fs.writeFileSync(outPdfPath, finalPdfBuffer);
console.log(`Generated PDF successfully at: ${outPdfPath} (${finalPdfBuffer.length} bytes)`);
