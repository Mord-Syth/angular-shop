import { AuthenticationService } from "./authentication.service";

describe('Authentication service', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    service = new AuthenticationService();
  });

  it('login() should set a user', (done: DoneFn) => {
    const userName = 'User';
    service.login(userName).subscribe(() => {
      expect(service.getUserName()).toBe(userName);
      done();
    });
  });
});
