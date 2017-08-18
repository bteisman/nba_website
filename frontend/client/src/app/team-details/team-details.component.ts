import { Team } from '../team';
import { TeamService } from '../team.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  template: `
    <section *ngIf="team">
      <h2>You selected:  {{team.name}}</h2>
      <h3>Description</h3>
      <p>Conference: {{team.conference}}</p>
      <p>Division: {{team.division}}</p>
      <p>Wins: {{team.wins}}</p>
      <p>Losses: {{team.losses}}</p>
      <p>Conference Rank: {{team.confrank}}</p>
      <p>Points: {{team.pts}}</p>
      <p>Assists: {{team.asts}}</p>
      <p>Rebounds: {{team.reb}}</p>
      <p>Opponent Points: {{team.opppts}}</p>
      <p>Points Rank: {{team.ptsrank}}</p>
      <p>Assists Rank: {{team.astsrank}}</p>
      <p>Rebounds Rank: {{team.rebrank}}</p>
      <p>Opponent Points Rank: {{team.oppptsrank}}</p>
    </section>
    <app-player-list></app-player-list>
    <button (click)="gotoTeamsList()">Back to teams list</button>
  `,
  styles: []
})
export class TeamDetailsComponent implements OnInit {
  team: Team;
  sub: any;
  constructor(private teamService: TeamService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.teamService
        .get(id)
        .subscribe(p => this.team = p);
    });
  }

  gotoTeamsList() {
    let link = ['/teams'];
    this.router.navigate(link);
  }
}
