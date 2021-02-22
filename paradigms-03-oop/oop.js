class Validator {
  // Globally unique values, identifiers:
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  // A static method so I can call it without instantiating this class: validate()
  // (value: userName & password, flag: validation I want to perform, validatorValue: to configure the validation)
  static validate(value, flag, validatorValue) { 
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  // Adding a constructor to define the values with which I create a user:
  constructor(uName, uPassword) {
    this.userName = uName;
    this.password = uPassword;
  }

  greet() {
    console.log('Hi, I am ' + this.userName);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.userNameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');

    this.form.addEventListener('submit', this.signupHandler.bind(this));
  }

  signupHandler(event) {
    event.preventDefault();
    const enteredUserName = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {  // if these are not true (!) I'll show the alert.
      alert(
        'Invalid input - username or password is wrong (password should be at least six characters).'
      );
      return;
    }

    // Here I need the 'new' keyword to construct a new instance of the User class:
    const newUser = new User(enteredUserName, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}

// I need to instantiate the UserImputForm class to bring all the logic to life:
new UserInputForm();