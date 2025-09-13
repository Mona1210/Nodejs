import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from './electronics.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor(private elecServ:ElectronicsService) { }

  electronicslist : any[];
  filteredList: any[] = [];
  mainList: any[] = [];

  ngOnInit(): void {
    this.getElectronics();
  }

  getElectronics(){
    this.elecServ.getElectronics().subscribe(
      data => {
        this.electronicslist = data;
        this.mainList = data;
        console.log(this.electronicslist);
      },
      err => {
        console.log(err);
      }
    )
  }

  filterList(option) {
    this.filteredList = [];
    console.log(option);
    console.log(option.valueOf());
    let op: string;
    const length = this.electronicslist.length;
    console.log(length);
    if(option.toLowerCase() != 'none') {
      for(var i=0; i<length; i++) {
        console.log(this.electronicslist[i].type);
        if(this.electronicslist[i].type.toLowerCase() == option.toLowerCase()) {
          this.filteredList.push(this.electronicslist[i]);
        }
      }
      this.mainList = this.filteredList;
    } else {
      this.mainList = this.electronicslist;
    }
    console.log('filtered list - ', this.filteredList);
  }

}
