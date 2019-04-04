import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  categoryForm: FormGroup;

  @ViewChild(CategoryProductsComponent) child;

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      'categoryId': [null, Validators.required],
      'categoryName': [null, Validators.required],
      'description': [null, Validators.required]
    });

    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

  showCategoryProducts(category: Category) {
    this.child.products = category.products;
  }

  onSubmitCategory(formData: NgForm) {
    this.categoryService.addCategory(formData);
    this.getCategories();
  }

}
