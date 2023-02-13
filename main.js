//Bienvenidos al Hotel QueMirá

class CheckIn{
    constructor (nombre, apellido,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni= dni;
    }
}

const Jose = new CheckIn ("Jose", "Moreno", 34698522);
const Mariana = new CheckIn( "Mariana", "Melo", 18965782);
const Paula = new CheckIn( "Paula", "Conti", 40555986);
const Marcos = new CheckIn("Marcos","Segovia", 24587963);


const arrayRegistros = [Jose, Mariana, Paula, Marcos];
console.log(arrayRegistros);


//funcion para agregar un nuevo usuario

function nuevoRegistro(){
    let nombre = prompt ("Ingrese su Nombre");
    let apellido = prompt("Ingrese su Apellido");
    let dni = parseInt(prompt("Ingrese su DNI:"));
    let registro = new CheckIn (nombre,apellido, dni);
    arrayRegistros.push (registro); //aca se pushea el usuario por el ultimo lugar
    console.log(arrayRegistros);
    console.log(arrayRegistros [4]);
}

//funcion para ver si tengo descuento

function descuento(){
    let tengoDescuento = prompt("Promocion:¿Es usted estudiante? (si/no) "); 
    if(tengoDescuento.toLocaleLowerCase() === "si"){
    alert ("Se aplica el descuento, ingrese (ESTUDIANTE) en su monto para ver reflejado el descuento"); 
    }else{
        alert ("Lo sentimos, no aplica el descuento")
    }
}


//funcion para obtener el monto total

function valorTotal (){
    let dias = parseInt(prompt("Ingrese la cantidad de días de su estadía: "))
    let estudiante = prompt ("Si tiene un codigo promocional por favor, ingreselo ahora, sino escriba no:  ")
    if (isNaN(dias)) {
        console.log("Lo siento, debe ingresar un número válido para la cantidad de días");
      } else if (dias >= 3 && estudiante.toLocaleLowerCase()=== "estudiante" ) {
        console.log("El monto total por los días es: " + ((dias * 50) - 100) + " USD");
      } else if (dias < 3 && estudiante.toLocaleLowerCase()=== "estudiante")  {
        console.log("El monto total por los días es: " + ((dias * 100) - 100) + " USD");
      } else if(dias >= 3) {
        console.log("El monto total por los días es: " + (dias * 50) + " USD");
      }else if (dias < 3){
        console.log("El monto total por los días es: " + (dias * 100) + " USD");
      }else{
        console.log("Lo siento, no es una opción válida, intente nuevamente");
    } 
    }
    
//funcion para eliminar usuario
 function bajaRegistro(){
    let dni = parseInt(prompt ("Ingrese su DNI"));
    let registro = arrayRegistros.find (registro => registro.dni === dni);
    if (!registro) {
        console.log("Lo siento, el DNI ingresado no se encuentra registrado, por favor ingrese un DNI válido");
        return;
      }
    let indice = arrayRegistros.indexOf(registro);
    let confirmar = prompt("¿Esta seguro de eliminar sus datos?. Ingrese ver (para ver su usuario), eliminar (para continuar con el borrado) o cancelar (para salir)");
    if (confirmar.toLowerCase() === "ver"){
        console.log("El registro con DNI " + dni + " y los siguientes datos serán eliminados:", registro);
    }else if (confirmar.toLowerCase() === "eliminar"){
        arrayRegistros.splice (indice,1);
        console.log("El registro con DNI " + dni + " ha sido eliminado.");
    }else if (confirmar.toLowerCase() === "cancelar"){
     alert ("Gracias por utilizar nuestros servicios, vuelva pronto");
    }else{
        alert ("Los datos ingresados son incorrectos, intente nuevamente");
    }
 }



// fucnion para salir del programa 


function salir (){
    alert("Gracias por utilizar nuestro servicio, vuelva pronto");

}
 //aca va la parte del menu que aparece en la pagina para que la persona ingrese sus datos

function menu (){
    alert ("Hola, bienvenidx al Hotel QueMirá");
    let opcion = prompt("Ingrese alguna de las siguientes opciones: \n a) Registrarse \n b)¿Tengo descuento? \n c) Monto total a abonar \n d)Eliminar registro \n e) Salir");
    return opcion; 
}

 //ejecuto el programa

let opcion = menu ();
    switch(opcion){
      case "a": 
        nuevoRegistro();
        break;
      case "b":
        descuento();
        break;
      case "c":
        valorTotal();
        break;
      case "d":
        bajaRegistro();
        break;
      case "e":
        salir();
        break;
      default:
        alert ("Opcion ingresada incorrecta, intente nuevamente") 
        break;
    }
