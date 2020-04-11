import { Component, OnInit } from '@angular/core';
import { AllApiService } from '../all-api.service';
import { IAstronaut } from '../astronauts.model';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.scss']
})
export class AstronautsComponent implements OnInit {

  public astronauts;
  public total;

  constructor(private _allApiService: AllApiService) { }

  ngOnInit() {
    this._allApiService.getAstronauts().subscribe(
      data =>  {
        this.astronauts = data.people;
        this.total = data.number;
      });
  }

}
