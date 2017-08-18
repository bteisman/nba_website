import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-list',
  template: `
    <div *ngFor="let person of players">
      <a [routerLink]="['/player', person.id]">
        {{person.name}}
      </a>
    </div>
  `,
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.playerService.getAll(id).subscribe(p => this.players = p);
    });
  }

}
