export class Proyecto {
    id: number;
    nombreP: string;
    fechaP: Date;
    descripcionP: string;
    imgP: string;
  
  
  
 

    constructor(nombreP: string, fechaP: Date, descripcionP: string, imgP: string){
        this.nombreP = nombreP;
        this.fechaP = fechaP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
    }
}
