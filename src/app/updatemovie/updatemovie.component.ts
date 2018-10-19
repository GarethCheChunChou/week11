import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-updatemovie",
  templateUrl: "./updatemovie.component.html",
  styleUrls: ["./updatemovie.component.scss"],
})
export class UpdatemovieComponent implements OnInit {
  actorId: string = "";
  fullName: string = "";
  bYear: number = 0;

  movieId: string = "";
  movieTitle: string = "";
  movieYear: number = 0;

  private actorsDB: any[] = [];
  private moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}
  //Get all Actors
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

  // Update an Actor
  onAddMovieToActor() {
    let obj = { id: this.movieId };
    console.log(this.actorId);
    this.dbService.actorAddMovie(this.actorId, obj).subscribe(result => {
      this.onGetActors();
      this.router.navigate(['/dashboard']);
    });
  }

  onSelectMovie(item){
    this.movieTitle = item.title;
    this.movieYear = item.year;
    this.movieId = item._id;
  }

  onSelectActor(item){
    this.fullName = item.name;
    this.actorId = item._id;
  }

  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }
}
