import { LightningElement } from 'lwc';
import { isShippingValid } from 'c/checkoutValidator';

export default class Shipping extends LightningElement {
    isValid = false;

    handleClick() {
        this.toggleValidity();
        isShippingValid.value = this.isValid;
    }

    toggleValidity() {
        this.isValid = !this.isValid;
    }

    get label() {
        return this.isValid ? 'Valid' : 'Invalid';
    }
}