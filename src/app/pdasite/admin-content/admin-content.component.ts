import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {
  current: number = 1;
  options = ['Graphs', 'Admins', 'Contents', 'Visits', "Links"];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeView(view: number) {
    this.current = view + 1;
  }
}
