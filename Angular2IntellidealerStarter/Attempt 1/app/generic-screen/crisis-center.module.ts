import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CrisisService }        from './generic.service';
import { CrisisDetailResolve }  from './generic-detail-resolve.service';

import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisListComponent }       from './generic-list.component';
import { CrisisCenterHomeComponent } from './generic-home.component';
import { CrisisDetailComponent }     from './generic-detail.component';

import { crisisCenterRouting } from './crisis-center.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    crisisCenterRouting
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],

  providers: [
    CrisisService,
    CrisisDetailResolve
  ]
})
export class CrisisCenterModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
