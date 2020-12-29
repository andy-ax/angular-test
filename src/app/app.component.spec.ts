import { TestBed, async } from '@angular/core/testing';
import sinon from 'sinon/pkg/sinon-esm.js';
import { AppComponent } from './app.component';
import { add } from './test';

describe('AppComponent', () => {
  let fixture;
  let app;
  let compiled;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(()=> {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      compiled = fixture.debugElement.nativeElement;
    });
  }));

  // 测试AppComponent是否存在
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  // 测试组件内某属性的值
  it(`should have as title 'hello world!'`, async(() => {
    expect(app.title).toEqual('hello world!');
  }));

  // 测试组件内某元素的innerText为指定值
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain(app.title);
  }));

  // 测试组件内方法
  it(`input 1 and 2 return 3`, (() => {
    expect(app.plus(1, 2)).toEqual(3);
  }));

  // 测试公共方法
  it(`input 1 and 2 return 3`, (() => {
    expect(add(1, 2)).toEqual(3);
  }));

  it(`ngOnInit测试，需要判断其中的函数是否被调用`, () => {
    spyOn(app, 'plus');
    app.ngOnInit();
    expect(app.plus).toHaveBeenCalled();
  });
});
