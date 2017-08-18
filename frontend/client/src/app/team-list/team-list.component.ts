import { Team } from '../team';
import { TeamService } from '../team.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'app-team-list',
  template: `
    <div class="container-fluid">
      <div class="col-sm-6">
        <div class="col-sm-6" *ngFor="let t of eastTeams">
          <div class="row" id="space">
            <div id="box" [style.backgroundColor]="t.color" [style.borderColor]="onBox === t.id ? color : t.secondcolor" (mouseover)='over(t)' (mouseout)="out(t)" (click)="gotoTeam(t.id)">
              {{t.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" *ngFor="let t of westTeams">
          <div class="row" id="space">
            <div id="box" [style.backgroundColor]="t.color" [style.borderColor]="onBox === t.id ? color : t.secondcolor" (mouseover)='over(t)' (mouseout)="out(t)" (click)="gotoTeam(t.id)">
              {{t.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  eastTeams: Team[] = [];
  westTeams: Team[] = [];
  onBox: number = -1;
  color: string = '#000000';
  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit() {
    this.teamService.getEastAll().subscribe(p => this.eastTeams = p);
    this.teamService.getWestAll().subscribe(p => this.westTeams = p);
  }

  gotoTeam(id: number) {
    let link = ['/teams', id];
    this.router.navigate(link);
  }

  over(team: any) {
    this.onBox = team.id;
  }

  out(team: any) {
    this.onBox = -1;
  }
}
