# Login · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/login/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/login) ![Weekly Downloads](https://img.shields.io/npm/dw/@sswahn/login)

A versatile React authentication library designed to streamline user authentication processes in your React applications. This library provides components for user registration, login, password reset, and more.

## Features
- Seamless user registration with robust validation.
- User login with optional "Remember Me" functionality.
- Forgot password functionality with email confirmation.
- Password reset using confirmation code.
  
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
```javascript
<Register
  className="custom-register"
  onSubmit={handleOnSubmit}
/>
```  

### Login
```javascript
<Login
  className="custom-login"
  onSubmit={handleOnSubmit}
  forgotPassword={handleOpenForgotPassword},
  registerUser={handleOpenRegistration}
/>
```  

### Forgot Password
```javascript
<ForgotPassword
  className="custom-forgot-password"
  onSubmit={handleOnSubmit}
/>
```  

### Confirm Forgot Password
```javascript
<ConfirmForgotPassword
  className="custom-confirm-forgot-password"
  onSubmit={handleOnSubmit}
/>
```

## Documentation

### `onSubmit` Callback Hook
Each component (`Register`, `Login`, `ForgotPassword`, `ConfirmForgotPassword`) accepts an onSubmit prop, which should be a callback function. This function is triggered when the user submits the form, and it receives the form data as an argument. You can customize this function to handle the form submission, such as making API calls, validating data, etc.

### Styling Overrides with className
You can customize the appearance of each component by providing a className prop. This allows you to apply your own styles to the component. For example:
```javascript
const CustomLogin = () => {
  return <Login className="custom-login" onSubmit={handleLogin} />
}
```
In the above example, the custom-login class will be applied to the Login component, allowing you to override default styles.

### Additional Callbacks in Login
- `forgotPassword`: Callback triggered when the user clicks the "Forgot password?" link. Use this to handle opening the forgot password form.

- `registerUser`: Callback triggered when the user clicks the "Create an account" link. Use this to handle opening the registration form.

## Peer Dependencies
Login requires React as a peer dependency. You should have React installed in your project with a version compatible with this library.  

[React](https://reactjs.org/): ^18.2.0  

## Credits
This library uses Font Awesome Icons.
- Font Awesome Icons: [Font Awesome](https://fontawesome.com/)
  - Icons used under the [Font Awesome Free License](https://fontawesome.com/license/free).


## License
Login is [MIT Licensed](https://github.com/sswahn/login/blob/main/LICENSE)
