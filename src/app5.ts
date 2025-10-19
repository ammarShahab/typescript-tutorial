// Implement keyword
// Implement keyword is used to implement an interface. i.e following a implemented structure

// Real World example with payment system
interface IPayment {
  amount: number;
  paymentProcess: () => void;
}

class creditCardPayment implements IPayment {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  paymentProcess() {
    console.log(`Your credit card payment is ${this.amount}tk.`);
  }
}

class payPalPayment implements IPayment {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  paymentProcess() {
    console.log(`Your paypal payment is ${this.amount}tk.`);
  }
}

const payWithCreditCard = new creditCardPayment(2252);
payWithCreditCard.paymentProcess();

const payWithPayPal = new payPalPayment(2500);
payWithPayPal.paymentProcess();
