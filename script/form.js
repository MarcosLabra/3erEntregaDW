document.getElementById("btnSubmit").addEventListener("click", (e) => {
  e.preventDefault();
  const nombreCliente = document.getElementById("nombre").value;
  const emailCliente = document.getElementById("email").value;
  const form = document.getElementById("formulario");
  form.innerHTML = "";
  let mensaje = `<div class="msjForm">Gracias <span>${nombreCliente}</span> por comunicarte!
              <p>a la brevedad recibira respuesta en <span>${emailCliente}</span></p>
              </div>`;
  form.innerHTML = mensaje;
});
