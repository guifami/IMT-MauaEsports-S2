// Modules
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// Shared Components
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GameTitleComponent } from './shared/game-title/game-title.component';
// Components
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { GamebarComponent } from './components/gamebar/gamebar.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { BarChartHorizontalComponent } from './components/charts/bar-chart-horizontal/bar-chart-horizontal.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { GridGraficosComponent } from './components/grid-graficos/grid-graficos.component';
import { AboutComponent } from './pages/about/about.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
// Games Components
import { LeagueOfLegendsComponent } from './pages/Jogos/league-of-legends/league-of-legends.component';
import { TeamfightTacticsComponent } from './pages/Jogos/teamfight-tactics/teamfight-tactics.component';
import { ClashRoyaleComponent } from './pages/Jogos/clash-royale/clash-royale.component';
import { RocketLeagueComponent } from './pages/Jogos/rocket-league/rocket-league.component';
import { OverwatchComponent } from './pages/Jogos/overwatch/overwatch.component';
import { RainbowSixComponent } from './pages/Jogos/rainbow-six/rainbow-six.component';
import { ValorantComponent } from './pages/Jogos/valorant/valorant.component';
import { CounterStrikeComponent } from './pages/Jogos/counter-strike/counter-strike.component';
import { EracingComponent } from './pages/Jogos/eracing/eracing.component';
import { FifaComponent } from './pages/Jogos/fifa/fifa.component';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { JogosComponent } from './pages/Jogos/Jogos.component';

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
    MainComponent,
    JogosComponent,
    LeagueOfLegendsComponent,
    TeamfightTacticsComponent,
    ClashRoyaleComponent,
    RocketLeagueComponent,
    OverwatchComponent,
    RainbowSixComponent,
    ValorantComponent,
    CounterStrikeComponent,
    EracingComponent,
    FifaComponent,
    GridGraficosComponent,
    GameTitleComponent,
    BarChartComponent,
    BarChartHorizontalComponent,
    DoughnutChartComponent,
    LineChartComponent,
    AboutComponent,
    SubscriptionComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor(){
    library.add(fas, far, fab);
  }
}
