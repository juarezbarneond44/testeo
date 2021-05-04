import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }
  public Repeticion:any[]=[1,2,3,4,5]
  ngOnInit(): void {
  }

}
