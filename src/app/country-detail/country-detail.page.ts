import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage implements OnInit {

  public countries =[];
  constructor(private _countriesService:CountriesService) { }

  ngOnInit() {
    this.countries = this._countriesService.getCountries();
  }

}
