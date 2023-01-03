# An API for retreival of records. 
This project is built with Express.js and deployed on Railway.

1. Demo (hosted)
2. Local Setup


## 1. Demo (hosted)
link: https://certinfo-js.up.railway.app

The API contains list of certificates that can filtered and sorted.

The certificates has the following fields
- id
- certifcate_id
- full_name
- dob
- type (nin, voter, driver)
- issued_on
- expired_on
- created 
- updated

  e.g

  https://certinfo-js.up.railway.app/certificates

  returns a list of all records with the above fields.



The list can be filtered by the following fields
- id
- certifcate_id
- full_name
- dob
- type (nin, voter, driver)

    e.g

    https://certinfo-js.up.railway.app/certificates?certificate_id=00001A



A text search can be done accross the following fields
- id
- certifcate_id
- full_name
- dob
- type (nin, voter, driver)

    e.g

    https://certinfo-js.up.railway.app/certificates?search=Abu
    This performs a query by all the above mentioned fields



The list can be sorted by ID either in ascending or descending order

    e.g

    Ascending 
    https://certinfo-js.up.railway.app/certificates?order=ASC
    

    Descending
    https://certinfo-js.up.railway.app/certificates?order=DESC




## 2. Local setup
 - Clone the repository

    __git clone https://github.com/iAmKabiru/certinfo_js.git__

 - Install dependencies 

    __npm install__

 - Run the application

    __npm start__

 - Access it in browser by going to __127.0.0.1:3000__
    