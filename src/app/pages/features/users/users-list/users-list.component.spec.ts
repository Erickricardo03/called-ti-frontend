import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UsersListComponent } from './users-list.component';
import { of } from 'rxjs';
import { UserService } from '../../../core/services/user.service';

// Cria um mock do UserService
const userServiceMock = {
  list: () => of([])
};

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListComponent],
      providers: [
        { provide: 'UserService', useValue: userServiceMock } // fornece o mock
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
