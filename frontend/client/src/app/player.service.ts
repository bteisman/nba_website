import { Player } from './player';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {

  constructor(private http: Http) {}

  getAll(id: number): Observable<Player[]> {
    let t = this.http
      .get(`/api/players/${id}`, { headers: this.getHeaders() })
      .map(mapPlayers);
      return t;
  }

  get(id: number): Observable<Player> {
    let t = this.http
      .get(`api/player/${id}`, {headers: this.getHeaders()})
      .map(mapPlayer);
      return t;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapPlayers(response: Response): Player[] {
   return response.json().map(toPlayer);
}

function mapPlayer(response: Response): Player {
   return toPlayer(response.json());
}

function toPlayer(r: any): Player {
  let t = <Player>({
    id: r.id,
    name: r.name,
    team: r.team,
    age: r.age,
    minutes: r.minutes,
    points: r.points,
    assists: r.assists,
    rebounds: r.rebounds,
    blocks: r.blocks,
    turnovers: r.turnovers,
    steals: r.steals,
    ft: r.ft,
    fg: r.fg,
    threept: r.threept,
    gp: r.gp,
    gs: r.gs,
    fouls: r.fouls,
    dreb: r.dreb,
    oreb: r.oreb,
    threeptrank: r.threeptrank,
    rebrank: r.rebrank,
    ptsrank: r.ptsrank,
    effrank: r.effrank,
    stlrank: r.stlrank,
    orebrank: r.orebrank,
    drebrank: r.drebrank,
    threepctrank: r.threepctrank,
    astrank: r.astrank,
    blkrank: r.blkrank,
    tovrank: r.tovrank,
    ftrank: r.ftrank,
    fgrank: r.fgrank,
    salary: r.salary,
  });
  return t;
}
