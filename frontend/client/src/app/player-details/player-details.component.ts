import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-details',
  template: `
    <section *ngIf="player">
      <h2>You selected:  {{player.name}}</h2>
      <h3>Description</h3>
      <p>Team: {{player.team}}</p>
      <p>Age: {{player.age}}</p>
      <p>Minutes: {{player.minutes}}</p>
      <p>Points: {{player.points}}</p>
      <p>Assists: {{player.assists}}</p>
      <p>Rebounds: {{player.rebounds}}</p>
      <p>Blocks: {{player.blocks}}</p>
      <p>Turnovers: {{player.turnovers}}</p>
      <p>Steals: {{player.steals}}</p>
      <p>Ft: {{player.ft}}</p>
      <p>Fg: {{player.fg}}</p>
      <p>Three pt: {{player.threept}}</p>
      <p>Gp: {{player.gp}}</p>
      <p>Gs: {{player.gs}}</p>
      <p>Fouls: {{player.fouls}}</p>
      <p>dreb: {{player.dreb}}</p>
      <p>oreb: {{player.oreb}}</p>
      <p>three pt rank: {{player.threeptrank}}</p>
      <p>rebs rank: {{player.rebrank}}</p>
      <p>pts rank: {{player.ptsrank}}</p>
      <p>eff rank: {{player.effrank}}</p>
      <p>stl rank: {{player.stlrank}}</p>
      <p>oreb rank: {{player.orebrank}}</p>
      <p>dreb rank: {{player.drebrank}}</p>
      <p>three pct rank: {{player.threepctrank}}</p>
      <p>ast rank: {{player.astrank}}</p>
      <p>blk rank: {{player.blkrank}}</p>
      <p>tov rank: {{player.tovrank}}</p>
      <p>ft rank: {{player.ftrank}}</p>
      <p>fg rank: {{player.fgrank}}</p>
      <p>salary: {{player.salary}}</p>
    </section>
    <button (click)="gotoTeam()">Back to team</button>
  `,
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player: Player;
  sub: any;
  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.playerService
        .get(id)
        .subscribe(p => this.player = p);
    });
  }

  gotoTeam() {
    window.history.back();
  }
}
