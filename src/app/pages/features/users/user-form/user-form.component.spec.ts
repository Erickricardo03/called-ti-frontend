import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserFormComponent,       // componente standalone
        ReactiveFormsModule,     // formulários reativos
        RouterTestingModule      // Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.userForm.valid).toBeFalse();
  });

  it('should have valid form when filled', () => {
    component.userForm.setValue({
      name: 'Erick Ricardo',
      email: 'erick@example.com',
      password: '123456'
    });
    expect(component.userForm.valid).toBeTrue();
  });
});
