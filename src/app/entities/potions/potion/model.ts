export enum POTIONTYPE {
   VIDA,
   MANA,
   ENERGIA
}

export class Potion {
   id: number;
   nombre:string;
   descripcion: string;
   urlImagen: string;
   tipo: POTIONTYPE;

   constructor(id:number, nombre:string, descripcion:string, urlImagen: string,
       tipo: POTIONTYPE) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.urlImagen = urlImagen;
      this.tipo = tipo;
   }
}
