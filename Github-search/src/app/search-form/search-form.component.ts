import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username: string;
  constructor() { }

  findProfile(){
    this.userService.updateProfile(this.username);
  }
  ngOnInit(): void {
  }

}
