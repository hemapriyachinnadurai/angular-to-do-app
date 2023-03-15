import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTask: any;
  arrayList = [];

  addTask(value) {
    console.log(value);
    this.arrayList.push(value);
    this.newTask = '';
  }

  deleteItem(i) {
    this.arrayList.splice(i, 1);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
