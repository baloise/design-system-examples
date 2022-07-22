import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  BalInputModule,
  BalTextModule,
} from '@baloise/design-system-next-components-angular';
import { EventComponent } from './event.component';

describe('EventComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventComponent],
      imports: [BalInputModule, BalTextModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as input 'gugus'`, async () => {
    const fixture = TestBed.createComponent(EventComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const inputElement = compiled.querySelector('bal-input');
    if (inputElement) {
      inputElement.value = 'Gugus';
      inputElement.dispatchEvent(
        new CustomEvent('balInput', { detail: 'Gugus' })
      );
    }
    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.querySelector('bal-text')?.textContent).toContain(
      'My name is Gugus'
    );
  });
});
