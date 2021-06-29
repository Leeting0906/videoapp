import { Component, OnInit } from '@angular/core';

import { IVideo } from '../ivideo';
import { VideodataService } from '../videodata.service';
@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {
  myvideos:IVideo[]=[];
  errormessage: any;
  username!:string;
  isLoggedIn=true;
  constructor(private _videodataservice:VideodataService)
  {
    this.username=_videodataservice.user.name;
  }
  ngOnInit(): void {
    //this.myvideos=this._videodataservice.getVideos();
    this._videodataservice.getVideos().subscribe(x=>this.myvideos=x,
      error=>this.errormessage=<any>error);      
  }
}
