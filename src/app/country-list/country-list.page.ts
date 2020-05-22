import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.page.html',
  styleUrls: ['./country-list.page.scss'],
})
export class CountryListPage implements OnInit {

  constructor(private router:Router) { }

    // Pass the id

    onClick(country){
       this.router.navigate(['/country-detail',country.id]);
     

    }


  ngOnInit() {
  }

  countries =[
    {'id':1 , 'city':'Angular' , 'detail':'Presented by google' },
    {'id':2 , 'city':'Bootstrap', 'detail':'Very famous css framework'},
    {'id':3 , 'city':'Vue', 'detail':'Light weight js framework'},
    {'id':4 , 'city':'React', 'detail': 'Framework by facebook'},
    {'id':5 , 'city':'AntDesign', 'detail':'Design for the developer'},
    {'id':6 , 'city':'Ionic', 'detail':'Make apps for the multi platform application'}

  ]
  


}
