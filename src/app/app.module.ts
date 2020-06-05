import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SideNavigationComponent } from './layouts/side-navigation/side-navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { GallariesComponent } from './pages/gallaries/gallaries.component';

import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'enquiry', component: EnquiryComponent
  },
  {
    path: 'gallaries', children: [
      {
        path: 'photos', component: GallariesComponent
      },
      {
        path: 'todos', component: GallariesComponent
      }
    ]
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
    GallariesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
