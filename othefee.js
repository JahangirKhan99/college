function convertAmount() {
    let num = document.getElementById("amount").value;
    document.getElementById("amountWords").innerText = num ? (`${numberToWords(num)}`) : "";
}


function numberToWords(num) {
    const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
        "Eighteen", "Nineteen"
    ];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num < 20) return a[num];
    if (num < 100) return b[Math.floor(num / 10)] + (num % 10 ? " " + a[num % 10] : "");
    if (num < 1000) return a[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " " + numberToWords(num % 100) : "");
    if (num < 1000000) return numberToWords(Math.floor(num / 1000)) + " Thousand" + (num % 1000 ? " " + numberToWords(num % 1000) : "");
    return num;
}


async function fillPDF() {


    const pdfUrl = "feeSlip.pdf";
    const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer());

    const { PDFDocument, rgb } = PDFLib;
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    
    const date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let tareh = `${day}/${month}/${year} `;

    const name = document.getElementById("name").value;
    const fname = document.getElementById("f/name").value;

    const Session = document.getElementById("Session").value;

    const registrationNo = document.getElementById("Reg").value;

    const samester = document.getElementById("Samester").value;
    const dept = document.getElementById("Dept").value;

    const amount = document.getElementById("amount").value;
    const amountWords = numberToWords(amount);

    // 1st page

    firstPage.drawText(`${tareh}`, {
        x: 120,
        y: 474,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${name}`, {
        x: 160,
        y: 460,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 140,
        y: 446,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 109,
        y: 432,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${Session}`, {
        x: 190,
        y: 432,
        size: 10,
        color: rgb(0, 0, 0)
    });

     
    firstPage.drawText(`${dept}`, {
        x: 120,
        y: 415,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${registrationNo}`, {
        x: 125,
        y: 400,
        size: 10,
        color: rgb(0, 0, 0)
    });

 

    firstPage.drawText(`${amount}`, {
        x: 217,
        y: 200,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 85,
        y: 173,
        size: 8,
        color: rgb(0, 0, 0)
    });


    // 2nd page

    firstPage.drawText(`${tareh}`, {
        x: 120 + 180,
        y: 474,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${name}`, {
        x: 340,
        y: 460,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 320,
        y: 446,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 109 + 180,
        y: 432,
        size: 8,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${Session}`, {
        x: 190 + 180,
        y: 432,
        size: 10,
        color: rgb(0, 0, 0)
    });

     
    firstPage.drawText(`${dept}`, {
        x: 120 + 180,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${registrationNo}`, {
        x: 125 + 180,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0)
    });

 

    firstPage.drawText(`${amount}`, {
        x: 217 + 180,
        y: 200,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 85 + 180,
        y: 173,
        size: 8,
        color: rgb(0, 0, 0)
    });


    // // 3rd page

    firstPage.drawText(`${tareh}`, {
        x: 120 + 360,
        y: 474,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${name}`, {
        x: 160 + 358,
        y: 460,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 140 + 360,
        y: 446,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 109 + 357,
        y: 432,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${Session}`, {
        x: 190 + 360,
        y: 432,
        size: 10,
        color: rgb(0, 0, 0)
    });

     
    firstPage.drawText(`${dept}`, {
        x: 120 + 360,
        y: 415,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${registrationNo}`, {
        x: 125 + 360,
        y: 400,
        size: 10,
        color: rgb(0, 0, 0)
    });

 

    firstPage.drawText(`${amount}`, {
        x: 217 + 355,
        y: 200,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 85 + 360,
        y: 173,
        size: 8,
        color: rgb(0, 0, 0)
    });


    // // 4th page

    firstPage.drawText(`${tareh}`, {
        x: 120 + 540,
        y: 474,
        size: 10,
        color: rgb(0, 0, 0)
    });    

    firstPage.drawText(`${name}`, {
        x: 160 + 535,
        y: 460,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 140 + 535,
        y: 446,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 109 + 535,
        y: 432,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${Session}`, {
        x: 190 + 540,
        y: 432,
        size: 10,
        color: rgb(0, 0, 0)
    });

     
    firstPage.drawText(`${dept}`, {
        x: 120 + 535,
        y: 415,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${registrationNo}`, {
        x: 125 + 540,
        y: 400,
        size: 10,
        color: rgb(0, 0, 0)
    });

 

    firstPage.drawText(`${amount}`, {
        x: 217 + 535,
        y: 200,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 85 + 535,
        y: 173,
        size: 8,
        color: rgb(0, 0, 0)
    });





    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrlBlob = URL.createObjectURL(blob);


    const link = document.createElement("a");
    link.href = pdfUrlBlob;
    link.download = `OtherFee_${name}.pdf`;
    link.click();


}