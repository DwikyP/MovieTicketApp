import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CinemaDetailPage } from './cinema-detail.page';

describe('CinemaDetailPage', () => {
  let component: CinemaDetailPage;
  let fixture: ComponentFixture<CinemaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CinemaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
