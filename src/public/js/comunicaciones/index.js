const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    $.ajax({
        url: '/',
        type: 'POST',
        dataType: 'json',
        data: { cuenta:form.cuenta.value},
        success: (e) => {
            console.log(form.cuenta.value);
            form.cuenta.value="";
            console.log(form.cuenta.value);
            console.log("==========================");
        }

    });
})