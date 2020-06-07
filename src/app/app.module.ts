import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SideNavigationComponent } from './layouts/side-navigation/side-navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { GallariesComponent } from './pages/gallaries/gallaries.component';

import { Routes, RouterModule} from '@angular/router';
import { UsersComponent } from './pages/users/users.component';

import { HttpClientModule} from '@angular/common/http';
import { TableComponent } from './pages/table/table.component';
import { TableHeaderPipe } from './table-header.pipe';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full' 
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'about', component: AboutComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'gallaries', children: [
      {
        path: 'photos', component: GallariesComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'todos', component: GallariesComponent, canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationComponent,
    HomeComponent,
    AboutComponent,
    EnquiryComponent,
    GallariesComponent,
    UsersComponent,
    TableComponent,
    TableHeaderPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
