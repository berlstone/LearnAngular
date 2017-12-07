import { TestBed, inject } from '@angular/core/testing';

import { GithubJobsService } from './github-jobs.service';

describe('GithubJobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubJobsService]
    });
  });

  it('should be created', inject([GithubJobsService], (service: GithubJobsService) => {
    expect(service).toBeTruthy();
  }));
});
