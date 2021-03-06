import {Component} from "@angular/core";
import {InputIncomeComponent} from "./input-income/input-income.component";
import {ResultsOutputComponent} from "./results-output/results-output.component";
import {
  TranslateService,
  TranslatePipe
} from "ng2-translate";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [InputIncomeComponent, ResultsOutputComponent],
  pipes: [TranslatePipe]
})
export class AppComponent {
  constructor(private _translate: TranslateService) {
    //this._translate.setDefaultLang('en');
    this._translate.use('en');
  }

  public changeLang(lang){
    this._translate.use(lang);
  }
}
