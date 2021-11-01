//Librerias de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Componentes del Aplicativo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatPostComponent } from './creat-post/creat-post.component';

//Componentes de Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, CreatPostComponent],
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
