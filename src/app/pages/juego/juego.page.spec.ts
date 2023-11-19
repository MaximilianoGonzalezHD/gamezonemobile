import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoPage } from './juego.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { ReplaySubject } from 'rxjs';

describe('JuegoPage', () => {
  let component: JuegoPage;
  let fixture: ComponentFixture<JuegoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [SQLite,
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(JuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class ActivatedRouteMock {
  private _paramMap = new ReplaySubject<ParamMap>();
  private _queryParamMap = new ReplaySubject<ParamMap>();

  readonly paramMap = this._paramMap.asObservable();
  readonly queryParamMap = this._queryParamMap.asObservable();

  constructor(initialValues?: { [key: string]: any }) {
    if (initialValues) {
      this.setParamMap(initialValues);
      this.setQueryParamMap(initialValues);
    }
  }

  setParamMap(values: { [key: string]: any }) {
    const paramMap = convertToParamMap(values);
    this._paramMap.next(paramMap);
  }

  setQueryParamMap(values: { [key: string]: any }) {
    const queryParamMap = convertToParamMap(values);
    this._queryParamMap.next(queryParamMap);
  }
}