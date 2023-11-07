//Encuentra el formulario por su ID
const form = document.getElementById('dishCreation');

//Encuentra el botón para enviar el formulario
const submitButton = document.getElementById('submitForm');

//Agrega un controlador de eventos para el clic en el botón
submitButton.addEventListener('click', () => {
    //Crea un objeto FormData para recopilar los datos del formulario
    const formData = new FormData(form);

    //Realiza una solicitud POST a la ruta '/' con los datos del formulario
    fetch('/', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
});