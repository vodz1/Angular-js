var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(acc_no, balance) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    Account.prototype.debit_amount = function (amount) {
        if (amount <= 0) {
            console.log("Invalid debit amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        console.log("Debited amount: ".concat(amount, ". New balance: ").concat(this.balance));
    };
    Account.prototype.credit_amount = function (amount) {
        if (amount <= 0) {
            console.log("Invalid credit amount");
            return;
        }
        this.balance += amount;
        console.log("Credited amount: ".concat(amount, ". New balance: ").concat(this.balance));
    };
    Account.prototype.get_balance = function () {
        return this.balance;
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(acc_no, balance, minimum_balance, date_of_opening) {
        var _this = _super.call(this, acc_no, balance) || this;
        _this.minimum_balance = minimum_balance;
        _this.date_of_opening = date_of_opening;
        return _this;
    }
    SavingAccount.prototype.add_customer = function (customer) {
        console.log("Added customer ".concat(customer, " to Saving Account"));
    };
    SavingAccount.prototype.remove_customer = function (customer) {
        console.log("Removed customer ".concat(customer, " from Saving Account"));
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(acc_no, balance, interest_rate, date_of_opening) {
        var _this = _super.call(this, acc_no, balance) || this;
        _this.interest_rate = interest_rate;
        _this.date_of_opening = date_of_opening;
        return _this;
    }
    CurrentAccount.prototype.add_customer = function (customer) {
        console.log("Added customer ".concat(customer, " to Current Account"));
    };
    CurrentAccount.prototype.remove_customer = function (customer) {
        console.log("Removed customer ".concat(customer, " from Current Account"));
    };
    return CurrentAccount;
}(Account));
var savingAccount = new SavingAccount("SA001", 5000, 1000, new Date());
savingAccount.credit_amount(2000);
console.log("Current balance:", savingAccount.get_balance());
var currentAccount = new CurrentAccount("CA001", 10000, 0.05, new Date());
currentAccount.debit_amount(500);
console.log("Current balance:", currentAccount.get_balance());
