import { TestBed } from '@angular/core/testing';

import { StoryTellerService } from './story-teller.service';

describe('StoryTellerService', () => {
  let service: StoryTellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryTellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
