import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
@Component({
  selector: "app-listmovies",
  templateUrl: "./listmovies.component.html",
  styleUrls: ["./listmovies.component.scss"],
})
export class ListmoviesComponent implements OnInit {

  public moviesDB: any[] = [];

  constructor(private dbService: DatabaseService) {}

  ngOnInit() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      console.log(data);
      this.moviesDB = data;
    });
  }
}
