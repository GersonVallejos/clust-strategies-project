import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// old components
//import {LoginComponent} from './vistas/login/login.component'

//components
import { InicioComponent } from './components/inicio/inicio.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { GestionDeDatosComponent } from './components/gestion-de-datos/gestion-de-datos.component';
import { HerramientaDeAnalisisComponent } from './components/herramienta-de-analisis/herramienta-de-analisis.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddDatasetComponent } from './components/add-dataset/add-dataset.component';
import { EditDatasetComponent } from './components/edit-dataset/edit-dataset.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { EditClientInfoComponent } from './components/edit-client-info/edit-client-info.component';
import { AddClientInfoComponent } from './components/add-client-info/add-client-info.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { PagesComponent } from './components/pages/pages.component';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil/edit-perfil.component'
import { ShowResultsComponent } from './components/show_results/show-results/show-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },

  {
    path: 'Dashboard', component: PagesComponent,
    children: [
      { path: 'Inicio', component: InicioComponent },
      { path: 'Perfil', component: MiPerfilComponent },
      { path: 'GestionDeDatos', component: GestionDeDatosComponent },
      { path: 'Analisis', component: HerramientaDeAnalisisComponent },
      { path: 'Ayuda', component: AyudaComponent },

      { path: 'AddDataset', component: AddDatasetComponent },
      { path: 'EditDataset/:id', component: EditDatasetComponent },
      { path: 'ClientInfo/:id', component: ClientInfoComponent },
      { path: 'EditClientInfo/:id', component: EditClientInfoComponent },
      { path: 'AddClientInfo/:id', component: AddClientInfoComponent },
      { path: 'ShowData/:id', component: ShowDataComponent },
      { path: 'EditPerfil/:id', component: EditPerfilComponent },
      { path: 'show_results/:id/:cluster', component: ShowResultsComponent }
    ],
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
