import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './../api.service';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ProductAddComponent } from './../product-add/product-add.component';
import { ProductEditComponent } from './../product-edit/product-edit.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        HttpClientTestingModule
      ],
      providers: [{ ApiService, provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [
        ProductsComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductAddComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
