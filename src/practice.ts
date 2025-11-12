// in operator type guard
type Car = {
  drive: () => void;
};

type Boat = {
  sail: () => void;
};

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

const tesla: Car = {
  drive: () => console.log("tesla is driving"),
};

const boat1: Boat = {
  sail: () => console.log("boat is sailing fast"),
};

move(tesla);
move(boat1);

interface Animal {
  name: string;
}

interface Bear extends Animal {
  eat: string;
}

interface Dog extends Animal {
  eat: string;
}

const bear: Bear = {
  name: "Wild Bear",
  eat: "honey",
};

console.log(bear.name, bear.eat);

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "center");

class BankAccount {
  constructor(
    public name: string,
    private accountType: string,
    protected balance: number
  ) {}

  getAccountHolderName() {
    console.log(`${this.name}`);
  }

  getAccountType() {
    console.log(`${this.name}' account type is ${this.accountType}`);
  }

  /* protected getAccountBalance() {
    console.log(`${this.name}'s balance is ${this.balance}`);
  } */
}

const rajib = new BankAccount("Rajib", "Elite", 20000);
rajib.getAccountType();
/* rajib.accountType;
rajib.balance; */

class SavingAccount extends BankAccount {
  getAccountBalance() {
    console.log(`${this.name}'s balance is ${this.balance}`);
  }
}

const adnan = new SavingAccount("Adnan", "Savings", 10000);
console.log(adnan.name);
console.log(adnan.getAccountType());
adnan.getAccountBalance();
