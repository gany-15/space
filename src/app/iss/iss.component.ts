import { Component, OnInit } from "@angular/core";
import { AllApiService } from "../all-api.service";

@Component({
  selector: "app-iss",
  templateUrl: "./iss.component.html",
  styleUrls: ["./iss.component.scss"],
})
export class IssComponent implements OnInit {
  public isLoading: boolean = true;
  public latitude: number;
  public longitude: number;
  public timestamp: Date;

  constructor(private _allApiService: AllApiService) {}

  ngOnInit() {
    this._allApiService.getIssPosition().subscribe((data) => {
      this.latitude = data.iss_position.latitude;
      this.longitude = data.iss_position.longitude;
      this.timestamp = new Date(data.timestamp * 1000);
      this.isLoading = false;
    });
  }

  updateIssPosition() {
    this.isLoading = true;
    this.ngOnInit();
  }
}
