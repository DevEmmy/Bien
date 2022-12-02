## Bien
This microservice software is to provide the functionalities of every user on bien which includes
- sign in/up
- update profile
- fund wallet
- request for withdrawal, etc.

For now, this server has not been deployed, hence the developer is expected to run the server locally, with the help of the following: 

- clone the repository or download the /api folder : git clone https://github.com/DevEmmy/Bien.
 Note: You're only concerned with the api folder, so you should navigate there: cd api

- Ensure node is installed else, download [https://nodejs.org/en/download/]here
- Install all dependencies: npm install
- run server: npm run dev

### Base url: http://localhost:9120

Scheme: "http"

Models:
- User
    - fullName
    - email**
    - password**
    - phoneNumber
    - address
    - verificationId
    - accountNumber
    - bankName
    - balance
    - plan
    - dps (date plan was subscribed)
    - pin (to widthraw)

- Transaction
    - type
    - approval
    - amount
    - user

### User
Every routes about users;
- POST: /auth/sign-in
    - parameters: email & password
    - action: for users to sign in
    - response: user's object;
        ```json
            {
                "_id": "638a2b0756d9124aff9a15ce",
                "email": "Og@mail.com",
                "password": "$2b$08$wejMtv9ytAVmSLOSc5r25OmKKoAT9XW9N.IZJjDNxJxC2Fe1qKYFi",
                "createdAt": "2022-12-02T16:42:48.008Z",
                "updatedAt": "2022-12-02T16:54:31.188Z",
                "__v": 0,
                
            }
        ```

- POST: /auth/sign-up
    - parameters: email & password
    - action: for users to sign up
    - response: user updated object;
        ```json
            {
                "_id": "638a2b0756d9124aff9a15ce",
                "email": "Og@mail.com",
                "password": "$2b$08$wejMtv9ytAVmSLOSc5r25OmKKoAT9XW9N.IZJjDNxJxC2Fe1qKYFi",
                "createdAt": "2022-12-02T16:42:48.008Z",
                "updatedAt": "2022-12-02T16:54:31.188Z",
                "__v": 0,
                
            }
        ```

- PATCH: /auth/update
    - parameters: properties on the users model
    - action: for users to update their profile
    - response: user's updated object;
        ```json
            {
                "_id": "638a2b0756d9124aff9a15ce",
                "email": "Og@mail.com",
                "password": "$2b$08$wejMtv9ytAVmSLOSc5r25OmKKoAT9XW9N.IZJjDNxJxC2Fe1qKYFi",
                "createdAt": "2022-12-02T16:42:48.008Z",
                "updatedAt": "2022-12-02T16:54:31.188Z",
                "__v": 0,
                
            }
        ```

## Transactions
Every routes about transactions

- POST: /transaction/deposit
    - parameters: amount (amount deposited)
    - response: transaction details with model structure
    - response format: json
    - action: for users to deposit their account

- POST: /transaction/requestForWithdrawal
    - parameters: amount
    - response: transaction details with model structure
    - response format: json
    - action: for users to request funds in their account with amount to withdraw

- GET: /transaction/user-transactions
    - parameters: none
    - response: an array transaction details with model structure
    - response format: json
    - action: for users to check thier transactions

- GET: /transaction/:id
    - parameters: id
    - response: transaction details with model structure
    - response format: json
    - action: to get a transaction detail with id

- GET: /transaction/all
    - parameters: none
        - response: an array transaction details with model structure
    - response format: json
    - action: for admin to get lists of all transactions
