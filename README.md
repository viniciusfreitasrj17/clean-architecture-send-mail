![Status Coverage](https://img.shields.io/badge/coverage-100%25-success)

# Micro Service to Send Mail using Clean Architecture and TDD

![Alt Clean Architecture](/CleanArchitecture.jpg "a Clean Architecture")

## Run test

```sh
npm run test:coverage
```

### In Enterprise Business Rules (domains)

- Has Email Entity

### In Application Business Rules (app)

- Has Create Email UseCase, Create Email Dto and Email Repository Protocol

### In Interface Adapters (infra)

- Has Controller Layer to create the email

### And, in Frameworks & Drivers (external modules)

- Has DB to store datas in sqlite
- Has HTTP to export api with express and route create email
- Has Mail to send mails
