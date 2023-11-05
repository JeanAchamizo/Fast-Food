import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe';
import {MatTableDataSource} from "@angular/material/table";
import {HttpDataService} from "src/app/shared/services/user/fastfood.service";
import {MatSort} from "@angular/material/sort";
import { NgForm } from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import * as _ from 'lodash';
@Component({
  selector: 'app-fastfoodtable',
  templateUrl: './fastfoodtable.component.html',
  styleUrls: ['./fastfoodtable.component.css']
})
export class FastfoodtableComponent {

  @ViewChild('fastFoodForm', {static: false})

  fastFoodForm!: NgForm;

  fastFoodData!: Recipe;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'duration', 'type', 'stars', 'actions']

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private httpDataService: HttpDataService) {
    this.fastFoodData = {} as Recipe;

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllMovies();
  }


  getAllMovies() {
    this.httpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: any) {
    this.fastFoodData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.fastFoodForm.resetForm();
  }

  deleteItem(id: string) {
    this.httpDataService.deleteItem(id).subscribe((reponse: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }


  addMovie() {
    this.fastFoodData.id = 0;
    this.httpDataService.createItem(this.fastFoodData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateMovie() {
    this.httpDataService.updateItem(this.fastFoodData.id, this.fastFoodData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });

  }


  onSubmit() {
    if (this.fastFoodForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateMovie();
      } else {
        console.log('about to create');
        this.addMovie();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }





}
