import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username: string = '';

  constructor(private searchService: SearchService) {
    this.searchService.getUpdateProfile().subscribe((username: any) =>{
      console.log(username);
      this.username = username;
    })
  }

  findProfile(){
    this.searchService.updateProfile(this.username);
  }
  ngOnInit(): void {
  }

}
