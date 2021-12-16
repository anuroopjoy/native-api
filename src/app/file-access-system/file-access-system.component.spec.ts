import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAccessSystemComponent } from './file-access-system.component';

describe('FileAccessSystemComponent', () => {
  let component: FileAccessSystemComponent;
  let fixture: ComponentFixture<FileAccessSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAccessSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAccessSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
