import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage implements OnInit {

  public countryId ;
  public countries =[];
  constructor(private _countriesService:CountriesService , private route:ActivatedRoute) { }

  ngOnInit() {
    this.countries = this._countriesService.getCountries();
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.countryId = id -1;
  }


}
