import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one paragraph', ()=>{
    let paragraphs = fixture.debugElement.queryAll(By.css("p"));
    expect(paragraphs.length).toBeGreaterThanOrEqual(1);
  });

  it('should have exactly 1 paragraph that contains the text "home works!"', ()=>{
    let paragraphs = fixture.debugElement.queryAll(By.css("p"));
    expect(paragraphs.length).toEqual(1);
    expect(paragraphs[0].nativeElement.innerText).toBe("home works!")
  });

  it('should increase num by 1 when "testBtn" is clicked', ()=>{
    
    expect(component.num).toBe(0);

    let testBtn = fixture.debugElement.query(By.css("#testBtn")).nativeElement;
    testBtn.click();

    fixture.whenStable().then(()=>{
      expect(component.num).toBe(1);
    });

  })
});
