export default class Cl_IEstudiante {
    readname() {
        return prompt("Ingresa tu nombre");
    }
    readnotafinal() {
        return prompt("Ingresa tu nota final");
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