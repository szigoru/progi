import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
import {ApiService} from '../api.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  alert:boolean=false

  editRun = new FormGroup({
    distance: new FormControl (''),
    time: new FormControl (''),
    idopont: new FormControl (''),
    komment: new FormControl ('')
  })

  constructor(private router: ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.api.getcurrentRun(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRun = new FormGroup({
        distance: new FormControl (result['distance']),
        time: new FormControl (result['time']),
        idopont: new FormControl (result['idopont']),
        komment: new FormControl (result['komment'])
      })
    })
  }

  collection(){
    console.log(this.editRun.value)
    this.api.updateRun(this.router.snapshot.params.id, this.editRun.value).subscribe((result)=>console.log(result))
    this.alert=true;
  }
  closealert(){
    this.alert=false;
  }
}
