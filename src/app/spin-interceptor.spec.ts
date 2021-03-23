import { CustomHttpInterceptor } from './http-interceptor';
import { SpinnerService } from '../app/services/spinner.service'

describe('CustomHttpInterceptor', () => {
  it('should create an instance', () => {
    expect(new CustomHttpInterceptor(new SpinnerService)).toBeTruthy();
  });
});
