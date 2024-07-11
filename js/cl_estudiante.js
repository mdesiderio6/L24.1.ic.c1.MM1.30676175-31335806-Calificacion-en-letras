function califiacionletra(nota_f){
    switch(nota_f){
    case nota_f >=90 && nota_f <=100:
        return "A";
        break;      
    case nota_f >=80 && nota_f <=89:
        return "B";
        break;
    case nota_f >=70 && nota_f <=79:
        return "C";
        break;
    case nota_f >=60 && nota_f <=69:
        return "D";
        break;
    case nota_f <60:
        return "F";
        break;
}
}

export default class cl_estudiante{
    constructor(nombre, nota_f){
        this.nombre = nombre; 
        this.nota_f = nota_f;

    }   
    
    set nombre(n){
        this._nombre = n;
    }

    get nombre(){
        return this._nombre;
    }

    set nota_f(n_f){
        this._nota_f = n_f;
    }

    get nota_f(){
        return this._nota_f;
    }

    Calificacion_Letras(){ 
        return califiacionletra(this.nota_f);
    }

}