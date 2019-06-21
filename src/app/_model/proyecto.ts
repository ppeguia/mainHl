export class Proyecto {
    constructor(
        private _id:string,
        private nombre:string,
        private descripcion:string,
        private categoria:string,
        private lenguaje:string,
        private anio:number,
        private imagen:string 
    ){ }

    getId():string{
        return this._id;
    }
    setId(id:string){
        this._id=id;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre=nombre;
    }

    getDescripcion():string{
        return this.descripcion;
    }
    setDescripcion(descripcion:string){
        this.descripcion=descripcion;
    }

    getCategoria():string{
        return this.categoria;
    }
    setCategoria(categoria:string){
        this.categoria=categoria;
    }

    getLenguaje():string{
        return this.lenguaje;
    }
    setLenguaje(lenguaje:string){
        this.lenguaje=lenguaje;
    }

    getAnio():number{
        return this.anio;
    }
    setAnio(anio:number){
        this.anio=anio;
    }

    getImagen():string{
        return this.imagen;
    }
    setImagen(imagen:string){
        this.imagen=imagen;
    }

}

