document.getElementById("nic").addEventListener("input", function() {

    let value = this.value.replace(/\D/g, "");
    if (value.length > 13) value = value.slice(0, 13);
    if (value.length > 5) value = value.replace(/(\d{5})(\d{0,7})/, "$1-$2");
    if (value.length > 12) value = value.replace(/(\d{5})-(\d{7})(\d{0,1})/, "$1-$2-$3");
    this.value = value;
});


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


    const pdfUrl = "ExamChallanForm.pdf";
    const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer());

    const { PDFDocument, rgb } = PDFLib;
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const name = document.getElementById("name").value;
    const fname = document.getElementById("f/name").value;
    const colleg = document.getElementById("college").value;
    const registrationNo = document.getElementById("Reg").value;
    const nic = document.getElementById("nic").value;
    const samester = document.getElementById("Samester").value;
    const dept = document.getElementById("Dept").value;
    const phone = document.getElementById("ContactNo").value;
    const amount = document.getElementById("amount").value;
    const amountWords = numberToWords(amount);

    // 1st page



    firstPage.drawText(`${name}`, {
        x: 100,
        y: 430,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 100,
        y: 413,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${colleg}`, {
        x: 98,
        y: 396,
        size: 8,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${registrationNo}`, {
        x: 100,
        y: 379,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${nic}`, {
        x: 100,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 100,
        y: 347,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${dept}`, {
        x: 100,
        y: 331,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${phone}`, {
        x: 100,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amount}`, {
        x: 130,
        y: 85,
        size: 12,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 48,
        y: 59,
        size: 6,
        color: rgb(0, 0, 0)
    });


    // 2nd page


    firstPage.drawText(`${name}`, {
        x: 100 + 180,
        y: 430,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 100 + 180,
        y: 413,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${colleg}`, {
        x: 100 + 178,
        y: 396,
        size: 8,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${registrationNo}`, {
        x: 100 + 180,
        y: 379,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${nic}`, {
        x: 100 + 180,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 100 + 180,
        y: 347,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${dept}`, {
        x: 100 + 180,
        y: 331,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${phone}`, {
        x: 100 + 180,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amount}`, {
        x: 130 + 180,
        y: 85,
        size: 12,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 48 + 180,
        y: 59,
        size: 6,
        color: rgb(0, 0, 0)
    });


    // // 3rd page

    firstPage.drawText(`${name}`, {
        x: 100 + 180 + 180,
        y: 430,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 100 + 180 + 180,
        y: 413,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${colleg}`, {
        x: 100 + 180 + 178,
        y: 396,
        size: 8,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${registrationNo}`, {
        x: 100 + 180 + 180,
        y: 379,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${nic}`, {
        x: 100 + 180 + 180,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 100 + 180 + 180,
        y: 347,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${dept}`, {
        x: 100 + 180 + 180,
        y: 331,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${phone}`, {
        x: 100 + 180 + 180,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amount}`, {
        x: 130 + 180 + 180,
        y: 85,
        size: 12,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 48 + 180 + 180,
        y: 59,
        size: 6,
        color: rgb(0, 0, 0)
    });


    // // 4th page

    firstPage.drawText(`${name}`, {
        x: 100 + 180 + 180 + 180,
        y: 430,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${fname}`, {
        x: 100 + 180 + 180 + 180,
        y: 413,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(` ${colleg}`, {
        x: 100 + 180 + 180 + 178,
        y: 396,
        size: 8,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${registrationNo}`, {
        x: 100 + 180 + 180 + 180,
        y: 379,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${nic}`, {
        x: 100 + 180 + 180 + 180,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0)
    });

    firstPage.drawText(`${samester}`, {
        x: 100 + 180 + 180 + 180,
        y: 347,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${dept}`, {
        x: 100 + 180 + 180 + 180,
        y: 331,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${phone}`, {
        x: 100 + 180 + 180 + 180,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amount}`, {
        x: 130 + 180 + 180 + 230,
        y: 85,
        size: 12,
        color: rgb(0, 0, 0)
    });
    firstPage.drawText(`${amountWords}`, {
        x: 48 + 180 + 180 + 180,
        y: 59,
        size: 6,
        color: rgb(0, 0, 0)
    });




    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrlBlob = URL.createObjectURL(blob);


    const link = document.createElement("a");
    link.href = pdfUrlBlob;
    link.download = `PassportChallan_${name}.pdf`;
    link.click();


}

let images = document.querySelectorAll('.image-container img');
let index = 0;

setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}, 5000);