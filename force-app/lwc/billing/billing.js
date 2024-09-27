import { LightningElement } from 'lwc';
import { isBillingValid } from 'c/checkoutValidator';

export default class Billing extends LightningElement {
    isValid = false;

    handleClick() {
        this.toggleValidity();
        isBillingValid.value = this.isValid;
    }

    toggleValidity() {
        this.isValid = !this.isValid;
    }

    get label() {
        return this.isValid ? 'Valid' : 'Invalid';
    }
}