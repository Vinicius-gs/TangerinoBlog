import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarPostagemComponent } from './verificar-postagem.component';

describe('VerificarPostagemComponent', () => {
  let component: VerificarPostagemComponent;
  let fixture: ComponentFixture<VerificarPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarPostagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
