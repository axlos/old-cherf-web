import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

    transactions: Array<any>;

    ngOnInit(): void {
        // Fake information
        this.transactions = [
            {
                no: 1,
                date: '2017-05-15',
                value: 147.42,
                cost: 5,
                type: 1,
                cash: 0.8,
                asset: 67,
                balance: 9877.94
            },
            {
                no: 2,
                date: '2017-05-23',
                value: 147.20,
                cost: 5,
                type: 2,
                cash: 9589.40,
                asset: 0,
                balance: 9589.40
            },
            {
                no: 3,
                date: '2017-05-16',
                value: 151.58,
                cost: 5,
                type: 1,
                cash: 0.23,
                asset: 63,
                balance: 9549.77
            },
            {
                no: 4,
                date: '2017-05-27',
                value: 152.82,
                cost: 5,
                type: 2,
                cash: 9622.66,
                asset: 9,
                balance: 9622.66
            }
        ];

    }

}
