import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [AuthService, { provide: Router, useValue: routerSpy }],
    });

    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully login with correct credentials', async () => {
    const success = await service.login('test@example.com', '123456');
    expect(success).toBeTruthy();
    expect(service.isAuthenticated()).toBeTruthy();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should fail login with incorrect credentials', async () => {
    const success = await service.login('wrong@email.com', 'wrongpass');
    expect(success).toBeFalsy();
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should logout successfully', () => {
    service.login('test@example.com', '123456');
    service.logout();
    expect(service.isAuthenticated()).toBeFalsy();
    expect(service.getCurrentUser()).toBeNull();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should persist authentication state', () => {
    service.login('test@example.com', '123456');
    const token = localStorage.getItem('token');
    expect(token).toBeTruthy();
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
