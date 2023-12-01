import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const heading = fixture.debugElement.query(
      By.css('[data-spec-h1]')
    ).nativeElement;

    expect(heading.innerText).toBe('Hello World!');
  });

  it('should render show', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const showElement = fixture.debugElement.query(
      By.css('[data-spec-show]')
    ).nativeElement;

    expect(showElement.innerText).toContain('Show');
  });

  it("shouldn't render show", () => {
    const fixture = TestBed.createComponent(AppComponent);

    const instance = fixture.componentInstance;
    instance.show = false;

    fixture.detectChanges();

    expect(fixture.nativeElement).not.toContain('Show');
  });
});
