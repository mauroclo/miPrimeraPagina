//function showAlert() { alert("Hola, esta es una alerta desde JavaScript!");}

//if( mayorEdad >= 18 && mayorEdad < 25){
 //   console.log("Es un adulto joven");
//}else if(mayorEdad >= 18){
 //   console.log("Es mayor de edad");
//}else{
//    console.log("Es menor de edad");
//}
/*let pasos =5;
for(let paso = 0; paso<= pasos; paso++){
    console.log("Estoy dando el siguiente paso: " + paso);
}
let contador = 0;
do{
    contador++;
}while(contador < 3);
try {
    const a = 10;
    const b = 0;
    const resultado = a / b;
    console.log(resultado);
}catch(error){
    console.log("HA ocurrido un error:", erro.message);
}finally{
    console.log("Finalizando la ejecución del programa.");
}
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function(){
    alert("¡Haz hecho clic en el botón!");
});
let text = document.getElementById("texto");

text.addEventListener("unload", function textito(){
    alert("Ingresa el mensaje correcto");
});
*/
/*<form>
    <!-- Campo para nombre -->
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

    <!-- Campo para nombre -->
    <label for="Email">Correo electronico:</label>
    <input type="Email" id="Email" name="Email">

    <!-- Campo para nombre -->
    <label for="Mensaje">Mensaje:</label>
    <textarea type="Mensaje" id="Mensaje" name="Mensaje"></textarea>
    <!-- Campo para nombre -->
    <label for="Pais">Nombre:</label>
    <select id="Pais" name="Pais">
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Mexico">Mexico</option>
        <option value="Peru">Perú</option>
        </select>

        <!-- Botón de envío --> 
        <button type="submit">Enviar</button>
    </form>
*/
    const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }



  const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);

}
  
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
} else {
      alert('Correo electrónico enviado correctamente.');
    }
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})