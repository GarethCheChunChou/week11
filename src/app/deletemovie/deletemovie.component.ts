import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.scss']
})
export class DeletemovieComponent implements OnInit {

  moviesDB: any [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  onGetMovies() {
    console.log("From on GetActors");
    return this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onDeleteMovie(item) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMovies();
    });
  }

  ngOnInit() {
    this.onGetMovies();
  }

}
