import { TestBed } from '@angular/core/testing';
import { HttpClientModule,HttpClient,HttpHandler } from '@angular/common/http';
import { VideodataService } from './videodata.service';

describe('VideodataService', () => {
  let service: VideodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClientModule,HttpClient,HttpHandler]
    });
    service = TestBed.inject(VideodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
