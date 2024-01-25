import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardWithImageComponent } from './components/card-with-image/card-wtith-image.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CardWithImageComponent, RouterTestingModule],
    }).compileComponents();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });
});
