import { MovielistComponent } from './movielist/movielist.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mycomponent', component: MycomponentComponent },
  { path: 'employees', component: EmplistComponent },
  { path: 'addmovie', component: AddmovieComponent },
  { path: 'movielist', component: MovielistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
