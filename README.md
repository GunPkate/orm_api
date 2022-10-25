## typescript typeORM & Schedule Email

#### install package 1. typescript 2. nodemon auto compile file 3. express backend RESTAPI

```
npm i ts-node typescript nodemon express
```

#### connect backend to mysql database install package and set driver and config synch table in "entities"

```
npm i @types/mysql @types/express
```

#### run index.ts

```
ts-node index.ts
```

#### enable experimentalDecorators to disable problem check.

```
    "experimentalDecorators": true,
     /* Enable experimental support for TC39 stage 2 draft decorators. */

```

### typeORM you need to embody Entity in accordance with model in table data after then synch data rows.


### Node mailer 

```
npm i nodemailer handlebar 
```
### nodemailer consists of 3 sections. 
### 1. nodemailer.createTransport   to use service and auth by using email & password.
### 2. transporter.sendMail         to generate body of email and content (attach file is optional).
### 3. return transporter.sendMail(OPTIONAL)    to monitor result .

https://nodemailer.com/about/

### handlebars construct string template for email whose data parameter can be changed.

https://www.npmjs.com/package/handlebars
