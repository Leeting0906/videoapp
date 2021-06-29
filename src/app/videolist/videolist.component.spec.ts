import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule,HttpClient,HttpHandler } from '@angular/common/http';
import { VideolistComponent } from './videolist.component';
import { VideodataService } from '../videodata.service';

describe('VideolistComponent', () => {
  let component: VideolistComponent;
  let fixture: ComponentFixture<VideolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideolistComponent ],
      providers:[HttpClientModule,HttpClient,HttpHandler,VideodataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use data from the service', ()=>{
    let vlcomp=fixture.debugElement.componentInstance;
    let dataservice=fixture.debugElement.injector.get(VideodataService);
    expect(dataservice.user.name).toEqual(vlcomp.username);
  });

  it('should display username ',() => {
  let vlcomp=fixture.debugElement.componentInstance;
  fixture.detectChanges();
  vlcomp.isLoggedIn=false;
  let compiled=fixture.debugElement.nativeElement;
  expect(compiled.querySelector('p').textContent).toContain(vlcomp.username);
  });

});
