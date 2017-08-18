import { PlayerService } from './player.service';
import { TeamService } from './team.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService, PlayerService]
})
export class AppComponent {
  title = 'NBA';
}
