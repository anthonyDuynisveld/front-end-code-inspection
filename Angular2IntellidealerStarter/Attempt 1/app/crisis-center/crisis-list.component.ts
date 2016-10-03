import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';
import GenericSerivce from "../generic-screen/generic.service";

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit {
  crises: Crisis[];
  public selectedId: number;

  constructor(
    private service: GenericSerivce,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this.service.getElements('crisis')
        .then(crises => this.crises = crises);
    });
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    // Navigate with relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
