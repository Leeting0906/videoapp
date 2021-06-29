import { TestBed } from '@angular/core/testing';

import { VideoGuardService } from './video-guard.service';

describe('VideoGuardService', () => {
  let service: VideoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
