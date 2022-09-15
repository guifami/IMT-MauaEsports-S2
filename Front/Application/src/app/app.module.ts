import { RegisterComponent } from './components/Guilherme/register/register.component';
import { HomeComponent } from './components/Guilherme/home/home.component';
// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/Guilherme/nav/nav.component';
import { TitleComponent } from './components/Guilherme/title/title.component';
import { GamebarComponent } from './components/Guilherme/gamebar/gamebar.component';
import { FooterComponent } from './components/Guilherme/footer/footer.component';
import { LoginComponent } from './components/Guilherme/login/login.component';
import { CarouselComponent } from './components/Guilherme/carousel/carousel.component';
import { MainComponent } from './components/Guilherme/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TitleComponent,
    GamebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CarouselComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor(){
    library.add(fas, far, fab);
  }
}
