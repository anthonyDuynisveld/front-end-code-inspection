import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

import { CrisisDetailResolve }   from './crisis-detail-resolve.service';
import {GenericDetailResolve} from "../generic-screen/generic-detail-resolve.service";

const crisisCenterRoutes: Routes = [
  {
    path: '',
    redirectTo: '/crisis',
    pathMatch: 'full'
  },
  {
    path: 'crisis',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: GenericDetailResolve
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

export const crisisCenterRouting: ModuleWithProviders = RouterModule.forChild(crisisCenterRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
