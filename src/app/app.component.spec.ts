import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { add } from './test';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // 测试AppComponent是否存在
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // 测试组件内某属性的值
  it(`should have as title 'hello world!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hello world!');
  }));

  // 测试组件内某元素的innerText为指定值
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const app = fixture.debugElement.componentInstance;
    expect(compiled.querySelector('h1').textContent).toContain(app.title);
  }));

  // 测试组件内方法
  it(`input 1 and 2 return 3`, (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.plus(1, 2)).toEqual(3);
  }));

  // 测试公共方法
  it(`input 1 and 2 return 3`, (() => {
    expect(add(1, 2)).toEqual(3);
  }));
});
