import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import GenericSerivce from "./generic.service";

// import { Crisis, CrisisService } from './generic.service';

@Injectable()
export class GenericDetailResolve implements Resolve {
  constructor(private cs: GenericSerivce, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise|boolean {
    let id = +route.params['id'];
    console.log(+route.params);
    // let url = +route.params['crisis'];
    let url = "";
    return this.cs.getElement(id, url).then(crisis => {
      if (crisis) {
        return crisis;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return false;
      }
    });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
