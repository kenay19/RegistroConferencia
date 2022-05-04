const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    $.ajax({
        url: '/',
        type: 'POST',
        dataType: 'json',
        data: { Cuenta:form.cuenta.value},
        success: (e) => {
            document.getElementById('message').innerHTML = e;
        },
        error: (e) => {
            console.log("server can't give one response");
        }

    });
})