import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCountries(){
 return [
    {'id':1 , 'city':'Angular' , 'detail':'Presented by google' },
    {'id':2 , 'city':'Bootstrap', 'detail':'Very famous css framework'},
    {'id':3 , 'city':'Vue', 'detail':'Light weight js framework'},
    {'id':4 , 'city':'React', 'detail': 'Framework by facebook'},
    {'id':5 , 'city':'AntDesign', 'detail':'Design for the developer'},
    {'id':6 , 'city':'Ionic', 'detail':'Make apps for the multi platform application'}

  ]
}

}
