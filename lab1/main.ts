interface IAccount {
    date_of_opening: Date;
    add_customer(customer: string)
    remove_customer(customer: string) 
}

class Account {
    protected acc_no: string;
    protected balance: number;

    constructor(acc_no: string, balance: number) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    debit_amount(amount: number){
        if (amount <= 0) {
            console.log("Invalid debit amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        console.log(`Debited amount: ${amount}. New balance: ${this.balance}`);
    }

    credit_amount(amount: number) {
        if (amount <= 0) {
            console.log("Invalid credit amount");
            return;
        }
        this.balance += amount;
        console.log(`Credited amount: ${amount}. New balance: ${this.balance}`);
    }

    get_balance(): number {
        return this.balance;
    }
}

class SavingAccount extends Account implements IAccount {
    private minimum_balance: number;
    date_of_opening: Date;

    constructor(acc_no: string, balance: number, minimum_balance: number, date_of_opening: Date) {
        super(acc_no, balance);
        this.minimum_balance = minimum_balance;
        this.date_of_opening = date_of_opening;
    }

    add_customer(customer: string) {
        console.log(`Added customer ${customer} to Saving Account`);
    }

    remove_customer(customer: string) {
        console.log(`Removed customer ${customer} from Saving Account`);
    }
}

class CurrentAccount extends Account implements IAccount {
    private interest_rate: number;
    date_of_opening: Date;

    constructor(acc_no: string, balance: number, interest_rate: number, date_of_opening: Date) {
        super(acc_no, balance);
        this.interest_rate = interest_rate;
        this.date_of_opening = date_of_opening;
    }

    add_customer(customer: string) {
        console.log(`Added customer ${customer} to Current Account`);
    }

    remove_customer(customer: string) {
        console.log(`Removed customer ${customer} from Current Account`);
    }
}

const savingAccount = new SavingAccount("SA001", 5000, 1000, new Date());
savingAccount.credit_amount(2000);
console.log("Current balance:", savingAccount.get_balance());

const currentAccount = new CurrentAccount("CA001", 10000, 0.05, new Date());
currentAccount.debit_amount(500);
console.log("Current balance:", currentAccount.get_balance());
