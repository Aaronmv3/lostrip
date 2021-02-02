import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaAlojamientosComponent } from './components/paginas/lista-alojamientos/lista-alojamientos.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'alojamientos', component: ListaAlojamientosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
