import { Team } from './team';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

  constructor(private http: Http) {}

  getAll(): Observable<Team[]> {
    let t = this.http
      .get(`/api/teams`, { headers: this.getHeaders() })
      .map(mapTeams);
      return t;
  }

  getEastAll(): Observable<Team[]> {
    let t = this.http
      .get(`/api/eastTeams`, { headers: this.getHeaders() })
      .map(mapTeams);
      return t;
  }

  getWestAll(): Observable<Team[]> {
    let t = this.http
      .get(`/api/westTeams`, { headers: this.getHeaders() })
      .map(mapTeams);
      return t;
  }

  get(id: number): Observable<Team> {
    let t = this.http
      .get(`api/team/${id}`, {headers: this.getHeaders()})
      .map(mapTeam);
      return t;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapTeams(response: Response): Team[] {
   return response.json().map(toTeam);
}

function mapTeam(response: Response): Team {
   return toTeam(response.json());
}

function toTeam(r: any): Team {
  let t = <Team>({
    id: r.id,
    name: r.team,
    conference: r.conference,
    division: r.division,
    wins: r.wins,
    losses: r.losses,
    confrank: r.confrank,
    pts: r.pts,
    asts: r.asts,
    reb: r.reb,
    opppts: r.opppts,
    ptsrank: r.ptsrank,
    astsrank: r.astsrank,
    rebrank: r.rebrank,
    oppptsrank: r.oppptsrank,
    color: r.color,
    secondcolor: r.secondcolor,
  });
  return t;
}
