import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'searchform', component: SearchFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
