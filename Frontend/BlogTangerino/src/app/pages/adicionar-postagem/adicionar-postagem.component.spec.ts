import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPostagemComponent } from './adicionar-postagem.component';

describe('AdicionarPostagemComponent', () => {
  let component: AdicionarPostagemComponent;
  let fixture: ComponentFixture<AdicionarPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarPostagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
