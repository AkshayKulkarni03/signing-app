import { SigningTransactionService } from './../../service/signing-transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private readonly signingTransactionService: SigningTransactionService) { }

  ngOnInit(): void {
  }

}
