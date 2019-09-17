import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';

import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order.model';
import { Router, UrlTree } from '@angular/router';
import { CanComponentDeactivate } from '../../../core/interfaces/can-component-deactivate.interface';
import { Observable } from 'rxjs';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, CanComponentDeactivate {

  private currentOrder: OrderModel;

  private validationMessagesMap = {
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
      email: 'Please enter a valid email address.',
      emailInvalid: 'This email already exists. Please enter other email address.'
    }
  };
  orderForm: FormGroup;
  validationMessage: string;
  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private dialogService: DialogService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.currentOrder = this.ordersService.getCurrentOrder();
    this.buildForm();
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(): void {
    if (this.phones.length > 1) {
      this.phones.removeAt(this.phones.length - 1);
    }
  }

  onBlur() {
    const emailControl = this.orderForm.get('email');
    this.setValidationMessage(emailControl, 'email');
  }

  onCheckOutOrderClicked(): void {
    this.ordersService.startProcessing(this.currentOrder);
    const link = ['/orders'];
    this.router.navigate(link);
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (!this.ordersService.getCurrentOrder()) {
      return true;
    }
    return this.dialogService.confirm('If you leave you cart will be lost. Proceed?');
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: this.fb.control('', { validators: [Validators.required, Validators.minLength(3), this.nameValidator], updateOn: 'blur' }),
      lastName: this.fb.control(''),
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]
      ],
      phones: this.fb.array([this.buildPhone()]),
      needDelivery: true,
      address: this.fb.control(''),
    });
  }

  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: ''
    });
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }

  private nameValidator(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value !== undefined && c.value === 'qwe'
    ) {
      return {
        wrongName: true
      };
    }
    return null;
  }
}
