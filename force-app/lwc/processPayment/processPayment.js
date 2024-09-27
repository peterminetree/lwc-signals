import { LightningElement } from 'lwc';
import { $computed } from 'c/signals';
import { isCheckoutValid } from 'c/checkoutValidator';

export default class ProcessPayment extends LightningElement {
    isReadyToPay = $computed(() => this.isReadyToPay = isCheckoutValid.value)
    .value;

    get disabled() {
        return !this.isReadyToPay;
    }
}