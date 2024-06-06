const  fileElement =document.querySelector("#inputElement");
const  pdfContainer= document.querySelector(".display");




//-------------------------------------------------------------------------->>>


fileElement.addEventListener("change",(event)=>{
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        // Create a URL for the selected PDF file
        const pdfUrl = URL.createObjectURL(file);

        // Create an iframe element for embedding the PDF
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', pdfUrl);
        iframe.setAttribute('width', '50%');
        iframe.setAttribute('height', '500px');
         // Adjust height as needed

         

        
        pdfContainer.innerHTML = '';
        pdfContainer.appendChild(iframe);
        const newElement=document.createElement('div');
    //   newElement.innerText='output';
        newElement.setAttribute('width', '50%');
        newElement.setAttribute('width', '100%');
        pdfContainer.appendChild(newElement);
        const P1=document.createElement('p');
        P1.innerText='Output';
        newElement.appendChild(P1);
        P1.setAttribute("id","P1");




    } else {
        console.log('Unsupported file type or no file selected.');
    }
   
        
    
});


