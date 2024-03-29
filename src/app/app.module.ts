import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutinProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ErrorpagComponent } from './components/errorpag/errorpag.component';
import { FootComponent } from './components/foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProyectoComponent,
    ErrorpagComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
    //,AppRoutingModule
  ],
  providers: [
    appRoutinProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
