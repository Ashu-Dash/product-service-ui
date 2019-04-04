import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Product } from "../models/product";

const categoriesUrl = "http://localhost:8080/api/categories";

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
    providedIn: 'root'
})
export class CategoryService{

    constructor(private httpClient: HttpClient){}

    getCategories(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(categoriesUrl);
    }

    addCategory(category: NgForm) {
        this.httpClient.post<Product>(categoriesUrl, category, httpOptions);
    }

}