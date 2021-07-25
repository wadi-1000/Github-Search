import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
profile: any;


  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe((profile: any)=>{
      console.log(profile);
      this.profile = profile;
    });
   
   }
  
  ngOnInit(): void {
  }

}
