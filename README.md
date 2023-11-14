# Login · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/login/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/login) 
<!-- ![Weekly Downloads](https://img.shields.io/npm/dw/@sswahn/login) -->

A versatile authentication library designed to streamline user authentication processes in your React applications. This library provides components for user registration, login, password reset, and more.

## Features
- Seamless user registration with robust validation.
- User login with optional "Remember Me" functionality.
- Forgot password functionality with email confirmation.
- Password reset using confirmation code.
- Error and Success message alerts
  
## Installation
Using npm.
```bash
npm install @sswahn/login
```  

## Usage
Import the components.
```javascript
import {
  Register,
  Login,
  ForgotPassword,
  ConfirmForgotPassword
} from '@sswahn/login'
```

### Register
Creates a user registration form.
```javascript
<Register
  className="custom-register"
  onSubmit={handleOnSubmit}
/>
```  

### Login
Creates a user login form, with links to registration, and forgot password forms.
```javascript
<Login
  className="custom-login"
  onSubmit={handleOnSubmit}
  forgotPassword={handleOpenForgotPassword},
  registerUser={handleOpenRegistration}
/>
```  

### Forgot Password
Forgot password form, for requesting a password reset.
```javascript
<ForgotPassword
  className="custom-forgot-password"
  onSubmit={handleOnSubmit}
/>
```  

### Confirm Forgot Password
Confirm forgot password form. Using a confirmation code users can reset their passwords.
```javascript
<ConfirmForgotPassword
  className="custom-confirm-forgot-password"
  onSubmit={handleOnSubmit}
/>
```

## Documentation

### `onSubmit` Callback Hook
Each component (`Register`, `Login`, `ForgotPassword`, `ConfirmForgotPassword`) accepts an onSubmit prop, which should be a asynchronous callback function. This function is triggered when the user submits the form, and it receives the form data as an argument. You can customize this function to handle the form submission, such as making API calls, additional validation, etc. `onSubmit` must be an async function and, when necessary, return one of the following objects:
```javascript
{ message: 'Your success message.' }
// or
{ error: 'Your error message.' }
```

### Styling Overrides with className
You can customize the appearance of each component by providing a className prop. This allows you to apply your own styles to the component. For example:
```javascript
const CustomRegister = () => {
  return <Register className="custom-register" onSubmit={handleRegister} />
}
```
In the above example, the "custom-register" class will be applied to the Register component, allowing you to override default styles.

### Additional Callbacks in Login
- `forgotPassword`: Callback triggered when the user clicks the "Forgot password?" link. Use this to handle opening the forgot password form.

- `registerUser`: Callback triggered when the user clicks the "Create an account" link. Use this to handle opening the registration form.

## Peer Dependencies
Login requires React as a peer dependency. You should have React installed in your project with a version compatible with this library.  

- [React](https://reactjs.org/): ^18.2.0  

## Credits
This library uses Font Awesome Icons.
- Font Awesome Icons: [Font Awesome](https://fontawesome.com/)
  - Icons used under the [Font Awesome Free License](https://fontawesome.com/license/free).


## Related
- [@sswahn/cognito](https://www.npmjs.com/package/@sswahn/cognito): Cognito is a robust AWS Cognito login system for Node.js.
- [@sswahn/session](https://www.npmjs.com/package/@sswahn/session): Session provides a simple and efficient way to manage user sessions using AWS Cognito for authentication.
- [@sswahn/authorizer](https://www.npmjs.com/package/@sswahn/authorizer): An AWS Cognito authorizer for APIGateway that uses **HTTP Cookies**.


## License
Login is [MIT Licensed](https://github.com/sswahn/login/blob/main/LICENSE)
