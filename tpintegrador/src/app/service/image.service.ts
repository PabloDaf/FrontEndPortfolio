import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
url: string ='';
  constructor(private storage: Storage) { }
/* subimos las imagenes */
public uploadImage($event: any, name: string){
const file = $event.target.files[0]
const imgRef = ref(this.storage, 'imagen/'+ name)
uploadBytes(imgRef, file)
.then(Response => (this.getImages()))
.catch(error =>console.log(error))
}
/* traemos las imagenes */
getImages(){
const imagesRef = ref(this.storage, 'imagen')
list(imagesRef)
.then(async Response =>{
  for(let item of Response.items){
    this.url = await getDownloadURL(item);
    console.log("la url: " + this.url);
  }
})
.catch(error => console.log(error));
}
}
