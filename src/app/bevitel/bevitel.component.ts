import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {ApiService} from '../api.service'

@Component({
  selector: 'app-bevitel',
  templateUrl: './bevitel.component.html',
  styleUrls: ['./bevitel.component.css']
})
export class BevitelComponent implements OnInit {

  alert:boolean=false

  addRun = new FormGroup({
    distance: new FormControl (''),
    time: new FormControl (''),
    idopont: new FormControl (''),
    komment: new FormControl ('')
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  collectRun(){
    this.api.sendAPI(this.addRun.value).subscribe((result)=>{
      console.log("itt az eredmény", result)
      this.alert=true;
      this.addRun.reset({});
    })
  }
  closealert(){
    this.alert=false;
  }
}
