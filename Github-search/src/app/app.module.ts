import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import{  UserService } from './services/user.service';
import { RepoService } from './services/repo.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RepoComponent } from './components/repo/repo.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreatedOnPipe } from './created-on.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    SearchFormComponent,
    NavbarComponent,
    NotFoundComponent,
    CreatedOnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [ UserService,RepoService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
