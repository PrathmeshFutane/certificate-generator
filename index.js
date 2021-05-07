const viewPdf = () =>{
   
generatePDF(document.getElementById('name').value);
}

const generatePDF = async (name)=>{
    const {PDFDocument, rgb} = PDFLib;

    const exBytes = await fetch("./certificate.pdf").then(res=>{
        return res.arrayBuffer();
    });


    const pdfDoc = await PDFDocument.load(exBytes)

    

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(name,{
        x:220,
        y:440,
        size:50
    })

    const uri = await pdfDoc.saveAsBase64({dataUri : true})

    //window.open(uri)

    document.querySelector('#myPdf').src = uri;

    console.log(exBytes)
}



