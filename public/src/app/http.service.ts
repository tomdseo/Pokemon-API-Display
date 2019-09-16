import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }

  getPokemon() {
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    tempObservable.subscribe(data => {
      console.log("Got our pokemon", data.name);
      this.getFunFact(data);
    });
  }

  getFunFact(d) {
    console.log(`${d.name}'s types are ${d.types[0].type.name} and ${d.types[1].type.name}`);
    this.countAbility1()
  }

  countAbility1() {
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/ability/65');
    console.log("List of All Pokemon that Share Ability 1 (Chlorophyll):");
    tempObservable.subscribe(data => {
      for(let i = 1; i < data.pokemon.length; i++) {
        console.log(data.pokemon[i].pokemon.name);
      }
      this.countAbility2();
    });
  }

  countAbility2() {
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/ability/34');
    console.log("List of All Pokemon that Share Ability 2 (Overgrow):");
    tempObservable.subscribe(data => {
      for(let i = 1; i < data.pokemon.length; i++) {
        console.log(data.pokemon[i].pokemon.name);
      }
    });
  }
}
