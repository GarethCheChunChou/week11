import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
@Component({
  selector: "app-listactors",
  templateUrl: "./listactors.component.html",
  styleUrls: ["./listactors.component.scss"],
})
export class ListactorsComponent implements OnInit {

  public actorsDB: any[] = [];

  constructor(private dbService: DatabaseService) {}

  ngOnInit() {
    this.dbService.getActors().subscribe((data: any[]) => {
      console.log(data);
      this.actorsDB = data;
    });
  }
}
