import { Component,OnInit } from '@angular/core';
import { Recipe } from "../../../shared/models/recipe";
import { HttpDataService } from '../../../shared/services/user/fastfood.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{

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
