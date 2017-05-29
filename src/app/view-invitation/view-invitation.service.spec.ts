import { TestBed, inject } from '@angular/core/testing';

import { ViewInvitationService } from './view-invitation.service';

describe('ViewInvitationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewInvitationService]
    });
  });

  it('should ...', inject([ViewInvitationService], (service: ViewInvitationService) => {
    expect(service).toBeTruthy();
  }));
});
