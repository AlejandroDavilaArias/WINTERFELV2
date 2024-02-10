import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSeccionComponent } from './inicio-seccion.component';

describe('InicioSeccionComponent', () => {
  let component: InicioSeccionComponent;
  let fixture: ComponentFixture<InicioSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioSeccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
