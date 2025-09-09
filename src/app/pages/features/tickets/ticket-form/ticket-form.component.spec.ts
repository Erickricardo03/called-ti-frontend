import { TicketFormComponent } from '../ticket-form/ticket-form.component';

describe('TicketFormComponent', () => {
  let component: TicketFormComponent;
  let fixture: ComponentFixture<TicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // FormsModule ou ReactiveFormsModule
      declarations: [TicketFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
