import { TestBed } from '@angular/core/testing';
import { WaitTimesService } from './wait-times.service';
import { HttpClientModule } from '@angular/common/http';

describe('WaitTimesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }),
  );

  it('should be created', () => {
    const service: WaitTimesService = TestBed.get(WaitTimesService);
    expect(service).toBeTruthy();
  });
});
