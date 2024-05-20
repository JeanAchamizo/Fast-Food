import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
import {AboutUsComponent} from "./public/pages/about-us/about-us.component";
import {ServicesComponent} from "./public/pages/services/services.component";
import {ProjectsComponent} from "./public/pages/projects/projects.component";
import {FastfoodtableComponent} from "./public/components/fastfoodtable/fastfoodtable.component";


const routes: Routes = [

  {path: 'home',  component: HomeComponent},
  {path: 'add-receta',  component: FastfoodtableComponent},
  {path: 'aboutUs',  component: AboutUsComponent},
  {path: 'services',  component: ServicesComponent},
  {path: 'projects',  component: ProjectsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
