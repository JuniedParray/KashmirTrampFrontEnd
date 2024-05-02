import { TestBed } from '@angular/core/testing';

import { AdminTourPackageServiceService } from './admin-tour-package.service';

describe('AdminTourPackageServiceService', () => {
  let service: AdminTourPackageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTourPackageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
