import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase num by one when #myButton is clicked', ()=>{
    let myButton = fixture.debugElement.query(By.css("#myButton"));
    expect(myButton).toBeTruthy();
    expect(component.num).toBe(0);

    myButton.nativeElement.click();

    fixture.whenStable().then(()=>{
      expect(component.num).toBe(1);
    })
  });


});
