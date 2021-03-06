import {Component, OnInit} from "@angular/core";
import {CalculateService} from "../shared/calculate.service";
import {TranslatePipe} from "ng2-translate";

@Component({
  selector: 'app-results-output',
  templateUrl: 'results-output.component.html',
  styleUrls: ['results-output.component.css'],
  providers: [CalculateService],
  host:{'background-color':'red'},
  pipes: [TranslatePipe]
})
export class ResultsOutputComponent implements OnInit {
  private _calculateService: CalculateService;
  public results: any;


  constructor(_calculateService: CalculateService) {
    this._calculateService = _calculateService;
  }

  ngOnInit() {
    this._calculateService.calculateResult.subscribe(results=> {
      console.log(results)
      this.results = results;
    })
  }


}
