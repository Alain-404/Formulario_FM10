function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

window.addEventListener('load', async () => {

    const form = document.querySelector('#completador');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //let curso = document.getElementById('curso').value;
        let nombres = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellido').value;
        let email = document.getElementById('email').value;
        let direccion = document.getElementById('direccion').value;
        //let telefono = document.getElementById('telefono').value;
        //let hijos = document.querySelector('input[name="habilitacion"]:checked').value;
        //let numeroHijos = document.getElementById('numeroHijos').value;
        //let discapacidad = document.querySelector('input[name="discapacidad"]:checked').value;
        //let discapacidadDesc = document.getElementById('discapacidad-desc').value;

        generatePDF(nombres, apellidos, email, direccion);
    })

});

async function generatePDF(nombres, apellidos, email, direccion) {
    const image = await loadImage("pagina1.jpg");
    //const image1 = await loadImage("pagina2.jpg");
     
    //const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'a4'); //letter

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    //pdf.addImage(image1, 'PNG', 0, 0, 565, 792);
    //pdf.addImage(signatureImage, 'PNG', 200, 605, 300, 60);

    pdf.setFontSize(10);
    //pdf.text(curso, 260, 125);

    /*const date = new Date();
    pdf.text(date.getUTCDate().toString(), 100, 152);
    pdf.text((date.getUTCMonth() + 1).toString(), 120, 152);
    pdf.text(date.getUTCFullYear().toString(), 140, 152);*/

    pdf.setFontSize(10);
    pdf.text(nombres, 170, 213);
    pdf.text(apellidos, 170, 200);
    pdf.text(direccion, 170, 400);
    //pdf.text(telefono, 170, 456);
    pdf.text(email, 170, 475);

    pdf.setFillColor(0,0,0);

    /*if (parseInt(hijos) === 0) {
        pdf.circle(255, 374, 4, 'FD');
    } else {
        pdf.circle(190, 374, 4, 'FD');
        pdf.text(numeroHijos.toString(), 355, 378);
    }

    if (parseInt(discapacidad) === 0) {
        pdf.circle(285, 718, 4, 'FD');
    } else {
        pdf.circle(240, 718, 4, 'FD');
        pdf.text(discapacidadDesc, 350, 720);
    }*/

    pdf.save("Ficha.pdf");

}