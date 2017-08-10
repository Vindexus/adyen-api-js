# adyen-api-js

AdyenApiJs - JavaScript client for adyen-api-js
Operations about payments, recurring and payout
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 25
- Package version: 1.25.4
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install adyen-api-js --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var AdyenApiJs = require('adyen-api-js');

var defaultClient = AdyenApiJs.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME'
auth.password = 'YOUR PASSWORD'

var api = new AdyenApiJs.PaymentApi()

var paymentRequest = new AdyenApiJs.PaymentRequest(); // {PaymentRequest} The Payment Request

api.authorise(paymentRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://pal-test.adyen.com/pal/servlet*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AdyenApiJs.PaymentApi* | [**authorise**](docs/PaymentApi.md#authorise) | **POST** /Payment/v25/authorise | Creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later. While for cards an authorised payment can be captured later, non-card methods typically don&#39;t support this and will automatically capture as part of the authorisation.
*AdyenApiJs.PaymentApi* | [**authorise3d**](docs/PaymentApi.md#authorise3d) | **POST** /Payment/v25/authorise3d | For an authenticated 3-D secure session, creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later.
*AdyenApiJs.PaymentApi* | [**cancel**](docs/PaymentApi.md#cancel) | **POST** /Payment/v25/cancel | Cancels a payment authorisation
*AdyenApiJs.PaymentApi* | [**cancelrefund**](docs/PaymentApi.md#cancelrefund) | **POST** /Payment/v25/cancelOrRefund | Disable a stored payment detail
*AdyenApiJs.PaymentApi* | [**capture**](docs/PaymentApi.md#capture) | **POST** /Payment/v25/capture | Captures a payment authorisation
*AdyenApiJs.PaymentApi* | [**refund**](docs/PaymentApi.md#refund) | **POST** /Payment/v25/refund | Refunds a payment
*AdyenApiJs.PayoutApi* | [**confirm**](docs/PayoutApi.md#confirm) | **POST** /Payout/v25/confirm | Confirm a payout
*AdyenApiJs.PayoutApi* | [**decline**](docs/PayoutApi.md#decline) | **POST** /Payout/v25/decline | Decline a payout
*AdyenApiJs.PayoutApi* | [**storeDetailAndSubmit**](docs/PayoutApi.md#storeDetailAndSubmit) | **POST** /Payout/v25/storeDetailAndSubmit | Store the payouts details and make a payout request
*AdyenApiJs.RecurringApi* | [**disable**](docs/RecurringApi.md#disable) | **POST** /Recurring/v25/disable | Disable a stored payment detail
*AdyenApiJs.RecurringApi* | [**listRecurringDetails**](docs/RecurringApi.md#listRecurringDetails) | **POST** /Recurring/v25/listRecurringDetails | Retrieves stored payment details for a shopper


## Documentation for Models

 - [AdyenApiJs.Address](docs/Address.md)
 - [AdyenApiJs.Amount](docs/Amount.md)
 - [AdyenApiJs.AuthenticationResponse](docs/AuthenticationResponse.md)
 - [AdyenApiJs.BankAccount](docs/BankAccount.md)
 - [AdyenApiJs.BrowserInfo](docs/BrowserInfo.md)
 - [AdyenApiJs.Card](docs/Card.md)
 - [AdyenApiJs.ConfirmOrDeclineRequest](docs/ConfirmOrDeclineRequest.md)
 - [AdyenApiJs.ConfirmOrDeclineResult](docs/ConfirmOrDeclineResult.md)
 - [AdyenApiJs.Contract](docs/Contract.md)
 - [AdyenApiJs.DirectoryResponse](docs/DirectoryResponse.md)
 - [AdyenApiJs.DisableRequest](docs/DisableRequest.md)
 - [AdyenApiJs.DisableResult](docs/DisableResult.md)
 - [AdyenApiJs.Error](docs/Error.md)
 - [AdyenApiJs.ErrorType](docs/ErrorType.md)
 - [AdyenApiJs.EventCode](docs/EventCode.md)
 - [AdyenApiJs.ForexQuote](docs/ForexQuote.md)
 - [AdyenApiJs.FraudCheckResult](docs/FraudCheckResult.md)
 - [AdyenApiJs.FraudResult](docs/FraudResult.md)
 - [AdyenApiJs.Gender](docs/Gender.md)
 - [AdyenApiJs.Installments](docs/Installments.md)
 - [AdyenApiJs.ModificationRequest](docs/ModificationRequest.md)
 - [AdyenApiJs.ModificationResult](docs/ModificationResult.md)
 - [AdyenApiJs.ModificationResultResponse](docs/ModificationResultResponse.md)
 - [AdyenApiJs.Name](docs/Name.md)
 - [AdyenApiJs.NotificationItems](docs/NotificationItems.md)
 - [AdyenApiJs.NotificationRequest](docs/NotificationRequest.md)
 - [AdyenApiJs.NotificationRequestItemDetails](docs/NotificationRequestItemDetails.md)
 - [AdyenApiJs.NotificationResult](docs/NotificationResult.md)
 - [AdyenApiJs.PaymentRequest](docs/PaymentRequest.md)
 - [AdyenApiJs.PaymentRequest3d](docs/PaymentRequest3d.md)
 - [AdyenApiJs.PaymentResult](docs/PaymentResult.md)
 - [AdyenApiJs.PayoutResultCodeType](docs/PayoutResultCodeType.md)
 - [AdyenApiJs.Recurring](docs/Recurring.md)
 - [AdyenApiJs.RecurringDetail](docs/RecurringDetail.md)
 - [AdyenApiJs.RecurringDetailReferenceType](docs/RecurringDetailReferenceType.md)
 - [AdyenApiJs.RecurringDetailsRequest](docs/RecurringDetailsRequest.md)
 - [AdyenApiJs.RecurringDetailsResult](docs/RecurringDetailsResult.md)
 - [AdyenApiJs.ResultCode](docs/ResultCode.md)
 - [AdyenApiJs.ShopperInteraction](docs/ShopperInteraction.md)
 - [AdyenApiJs.StoreDetailAndSubmitRequest](docs/StoreDetailAndSubmitRequest.md)
 - [AdyenApiJs.StoreDetailAndSubmitResult](docs/StoreDetailAndSubmitResult.md)
 - [AdyenApiJs.ThreeDSecureData](docs/ThreeDSecureData.md)


## Documentation for Authorization


### auth

- **Type**: HTTP basic authentication

