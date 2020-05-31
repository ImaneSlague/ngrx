import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css']
})
export class ReponsesComponent implements OnInit {
  iscolled : boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }
  togglecolsave()
  {
    this.iscolled = !this.iscolled;
  }
}
