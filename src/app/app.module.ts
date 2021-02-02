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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/Estructura/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './components/Estructura/cabecera/cabecera/cabecera.component';
import { AlojamientoTarjetaComponent } from './components/alojamiento-tarjeta/alojamiento-tarjeta.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ListaAlojamientosComponent } from './components/paginas/lista-alojamientos/lista-alojamientos.component';
import { FormularioBusquedaComponent } from './components/formulario-busqueda/formulario-busqueda.component';



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
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlojamientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
