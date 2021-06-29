import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideodataService } from '../videodata.service';
import{Observable,of} from 'rxjs';
@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
  videoForm!: FormGroup;
  submitted = false;
unSaved:boolean=true;
  constructor(private _videodataservice:VideodataService, 
    private _builder:FormBuilder, private _router:Router){
      this.createForm();
    }
  ngOnInit(): void {     
  }
canDeactivare():Observable<boolean> | boolean {
  if (this.unSaved){
    const result=window.confirm('There are unsaved changes! Are you sure?');
    return of (result);
  }
  return true;
}
  createForm(){
      this.videoForm=this._builder.group({         
          Title:['',Validators.required],
          Length:['',Validators.required],
          Category:['',Validators.required],
          Format:['',Validators.required]
        });    
    }
    get videoFormControl() {
      return this.videoForm.controls;
    }
    addVideo(body: any) {
      this.submitted = true;
      if (this.videoForm.valid) {
        this._videodataservice.addVideo(body).subscribe(() => alert("video added!"));
        this._router.navigate(['/videos']);
      }
    }
  }
  