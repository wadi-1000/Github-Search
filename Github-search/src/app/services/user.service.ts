import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username:string;

  constructor(private http:HttpClient) {
   console.log("Service is now ready");
   this.username = 'wadi-1000';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username )
    map((res: { json: () => any; }) => res.json());   }
}
