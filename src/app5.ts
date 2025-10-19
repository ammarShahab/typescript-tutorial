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
    console.log(`Your paypal payment is ${this.amount}tk.`); //if u avoid any of the properties of interface, it will throw an error
  }
}

const payWithCreditCard = new creditCardPayment(2252);
payWithCreditCard.paymentProcess();

const payWithPayPal = new payPalPayment(2500);
payWithPayPal.paymentProcess();

// Exercise: Vehicle Management system

interface Transport {
  name: string;
  model: string;
  move: () => void;
}

class Vehicle implements Transport {
  protected year: number = 2025;
  private engineNumber: number = 523554;
  constructor(public name: string, public model: string) {}
  move(): void {
    console.log(`${this.name} truck, Model ${this.model} is moving.`);
  }
}

class Truck extends Vehicle {
  charge() {
    console.log(
      `Truck ${this.name} - ${this.model} - ${this.year} is charging.`
    );
    /* console.log(
      `Truck ${this.name} - ${this.model} - ${this.year} - ${this.engineNumber}is charging.`
    ); */ //but if you try to access the private property engineNumber, it will throw an error
  }
}

const truck1 = new Truck("Tesla", "CyberTruck");
truck1.move();
truck1.charge();
