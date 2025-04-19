import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUnveristyComponent } from './get-unveristy.component';

describe('GetUnveristyComponent', () => {
  let component: GetUnveristyComponent;
  let fixture: ComponentFixture<GetUnveristyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUnveristyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUnveristyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
