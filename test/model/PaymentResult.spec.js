/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdyenApiJs);
  }
}(this, function(expect, AdyenApiJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AdyenApiJs.PaymentResult();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaymentResult', function() {
    it('should create an instance of PaymentResult', function() {
      // uncomment below and update the code to test PaymentResult
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be.a(AdyenApiJs.PaymentResult);
    });

    it('should have the property authCode (base name: "authCode")', function() {
      // uncomment below and update the code to test the property authCode
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property paRequest (base name: "paRequest")', function() {
      // uncomment below and update the code to test the property paRequest
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property issuerUrl (base name: "issuerUrl")', function() {
      // uncomment below and update the code to test the property issuerUrl
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property md (base name: "md")', function() {
      // uncomment below and update the code to test the property md
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property dccAmount (base name: "dccAmount")', function() {
      // uncomment below and update the code to test the property dccAmount
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property dccSignature (base name: "dccSignature")', function() {
      // uncomment below and update the code to test the property dccSignature
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property pspReference (base name: "pspReference")', function() {
      // uncomment below and update the code to test the property pspReference
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property resultCode (base name: "resultCode")', function() {
      // uncomment below and update the code to test the property resultCode
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property additionalData (base name: "additionalData")', function() {
      // uncomment below and update the code to test the property additionalData
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property refusalReason (base name: "refusalReason")', function() {
      // uncomment below and update the code to test the property refusalReason
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

    it('should have the property fraudResult (base name: "fraudResult")', function() {
      // uncomment below and update the code to test the property fraudResult
      //var instane = new AdyenApiJs.PaymentResult();
      //expect(instance).to.be();
    });

  });

}));
