import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repos: any;


  constructor(private repoService: RepoService) {
  this.repoService.getProfileRepos().subscribe((repos: any) =>{
    console.log(repos);
    this.repos = repos;
  })
}
  ngOnInit(): void {
  }

}
