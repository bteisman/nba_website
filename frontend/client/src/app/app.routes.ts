import { PlayerDetailsComponent } from './player-details/player-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamListComponent } from './team-list/team-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamListComponent,
  },
  {
    path: 'teams/:id',
    component: TeamDetailsComponent,
  },
  {
    path: 'player/:id',
    component: PlayerDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/teams',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
