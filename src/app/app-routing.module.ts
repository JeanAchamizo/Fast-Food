import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FastfoodtableComponent} from "./components/fastfoodtable/fastfoodtable.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";


const routes: Routes = [

  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LogInComponent},
  {path: 'home',  component: HomeComponent},
  {path: 'table', component: FastfoodtableComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
