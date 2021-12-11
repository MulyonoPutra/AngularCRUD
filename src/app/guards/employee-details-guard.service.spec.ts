/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeDetailsGuardService } from './employee-details-guard.service';

describe('Service: EmployeeDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDetailsGuardService]
    });
  });

  it('should ...', inject([EmployeeDetailsGuardService], (service: EmployeeDetailsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
