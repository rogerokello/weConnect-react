[![Build Status](https://travis-ci.org/rogerokello/weConnect-react.svg?branch=master)](https://travis-ci.org/rogerokello/weConnect-react) 
<a href="https://codeclimate.com/github/rogerokello/weConnect-react/maintainability"><img src="https://api.codeclimate.com/v1/badges/fbae7114b5c44289c779/maintainability" /></a>
[![Test Coverage](https://api.codeclimate.com/v1/badges/fbae7114b5c44289c779/test_coverage)](https://codeclimate.com/github/rogerokello/weConnect-react/test_coverage)

# weConnect
This website brings businesses and individuals together. By using it one will be able to create awareness of businesses and give users the ability to write reviews about the businesses that they have interacted with. Please visit a prototype at https://weconnect-react-redux-v6.herokuapp.com/

## How to run the application
1. Create a folder weconnect on your computer
   
2. Clone the app to your folder by issuing this command

    ```
        $ git clone -b master https://github.com/rogerokello/weConnect-react.git
    ```
    NB: Read these resources to install git: https://git-scm.com/downloads
3. Navigate into cloned folder

    ```
        $ cd weConnect-react
    ```

4. Install the packages for the application
   While at your prompt initiate the following command

    ```
        $ npm install
     ```

5. Run your app from the terminal like this

    ```
        $ npm run start
    ```

## How to test the application

1. Running tests normally

    ```
        $ npm test
    ```
2. Running tests with coverage

    ```
        $ npm test -- --coverage
    ```

## How to change point to the API

1. Locate the base URL file in the src folder

    ```
        weconnect/src/actions/baseurl.js
    ```
2. locate the line `"http://127.0.0.1:5000/"` and change it to `"https://dev-v10.herokuapp.com/"`


