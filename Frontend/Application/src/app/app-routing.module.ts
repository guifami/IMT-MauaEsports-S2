// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Main Components
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { JogosComponent } from './pages/Jogos/Jogos.component';
// Children Components
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
import { AboutComponent } from './pages/about/about.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'jogos',
    component: JogosComponent,
    children: [
      { path: 'league-of-legends', component: LeagueOfLegendsComponent },
      { path: 'teamfight-tactics', component: TeamfightTacticsComponent },
      { path: 'clash-royale', component: ClashRoyaleComponent },
      { path: 'rocket-league', component: RocketLeagueComponent },
      { path: 'overwatch', component: OverwatchComponent },
      { path: 'rainbow-six', component: RainbowSixComponent },
      { path: 'valorant', component: ValorantComponent },
      { path: 'counter-strike', component: CounterStrikeComponent },
      { path: 'eracing', component: EracingComponent },
      { path: 'fifa', component: FifaComponent },
    ],
  },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
