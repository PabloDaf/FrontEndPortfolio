import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditacercadeComponent } from './editacercade.component';

describe('EditacercadeComponent', () => {
  let component: EditacercadeComponent;
  let fixture: ComponentFixture<EditacercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditacercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditacercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
