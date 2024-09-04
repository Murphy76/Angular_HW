import { Component, inject } from '@angular/core';
import { CurrencyDataService } from '../../services/currency-data.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dropdown-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-list.component.html',
  styleUrl: './dropdown-list.component.scss'
})
export class DropdownListComponent {

  private service: CurrencyDataService
  public currencyData: Array<string>

  constructor() {
    this.service = inject(CurrencyDataService)
    this.currencyData = this.service.getCurrencies()
  }


  onChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const selectedValue = inputElement.value;
    this.service.setSelectedCurrency(selectedValue);
    
  }
}
