
const usuarioAutorizado = "leonardo";
const contraseniaAutorizada = "coder";

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");
alert(contr)

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Bienvenido " + usuario);

    let cuantidadAlumnos = parseInt(prompt("Ingrese la cantidad de notas a promediar"));

    for(let i = 0; i < cuantidadAlumnos; i++) {
        let nota1 = parseInt(prompt("Ingrese la primer nota"));
        let nota2 = parseInt(prompt("Ingrese la segunda nota"));
        let nota3 = parseInt(prompt("Ingrese la tercer nota"));
        let promedio = calcularPromedio(nota1, nota2, nota3);
        alert("El promedio de " + nombreAlumno + " es " + promedio.toFixed(2));
    }
}


function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

function apruebaAnio(promedio) {
    if(promedio >= 6) {
        return true;
    } else {
        return false;
    }
}