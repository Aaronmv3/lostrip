import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ListaAlojamientosComponent } from './Pages/lista-alojamientos/lista-alojamientos.component';
import { ListaExperienciasComponent } from './Pages/lista-experiencias/lista-experiencias.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginGuard } from './guards/login.guard';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'alojamientos', component: ListaAlojamientosComponent},
    {path: 'experiencias', component: ListaExperienciasComponent},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    {path: 'registro', component: RegistroComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
