import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  username: string;
  getUpdateProfile: any;


  constructor(private http:HttpClient) {
    console.log("Service is now ready");
    this.username = 'wadi-1000';
 
    }
updateProfile(username:string){
  this.username = username;
  return this.http.get(`https://api.github.com/users/${this.username}`)
  
}

}
