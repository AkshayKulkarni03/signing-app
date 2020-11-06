import { SigningOverview, Signer } from './../../model/signing-overview';
import { SigningTransactionService } from './../../service/signing-transaction.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  displayedColumns = ['position', 'name', 'email', 'phone', 'file'];
  dataSource = new MatTableDataSource<SigningOverview>();

  constructor(private readonly signingTransactionService: SigningTransactionService) { }

  ngOnInit(): void {
    const signingOverview = new SigningOverview();
    const signer = new Signer();
    signer.email = 'test@sda.com';
    signer.mobile = 1232212121;
    signingOverview.signers = [signer];
    signingOverview.files = [{ file: 'test' }];
    this.dataSource.data = [signingOverview];
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
