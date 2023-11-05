import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipe_detailComponent } from './recipe_detail.component';

describe('recipeComponent', () => {
    let component: Recipe_detailComponent;
    let fixture: ComponentFixture<Recipe_detailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Recipe_detailComponent]
        });
        fixture = TestBed.createComponent(Recipe_detailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
