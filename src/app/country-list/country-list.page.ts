import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.page.html',
  styleUrls: ['./country-list.page.scss'],
})
export class CountryListPage implements OnInit {

  public countries =[];
  constructor(private router:Router,private _countriesService:CountriesService) { }

    // Pass the id

    onClick(country){
       this.router.navigate(['/country-detail',country.id]);
     

    }


  ngOnInit() {
    this.countries = this._countriesService.getCountries();
  }



}
