import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-graph-selector',
  templateUrl: './main-graph-selector.component.html',
  styleUrls: ['./main-graph-selector.component.css']
})
export class MainGraphSelectorComponent implements OnInit {

  graphs: any[];

  constructor() {
    this.graphs = [
      {id: 0, title: 'SWOT', description: 'Shows the strength and some things more'},
      {id: 1, title: 'Lean Canvas', description: 'A pretty little chart'},
      {id: 2, title: 'Fishi Fish', description: 'When you have time to waste in graphing'},
      {id: 3, title: 'Laziness Graph', description: 'When you have time to waste in graphing'},
      {id: 4, title: 'Moar Mngmt Craziness', description: 'Management wants moar graphs!'}
    ];
  }

  ngOnInit(): void {
  }

  graphSelected(id: number): void {
    console.log(id);
  }
}
