// Exercise: Class Getters and Setters in TypeScript

// Question 1:
// Create a class `BankAccount` with a private property `balance` of type `number`.
// Add a getter `getBalance` and a setter `setBalance` to access and modify the `balance` property.
// Ensure that the balance cannot be set to a negative value.
class BankAccount{
    constructor(private _balance:number){
        this._balance=_balance;
    }
    get getBalance(){
        return this._balance;
    }
    set setBalance(val){
        if(val>=0) this._balance=val;
        else throw new Error("no -ve");
    }
}

const account = new BankAccount(1000);
console.log(account.getBalance); // Output: 1000
account.setBalance = 1500;
console.log(account.getBalance); // Output: 1500
try {
  account.setBalance = 500; // This will throw an error
} catch (error) {
  console.error(error); // Output: Balance cannot be negative
}
