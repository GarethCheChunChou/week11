import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private actorsDB: any[] = [];
  private moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onGetMovies() {
    console.log("From on GetActors");
    return this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  populateMovies(items: any[]){
    let movie = '';
    for(let item of items) {
      movie += item.title + " " + "\n";
    }
    return movie;
  }

  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }

}
