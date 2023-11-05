import {Component, OnInit} from '@angular/core';
import { Recipe } from "../../../shared/models/recipe";
import { HttpDataService } from "../../../shared/services/user/fastfood.service";

@Component({
    selector: 'app-recipe_detail',
    templateUrl: './recipe_detail.component.html',
    styleUrls: ['./recipe_detail.component.css']
})
export class Recipe_detailComponent implements OnInit{

    data: any = [];
    recipesList!: Recipe;
    constructor(private httpDataService: HttpDataService) {
    }
    ngOnInit() {
        this.getAllRecipes();
    }

    getAllRecipes() {
        this.httpDataService.getList().subscribe((response: any) => {
            this.data = response
        });
    }

}

