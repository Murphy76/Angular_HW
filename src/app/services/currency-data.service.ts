import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {


  private currencyData: Array<string> = ['SHP', 'XCD']
  private selectedCurrency: String | null = null;

  constructor() { }

  
  getCurrencies():Array<string>{
    return this.currencyData;
  }

  setSelectedCurrency(currency:string){
    this.selectedCurrency = currency;
    console.log(currency)
  }



}
