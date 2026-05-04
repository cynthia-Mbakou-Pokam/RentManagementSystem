# Rent Management Website UML

## Overview

This document describes the UML-style design for a rent management website. The platform is intended to support landlords, property managers, tenants, maintenance staff, accountants, and system administrators.

The system should cover:

- property and unit management
- tenant onboarding and profile management
- lease management
- rent billing and payment tracking
- maintenance request handling
- notifications and reminders
- expense and financial reporting
- admin and audit controls

## Main Actors

### 1. Landlord / Owner

- Manage properties
- View units and occupancy
- Approve tenants
- Monitor payments
- Review reports

### 2. Property Manager

- Create and update properties
- Manage leases
- Track rent collection
- Assign maintenance requests
- Communicate with tenants

### 3. Tenant

- Register and log in
- View lease details
- Pay rent online
- View invoices and receipts
- Submit maintenance requests
- Receive reminders and notices

### 4. Maintenance Staff / Vendor

- View assigned maintenance work
- Update request status
- Record completion notes

### 5. Accountant

- Track income and expenses
- Reconcile payments
- Generate financial reports

### 6. System Admin

- Manage users and roles
- Configure system settings
- Review audit logs

## Functional Modules

### Authentication and Access Control

- User registration
- Login and logout
- Password reset
- Role-based access control
- User status management

### Property Management

- Add property
- Edit property
- Delete property
- Add units under a property
- Update unit status
- Track occupancy

### Tenant Management

- Create tenant profile
- Upload tenant documents
- Store contact information
- Track tenant history

### Lease Management

- Create lease
- Renew lease
- Terminate lease
- Store lease terms
- Store deposit information
- Track lease status

### Billing and Payments

- Generate monthly rent invoices
- Add late fees
- Accept online payments
- Generate receipts
- Track unpaid balances
- View payment history

### Maintenance Management

- Create maintenance request
- Set priority level
- Assign staff/vendor
- Track request progress
- Close resolved request

### Notifications

- Send rent reminders
- Send lease expiry reminders
- Send payment confirmation
- Send maintenance updates

### Accounting and Reporting

- Record expenses
- Track owner income
- Generate occupancy reports
- Generate arrears reports
- Generate income reports

### Admin and Audit

- Manage roles and permissions
- Configure penalties and policies
- Track all important activities in audit logs

## Use Case UML

```mermaid
flowchart TD
    Landlord[Landlord / Owner]
    Manager[Property Manager]
    Tenant[Tenant]
    Vendor[Maintenance Staff / Vendor]
    Accountant[Accountant]
    Admin[System Admin]

    UC1((Manage Properties))
    UC2((Manage Units))
    UC3((Manage Tenants))
    UC4((Create / Renew Lease))
    UC5((Generate Invoices))
    UC6((Pay Rent))
    UC7((Track Payments))
    UC8((Submit Maintenance Request))
    UC9((Assign Maintenance))
    UC10((Send Notifications))
    UC11((Generate Reports))
    UC12((Manage Users and Roles))

    Landlord --> UC1
    Landlord --> UC7
    Landlord --> UC11

    Manager --> UC1
    Manager --> UC2
    Manager --> UC3
    Manager --> UC4
    Manager --> UC5
    Manager --> UC7
    Manager --> UC9
    Manager --> UC10

    Tenant --> UC6
    Tenant --> UC8
    Tenant --> UC3

    Vendor --> UC9

    Accountant --> UC7
    Accountant --> UC11

    Admin --> UC12
    Admin --> UC10
```

## Class Diagram UML

```mermaid
classDiagram

class User {
  +UUID userId
  +string fullName
  +string email
  +string phone
  +string role
  +string status
  +login()
  +updateProfile()
  +receiveNotification()
}

class Property {
  +UUID propertyId
  +string name
  +string address
  +string type
  +UUID ownerId
  +addUnit()
  +updateDetails()
  +calculateOccupancy()
}

class Unit {
  +UUID unitId
  +UUID propertyId
  +string unitNumber
  +decimal rentAmount
  +string status
  +markAvailable()
  +assignTenant()
  +updateRent()
}

class Lease {
  +UUID leaseId
  +UUID tenantId
  +UUID unitId
  +date startDate
  +date endDate
  +decimal depositAmount
  +string status
  +createLease()
  +renewLease()
  +terminateLease()
}

class Invoice {
  +UUID invoiceId
  +UUID leaseId
  +date dueDate
  +decimal amount
  +decimal balance
  +string status
  +generateMonthlyRent()
  +addLateFee()
  +markPaid()
}

class Payment {
  +UUID paymentId
  +UUID invoiceId
  +UUID paidBy
  +decimal amount
  +string method
  +datetime paidAt
  +validatePayment()
  +issueReceipt()
  +refund()
}

class MaintenanceRequest {
  +UUID requestId
  +UUID unitId
  +UUID tenantId
  +string title
  +string priority
  +string status
  +submit()
  +assignTechnician()
  +closeRequest()
}

class Notification {
  +UUID notificationId
  +UUID recipientId
  +string type
  +string channel
  +string message
  +datetime sentAt
  +send()
  +markRead()
  +retryDelivery()
}

class Expense {
  +UUID expenseId
  +UUID propertyId
  +string category
  +decimal amount
  +date incurredAt
  +recordExpense()
  +attachReceipt()
}

class Report {
  +UUID reportId
  +string type
  +UUID generatedBy
  +date periodStart
  +date periodEnd
  +generateIncomeStatement()
  +generateOccupancyReport()
  +generateArrearsReport()
}

User "1" --> "many" Property : owns/manages
Property "1" --> "many" Unit : contains
Unit "1" --> "many" Lease : leased under
User "1" --> "many" Lease : tenant
Lease "1" --> "many" Invoice : generates
Invoice "1" --> "many" Payment : paid by
Unit "1" --> "many" MaintenanceRequest : has
User "1" --> "many" MaintenanceRequest : raises
User "1" --> "many" Notification : receives
Property "1" --> "many" Expense : incurs
User "1" --> "many" Report : generates
```

## Recommended Website Pages

- Home page
- About platform page
- Login page
- Registration page
- Dashboard
- Property listing page
- Property details page
- Unit management page
- Tenant management page
- Lease management page
- Billing and payments page
- Maintenance request page
- Reports page
- Admin settings page

## Suggested MVP Development Order

### Phase 1

- User authentication
- Role management
- Property and unit management
- Tenant profiles
- Lease creation

### Phase 2

- Invoice generation
- Rent payments
- Payment history
- Notifications and reminders

### Phase 3

- Maintenance request workflow
- Expense management
- Reports dashboard

### Phase 4

- Advanced analytics
- Audit log system
- Multi-property scaling
- Vendor management improvements

## Summary

This UML design gives a complete foundation for building a rent management website. It includes the actors, system modules, major use cases, and core business classes needed for a real-world platform.
