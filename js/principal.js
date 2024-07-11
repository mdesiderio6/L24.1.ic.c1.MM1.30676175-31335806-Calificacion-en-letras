import Cl_IEstudiante from "./Cl_IEstudiante.js";
import cl_estudiante from "./cl_estudiante.js";

var nombre, nota_f, salida;
let iEstudiante = new Cl_IEstudiante();

nombre = iEstudiante.readname();
nota_f = iEstudiante.readnotafinal();

let estudiante = new cl_estudiante(nombre, nota_f);

salida = document.getElementById("salida");     

salida.innerHTML = iEstudiante.showestudiante(nombre, 
    nota_f, 
    estudiante.Calificacion_Letras());
