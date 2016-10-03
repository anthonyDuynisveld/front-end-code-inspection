import GenericService from '../generic-screen/generic.service'

export class Crisis  {
  constructor(public id: number, public name: string) { }
}

import { Injectable } from '@angular/core';

@Injectable()
export class CrisisService {

  static nextCrisisId = 100;

  getElements() { return crisesPromise; }

  getElement(id: number | string) {
    return crisesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }


  addElement(name: string) {
    name = name.trim();
    if (name) {
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisesPromise.then(crises => crises.push(crisis));
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
