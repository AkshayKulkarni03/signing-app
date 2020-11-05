import { SigningTransactionService } from './../../service/signing-transaction.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignerRequest, SigningOverviewRequest } from './../../model/signing-overview';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public createSignRequestForm: FormGroup;
  public content: any;

  constructor(private readonly signingTransactionService: SigningTransactionService) { }

  ngOnInit(): void {
    this.createSignRequestForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{1,3}[-\s]?)?\d{10}$/)]),
      file: new FormControl('', [Validators.required])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.createSignRequestForm.controls[controlName].hasError(errorName);
  }

  public onSubmit() {
    const signerRequest = new SignerRequest();
    signerRequest.email = this.createSignRequestForm.value.email;
    signerRequest.mobile = this.createSignRequestForm.value.phone;
    const signerOverViewRequest = new SigningOverviewRequest();
    signerOverViewRequest.signers = [signerRequest];

    this.signingTransactionService.createTransaction(signerOverViewRequest).subscribe(data => console.log(data));
  }

}
