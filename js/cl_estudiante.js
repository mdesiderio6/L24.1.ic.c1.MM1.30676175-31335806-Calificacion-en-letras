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
        switch(this.nota_f){
            case this.nota_f >=90 && this.nota_f <=100:
                return "A";
            case this.nota_f >=80 && this.nota_f <=89:
                return "B";
            case this.nota_f >=70 && this.nota_f <=79:
                return "C";
            case this.nota_f >=60 && this.nota_f <=69:
                return "D";
            case this.nota_f <60:
                return "F";
        }
    }

}