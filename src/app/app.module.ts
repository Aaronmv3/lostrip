import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
import { AlojamientosService } from './servicios/alojamientos.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Estructura/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { CabeceraComponent } from './components/Estructura/cabecera/cabecera/cabecera.component';
import { FooterComponent } from './components/Estructura/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FormularioBusquedaComponent } from './components/formulario-busqueda/formulario-busqueda.component';
import { AlojamientoTarjetaComponent } from './components/alojamiento-tarjeta/alojamiento-tarjeta.component';
import { ListaAlojamientosComponent } from './Pages/lista-alojamientos/lista-alojamientos.component';
import { ListaExperienciasComponent } from './Pages/lista-experiencias/lista-experiencias.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';

//Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';



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
    ListaExperienciasComponent,
    LoginComponent,
    RegistroComponent,
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
    MatSelectModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [
    AlojamientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
