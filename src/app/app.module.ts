import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGard} from './services/auth-gard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGard], component: AppareilViewComponent},
  {path: 'auth', component: AuthComponent },
  {path: 'edit', canActivate: [AuthGard], component: EditAppareilComponent},
  {path: 'users', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'appareils/:id', canActivate: [AuthGard], component: SingleAppareilComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent },
  {path: '**', redirectTo: '/not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
