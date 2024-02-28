import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSelectComponent } from './news-select.component';

describe('NewsSelectComponent', () => {
  let component: NewsSelectComponent;
  let fixture: ComponentFixture<NewsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
