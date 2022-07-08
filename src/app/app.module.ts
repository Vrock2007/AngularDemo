import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { AddmovieComponent } from './addmovie/addmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    EmplistComponent,
    HomeComponent,
    AddmovieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
