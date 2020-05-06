import { Component, OnInit } from '@angular/core';
import { Ishod } from '../models/ishod';


// TODO: Delete me after setup backend
const elementData: Ishod[] = [
  { id: 0, opis: "Opis prve nedelje", nedelja: 1 },
  { id: 1, opis: "Opis druge nedelje", nedelja: 2 },
  { id: 2, opis: "Opis trece nedelje", nedelja: 3 },
  { id: 3, opis: "Opis cetvrte nedelje", nedelja: 4 },
]

@Component({
  selector: 'app-silabus',
  templateUrl: './silabus.component.html',
  styleUrls: ['./silabus.component.css']
})
export class SilabusComponent implements OnInit {

  // To demonstrate table
  displayedColumns: string[] = ['id', 'opis', 'nedelja'];
  dataSource = elementData;

  constructor() { }

  ngOnInit(): void {
  }

}
