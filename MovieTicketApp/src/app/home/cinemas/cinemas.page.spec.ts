import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CinemasPage } from './cinemas.page';

describe('CinemasPage', () => {
  let component: CinemasPage;
  let fixture: ComponentFixture<CinemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CinemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
