import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
import { AlojamientosService } from './servicios/alojamientos.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Estructura/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CabeceraComponent } from './components/Estructura/cabecera/cabecera/cabecera.component';
import { FooterComponent } from './components/Estructura/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FormularioBusquedaComponent } from './components/formulario-busqueda/formulario-busqueda.component';
import { AlojamientoTarjetaComponent } from './components/alojamiento-tarjeta/alojamiento-tarjeta.component';
import { ListaAlojamientosComponent } from './components/paginas/lista-alojamientos/lista-alojamientos.component';

//Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CabeceraComponent,
    AlojamientoTarjetaComponent,
    CarouselComponent,
    SortByPipe,
    ListaAlojamientosComponent,
    FormularioBusquedaComponent,
    FiltrosBusquedaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule
    
  ],
  providers: [
    AlojamientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
