import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: any;
  name: string;
  
  constructor(private storage: Storage) { }

  /* subimos las imagenes */
public uploadImage($event: any, name: string){
const file = $event.target.files[0]
const imgRef = ref(this.storage, `imagen/`+ name)
uploadBytes(imgRef, file)
.then(response => {this.getImages()})
.catch(error =>console.log(error))
}
/* traemos las imagenes */
getImages(){
const imagesRef = ref(this.storage, 'imagen')
list(imagesRef)
.then(async response =>{
  for(let item of response.items){
    this.url = await getDownloadURL(item);
    console.log("la url: " + this.url);
  }
})
.catch(error => console.log(error));
}
 
}
