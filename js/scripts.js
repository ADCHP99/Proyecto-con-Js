//query selector
const heading = document.querySelector('.header__texto h2')//retorna cero o un elemento
heading.textContent='Nuevo Heading'
console.log(heading)

//querey selector all
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)

enlaces[0].textContent='Nuevo enlace de texto';
//enlaces[0].href='google.com'
enlaces[0].classList.add('nuevo-lase')

//enlaces[0].classList.remove('navegacion__enlace')
//getEelementId

const heading2=document.getElementById(heading);
console.log(heading2)

//Generar codigo en javascript

const nuevoEnlace=document.createElement('A')

//Agregar el href
nuevoEnlace.href="nuevo-enlace.html";

//Agregar texto
nuevoEnlace.textContent='Nuevo enlace'

//Agregar clase

nuevoEnlace.classList.add('navegacion__enlace')

console.log(nuevoEnlace)

//Agregar documento

const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//EVENTOS

console.log(1);

window.addEventListener('load',function(){ //load espera que los archivo este listo
    
console.log(2);
})

window.onload=function(){
    console.log(3)

}
document.addEventListener('DOMContentLoaded',function(){ //solo le importa descargar el html
    console.log(4)
})
console.log(5);

//selecionar  elementos y asociarles un evento

//const btnEnviar= document.querySelector('.boton--primario')
//btnEnviar.addEventListener('click',function(evento){
//    console.log(evento)
//    evento.preventDefault()
//    console.log('Enviar formulario')
//})

//Eventos de los inputs o los text area

const datos={
    nombre:'',
    email:'',
    mensaje:''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario= document.querySelector('.formulario')


nombre.addEventListener('input',leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input',leerTexto)

//Evento de submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault()
    //validar el formulario

    const { nombre, email, mensaje}=datos;
    
        if(nombre==='' || email==='' || mensaje===''){
            mostrarAlerta('Todos los campos son obligatorio',true)
            return;
        }
        mostrarAlerta('Todo correcto')
        
    //enviar formulario
        console.log('Enviar formulario')
})



function leerTexto(e){
    
    datos[e.target.id]=e.target.value
    
    //console.log(datos)
}

//Muestra un error en pantalla

function mostrarAlerta(mensaje,error=null){
    const alerta = document.createElement('p')
    alerta.textContent=mensaje
    if(error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta)
    setTimeout(()=>{
        alerta.remove()
    },5000)
}



