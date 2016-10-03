// import { Injectable }             from '@angular/core';
// import { Router, Resolve,
//          ActivatedRouteSnapshot } from '@angular/router';
//
// import { Crisis, CrisisService } from './crisis.service';
// import GenericSerivce from "../generic-screen/generic.service";
//
// @Injectable()
// export class CrisisDetailResolve implements Resolve<Crisis> {
//   constructor(private cs: GenericSerivce, private router: Router) {}
//
//   resolve(route: ActivatedRouteSnapshot): Promise<Crisis>|boolean {
//     let id = +route.params['id'];
//
//     return this.cs.getElement(id, 'crisis').then(crisis => {
//       if (crisis) {
//         return crisis;
//       } else { // id not found
//         this.router.navigate(['/crisis-center']);
//         return false;
//       }
//     });
//   }
// }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
