import { Component, inject } from '@angular/core';
import { CurrencyDataService } from '../../services/currency-data.service';

@Component({
  selector: 'app-dropdown-list',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-list.component.html',
  styleUrl: './dropdown-list.component.scss'
})
export class DropdownListComponent {

  service: CurrencyDataService = inject(CurrencyDataService); 
  currencyData: Array<string> = this.service.getCurrencies()



  onSelected(value:string): void {
		this.service.setSelectedCurrency(value);
	}
}
