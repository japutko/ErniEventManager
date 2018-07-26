import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { userServiceSpy, routerSpy } from '../../utils-test/index.spec';
import { of } from 'rxjs';
import { userSchemaMock1 } from '../../interfaces/user.interface';
import { UserCardComponent } from '../user-card/user-card.component';
import { LoaderComponent } from '../loader/loader.component';
import { Router } from '@angular/router';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let getUserSpy: any;

  beforeEach(async(() => {
    getUserSpy = userServiceSpy.queryPaginated.and.returnValue( of(userSchemaMock1) );
    TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
        UserCardComponent,
        LoaderComponent
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        {provide: Router, useValue: routerSpy},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
