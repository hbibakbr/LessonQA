# Quality Assurance Learning Project 1
Repository for Learning Software Quality Assurance

This is a web testing automation project built using the **Cypress** framework.

## Overview
The project includes 4 Features or Scenarios from [Magento Softwaretestingboard](https://magento.softwaretestingboard.com/). The goal of this project is to provide automated test cases for common user interactions on the Magento platform, ensuring robust and reliable functionality.

## Features
### Auth
1. **Registration**
   - Verify Success Registration
   - Verify Failed Registration - Already account same email
   - Verify Failed Registration - Different password confirmation
2. **Login**
   - Verify Failed Login - Wrong Email
   - Verify Failed Login - Wrong Password
   - Verify Failed Login - Invalid Email

### Product
1. **Add Item to Cart**
   - Verify Success Add Item to Cart
   - Verify Failed Add Item to Cart - 0 Quantity
   - Verify Failed Add Item to Cart - Empty Quantity
2. **Checkout**
   - Verify Success Checkout Item on Cart
   - Verify Failed Checkout Item on Cart - No Shipping Methods

### User
1. **Edit My Account**
   - Change User's Firstname
   - Change User's Lastname
   - Verify Failed Change Firstname - Empty Firstname
   - Verify Failed Change Lastname - Empty Lastname
2. **Logout**
   - Verify Success Log out

## Test Cases Documentation
All test cases have been created and documented in Qase.io. These test cases cover:
- Authentication testing
- Product functionality testing
- User account management

The test cases have been exported to PDF for easy review and reference. You can view and download the test case PDF here: [Magento - Test Case](https://drive.google.com/drive/folders/1waYBjtLKlWEONSXLyxZRgOemWnv_cTSg?usp=drive_link).

## Installation and Setup
To set up and run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/hbibakbr/LessonQA.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd LessonQA
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the tests:**
    ```bash
    npx cypress open
    ```
    This will open the Cypress Test Runner, where you can run the test cases interactively.


## Acknowledgements
A huge thanks to the amazing Cypress community and the Magento Softwaretestingboard for providing a great platform for testing. Special thanks to Qase.io for their test management tools.

Happy Testing! 🚀
