//Encuentra el formulario por su ID
const form = document.getElementById('mailForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // vita que el formulario se envíe normalmente

    const formData = new FormData(form);

    try {
        const response = await fetch('/nosotros/contacto', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            console.log('Correo enviado con éxito');
        } else {
            console.error('Error al enviar el correo');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
});