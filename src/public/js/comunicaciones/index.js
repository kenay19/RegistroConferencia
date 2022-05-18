const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    $.ajax({
        url: '/',
        type: 'POST',
        dataType: 'json',
        data: { 
            Cuenta:form.cuenta.value
        },success: (e) => {
            form.cuenta.value = "";
            if(e.response) {
                document.getElementById('message').innerHTML = e.response;
            }if(e.cuenta) {
                document.getElementById('qr').setAttribute('src','img/'+e.cuenta+".svg");
            }
        },
        error: (e) => {
            console.log("server can't give one response");
        }});
    });