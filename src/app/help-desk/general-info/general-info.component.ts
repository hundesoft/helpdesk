import { Component, OnInit } from '@angular/core';
import { GeneralInfo } from 'src/app/Model/generalInfo.model';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  generalInfo:GeneralInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  getUser(){
  }


}