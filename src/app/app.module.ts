import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const appRoutes : Routes  = [
  { path: '', component: WeatherComponent},
  { path: 'about', component: AboutComponent},
  { path: 'description', component: DescriptionComponent },
  { path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DescriptionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
