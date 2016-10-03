

import { Injectable } from '@angular/core';
import {Crisis} from "../crisis-center/crisis.service";


const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export default class GenericSerivce {

  static nextCrisisId = 100;

  getElements(url:string) {
    switch (url){
      case "crisis":
        return crisesPromise;
        break;
      case "hero":
        break;
      default:
    }
  }

  getElement(id: number | string, url: string){
    switch (url) {
      case "crisis":
        return crisesPromise
          .then(crises => crises.find(crisis => crisis.id === +id));
        break;
      case "hero":
        break;
      default:
    }
  }

  addElement(name: string, url: string){
    switch (url) {
      case "crisis":
        name = name.trim();
        if (name) {
          // let crisis = new Crisis(CrisisService.nextCrisisId++, name);
          // crisesPromise.then(crises => crises.push(crisis));
        }
        break;
      case "hero":
        break;
      default:
    }

  };
}
