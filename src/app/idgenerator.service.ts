import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdgeneratorService {
  randomstring:string = "";
  chars:string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  string_length:number = 8;
  randomString() {
   for (var i=0; i<this.string_length; i++) {
     var rnum = Math.floor(Math.random() * this.chars.length);
     this.randomstring += this.chars.substring(rnum,rnum+1);
   }
   return this.randomstring;
   }
}
