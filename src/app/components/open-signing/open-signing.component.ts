import { Transaction } from './../../model/signer-transaction-overview.model';
import { SigningTransactionService } from './../../service/signing-transaction.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-signing',
  templateUrl: './open-signing.component.html',
  styleUrls: ['./open-signing.component.scss']
})
export class OpenSigningComponent implements OnInit {

  public signingForm: FormGroup;
  public content: any;

  constructor(
    private readonly signingTransactionService: SigningTransactionService) {

  }

  ngOnInit(): void {
    this.signingForm = new FormGroup({
      id: new FormControl('', [Validators.required])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.signingForm.controls[controlName].hasError(errorName);
  }

  public onSubmit(): void {
    let transaction = new Transaction();

    this.signingTransactionService.startSigningTransaction(this.signingForm.value.id).subscribe();

    this.signingTransactionService.getTransaction(this.signingForm.value.id).subscribe(
      data => transaction = data,
      (error) => console.log(error),
      () => {
        this.signingForm.reset();
        console.log(transaction);
        window.open(transaction.Signers[0].SignUrl, '_self');
      }
    );
  }

}
