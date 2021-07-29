import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
profile: any;
username:any;

  constructor(private userService: UserService,private searchService: SearchService) {
    this.userService.getProfileInfo().subscribe((profile: any)=>{
      console.log(profile);
      this.profile = profile;
      this.searchService.getUpdateProfile().subscribe((username: any) =>{
        console.log(username);
        this.username = username;
      })
    });
   
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  findProfile(){
    this.searchService.updateProfile(this.username);
    this.userService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
 
  }

  submitName(){
    this.searchService.updateProfile(this.username)
    this.userService.getProfileInfo().subscribe((data)=>{
      this.profile = data
    })

  ngOnInit() ;
  }

}


function ngOnInit() {
  throw new Error('Function not implemented.');
}
