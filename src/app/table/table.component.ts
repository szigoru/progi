import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  title = 'my-app';

  data: {};
  alk: number;
  constructor(private api: ApiService) {

  }
  collection = [];
  ngOnInit(): void {
    this.api.getAPI().subscribe(data => {
      console.log(data);
      this.item = data
      this.data = data
      this.leghosszabb()
      this.osszes()
    })
  }
  deleteRun(element) {

    if (confirm("Biztosan törlöd ezt a futást?")) {
      this.collection = this.collection.filter(e => e.id !== element)
      this.collection.splice(element - 1, 1)
      this.api.deleteAPI(element).subscribe((result) => {
        alert("sikeres törlés");
        console.log(result)
      })
    } else {
      
    }


  }

  ossz: number = 0;
  legh: number = 0;
  item = {}

  osszes() {
    this.api.getAPI().subscribe(data => {
      for (let element in data) {
        this.ossz += parseInt(data[element].distance)
      }

    })
  }



  leghosszabb() {
    this.api.getAPI().subscribe(data => {
      this.alk = (Object.keys(data).length);
      this.legh += parseInt(data[0].distance);
      for (let element in data) {
        if (parseInt(data[element].distance) > this.legh) {
          this.legh = parseInt(data[element].distance)
        }
      }
    })

  }




}
