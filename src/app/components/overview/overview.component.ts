import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SigerDetails } from './../../model/signer-transaction-overview.model';
import { SigningTransactionService } from './../../service/signing-transaction.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  displayedColumns = ['position', 'name', 'email', 'phone', 'file', 'verify'];
  dataSource = new MatTableDataSource<SigerDetails>();
  private signerDetails: SigerDetails[] = [];

  constructor(private readonly signingTransactionService: SigningTransactionService) { }

  ngOnInit(): void {
    this.signingTransactionService.getAllSigningRequests().subscribe(
      data => this.signerDetails = data,
      (error) => console.log('error', error),
      () => this.dataSource.data = this.signerDetails
    );

  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadDocument(id: string, fileName: string): void {
    this.signingTransactionService.getSignedDocument(id, fileName).subscribe((file) => window.open(URL.createObjectURL(file)));
  }
}
