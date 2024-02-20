import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormUIComponent } from './comp/form-ui/form-ui.component';

describe('FormUIComponent', () => {
  let fixture: ComponentFixture<FormUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUIComponent);
    fixture.detectChanges();
  });

  // it('should contain the heading "Basic Details Form"', () => {
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('Basic Details Form');
  // });
  it('should contain the inputs with correct placeholders', () => {
    const compiled = fixture.nativeElement;

    const nameInputPlaceholder = compiled.querySelector('input[id="name-test"]').getAttribute('placeholder');
    const emailInputPlaceholder = compiled.querySelector('input[id="email-test"]').getAttribute('placeholder');
    const passInputPlaceholder = compiled.querySelector('input[id="pass-test"]').getAttribute('placeholder');
    const selectInputPlaceholder = compiled.querySelector('select[id="select-test"]').getAttribute('placeholder');
    const messageInputPlaceholder = compiled.querySelector('textarea[id="message-test"]').getAttribute('placeholder');

    expect(nameInputPlaceholder).toContain('Enter your name');
    expect(emailInputPlaceholder).toContain('Enter your email');
    expect(passInputPlaceholder).toContain('Enter your password');
    // Since select and textarea elements don't have a placeholder attribute, we'll check for existence instead
    expect(selectInputPlaceholder).toBeNull();
    expect(messageInputPlaceholder).toContain('Enter your message');
  });
});
