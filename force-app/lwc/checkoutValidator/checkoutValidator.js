import { $signal, $computed } from 'c/signals';

const isShippingValid = $signal(false);
const isBillingValid = $signal(false);

const validityBucket = [isShippingValid, isBillingValid];

const isCheckoutValid = $computed(() => {
    return validityBucket.reduce((acc, curr) => acc && curr.value, true);
});

export { isShippingValid, isBillingValid, isCheckoutValid };