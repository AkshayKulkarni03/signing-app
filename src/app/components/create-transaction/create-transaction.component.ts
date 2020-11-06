import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SigerDetails, SignerRequest, Transaction, TransactionOverviewRequest } from '../../model/signer-transaction-overview.model';
import { SigningTransactionService } from './../../service/signing-transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public createSignRequestForm: FormGroup;
  public content: any;

  constructor(
    private readonly signingTransactionService: SigningTransactionService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.createSignRequestForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{1,3}[-\s]?)?\d{10}$/)]),
      file: new FormControl([null], [Validators.required])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.createSignRequestForm.controls[controlName].hasError(errorName);
  }

  public uploadFile(event: any): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.createSignRequestForm.patchValue({ file });
    this.createSignRequestForm.get('file').updateValueAndValidity();
  }

  public onSubmit(): void {
    const signerRequest = new SignerRequest();
    signerRequest.email = this.createSignRequestForm.value.email;
    signerRequest.mobile = this.createSignRequestForm.value.phone;
    const transactionOverViewRequest = new TransactionOverviewRequest();
    transactionOverViewRequest.signers = [signerRequest];

    const file = this.createSignRequestForm.value.file;
    let transaction: Transaction;


    this.signingTransactionService.createTransaction(transactionOverViewRequest).subscribe(
      data => { transaction = data; console.log(transaction); },
      (error) => console.log(error),
      () => {
        const signerDetails = new SigerDetails();
        signerDetails.firstName = this.createSignRequestForm.value.firstName;
        signerDetails.lastName = this.createSignRequestForm.value.lastName;
        signerDetails.transactionId = transaction.Id;

        signerDetails.fileName = file.name;

        signerDetails.signers = [signerRequest];

        this.signingTransactionService.sendFileForSigning(transaction.Id, file.name, file).subscribe();
        this.signingTransactionService.saveSignRequest(signerDetails).subscribe();

        this.openSnackBar(transaction.Id);

        this.createSignRequestForm.reset();
      }
    );
  }

  openSnackBar(id: string): void {
    this.snackBar.open(`Please Copy transaction Id - ${id}`, 'Close', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      announcementMessage: id
    });
  }


}
