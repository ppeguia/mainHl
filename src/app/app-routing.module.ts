/*import { NgModule } from '@angular/core';*/
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ErrorpagComponent } from './components/errorpag/errorpag.component';


const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'proyects', component: ProyectoComponent},
	{path: 'proyecto/:id', component: DetallesComponent},
	{path: '**', component: ErrorpagComponent},
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/

export const appRoutinProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

//export class AppRoutingModule { }
