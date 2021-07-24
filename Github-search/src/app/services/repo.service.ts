import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  
  private repos:[];

  constructor(private http:HttpClient) {
   console.log("Service is now ready");
   this.repos = [];

  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/wadi-1000/repos")
   map((res: { json: () => any; }) => res.json());   }
}