import { Component, OnInit } from '@angular/core';
import { BPCon } from '../Models/Billperiod';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bcon',
  templateUrl: './bcon.component.html',
  styleUrls: ['./bcon.component.css']
})
export class BconComponent implements OnInit {

  bconBPS:BPCon= new BPCon();
  constructor() { 
    //this.bps = new BPCon;

  }

  ngOnInit(): void {
    //load from cache

  }


  getBCON(): void {
    //this.bps = LoadFile();
  }

}
