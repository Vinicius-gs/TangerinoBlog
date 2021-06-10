import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPostagemComponent } from './modificar-postagem.component';

describe('ModificarPostagemComponent', () => {
  let component: ModificarPostagemComponent;
  let fixture: ComponentFixture<ModificarPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPostagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
