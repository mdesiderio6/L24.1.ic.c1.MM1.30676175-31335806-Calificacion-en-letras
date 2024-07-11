export default class CL_IEstudiante {
    readname() {
        prompt("Ingresa tu nombre");
    }
    readnotafinal() {
        prompt("Ingresa tu nota final");
    }
    showestudiante(n,nf,cl){
        return`
        <br> 
        El nombre del estudiante es: ${n}
        <br>
        La nota final es: ${nf}
        <br>
        La calificación en letras es: ${cl}
        `
    } 
}