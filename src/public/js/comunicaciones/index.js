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
            window.location.href="#popup1"
        },
        error: (e) => {
            console.log("server can't give one response");
        }
    });
});

document.addEventListener('keydown',(e) => {
    if (event.ctrlKey) {
        if (event.keyCode == 82 || event.keyCode == 116) {
            window.location.href = "/"
        }
     }
})