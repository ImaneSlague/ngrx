import { Component, OnInit } from '@angular/core';
import{ FormGroup , FormBuilder , Validators} from '@angular/forms'
@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
 
  public form = this.fb.group({
    owener:['',Validators.required]
   
  })
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

}
