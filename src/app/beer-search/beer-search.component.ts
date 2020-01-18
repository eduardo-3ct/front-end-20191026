import { Component } from '@angular/core';

@Component({
    selector: 'beer-search',
    templateUrl: './beer-search.component.html'
})
export class BeerSearchComponent {
    filterBy: string;
}