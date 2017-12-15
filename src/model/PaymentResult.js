/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Amount', 'model/FraudResult', 'model/ResultCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./FraudResult'), require('./ResultCode'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.PaymentResult = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Amount, root.AdyenApiJs.FraudResult, root.AdyenApiJs.ResultCode);
  }
}(this, function(ApiClient, Amount, FraudResult, ResultCode) {
  'use strict';




  /**
   * The PaymentResult model module.
   * @module model/PaymentResult
   * @version 1.30.3
   */

  /**
   * Constructs a new <code>PaymentResult</code>.
   * @alias module:model/PaymentResult
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>PaymentResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentResult} obj Optional instance to populate.
   * @return {module:model/PaymentResult} The populated <code>PaymentResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authCode')) {
        obj['authCode'] = ApiClient.convertToType(data['authCode'], 'String');
      }
      if (data.hasOwnProperty('paRequest')) {
        obj['paRequest'] = ApiClient.convertToType(data['paRequest'], 'String');
      }
      if (data.hasOwnProperty('issuerUrl')) {
        obj['issuerUrl'] = ApiClient.convertToType(data['issuerUrl'], 'String');
      }
      if (data.hasOwnProperty('md')) {
        obj['md'] = ApiClient.convertToType(data['md'], 'String');
      }
      if (data.hasOwnProperty('dccAmount')) {
        obj['dccAmount'] = Amount.constructFromObject(data['dccAmount']);
      }
      if (data.hasOwnProperty('dccSignature')) {
        obj['dccSignature'] = ApiClient.convertToType(data['dccSignature'], 'String');
      }
      if (data.hasOwnProperty('pspReference')) {
        obj['pspReference'] = ApiClient.convertToType(data['pspReference'], 'String');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ResultCode.constructFromObject(data['resultCode']);
      }
      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], Object);
      }
      if (data.hasOwnProperty('refusalReason')) {
        obj['refusalReason'] = ApiClient.convertToType(data['refusalReason'], 'String');
      }
      if (data.hasOwnProperty('fraudResult')) {
        obj['fraudResult'] = FraudResult.constructFromObject(data['fraudResult']);
      }
    }
    return obj;
  }

  /**
   * the authorisation code if the payment was successful
   * @member {String} authCode
   */
  exports.prototype['authCode'] = undefined;
  /**
   * the 3D request data for the issuer
   * @member {String} paRequest
   */
  exports.prototype['paRequest'] = undefined;
  /**
   * the URL to direct the shopper to
   * @member {String} issuerUrl
   */
  exports.prototype['issuerUrl'] = undefined;
  /**
   * the payment session
   * @member {String} md
   */
  exports.prototype['md'] = undefined;
  /**
   * @member {module:model/Amount} dccAmount
   */
  exports.prototype['dccAmount'] = undefined;
  /**
   * @member {String} dccSignature
   */
  exports.prototype['dccSignature'] = undefined;
  /**
   * the unique reference that is associated with the payment
   * @member {String} pspReference
   */
  exports.prototype['pspReference'] = undefined;
  /**
   * @member {module:model/ResultCode} resultCode
   */
  exports.prototype['resultCode'] = undefined;
  /**
   * a map of name/value pairs for passing in additional/industry-specific data
   * @member {Object} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * the mapped refusal reason
   * @member {String} refusalReason
   */
  exports.prototype['refusalReason'] = undefined;
  /**
   * @member {module:model/FraudResult} fraudResult
   */
  exports.prototype['fraudResult'] = undefined;


  /**
   * Returns the authorisation code if the payment was successful
   * @return {String}
   */
  exports.prototype.getAuthCode = function() {
    return this['authCode'];
  }

  /**
   * Sets the authorisation code if the payment was successful
   * @param {String} authCode the authorisation code if the payment was successful
   */
  exports.prototype.setAuthCode = function(authCode) {
    this['authCode'] = authCode;
  }


  /**
   * Returns the 3D request data for the issuer
   * @return {String}
   */
  exports.prototype.getPaRequest = function() {
    return this['paRequest'];
  }

  /**
   * Sets the 3D request data for the issuer
   * @param {String} paRequest the 3D request data for the issuer
   */
  exports.prototype.setPaRequest = function(paRequest) {
    this['paRequest'] = paRequest;
  }


  /**
   * Returns the URL to direct the shopper to
   * @return {String}
   */
  exports.prototype.getIssuerUrl = function() {
    return this['issuerUrl'];
  }

  /**
   * Sets the URL to direct the shopper to
   * @param {String} issuerUrl the URL to direct the shopper to
   */
  exports.prototype.setIssuerUrl = function(issuerUrl) {
    this['issuerUrl'] = issuerUrl;
  }


  /**
   * Returns the payment session
   * @return {String}
   */
  exports.prototype.getMd = function() {
    return this['md'];
  }

  /**
   * Sets the payment session
   * @param {String} md the payment session
   */
  exports.prototype.setMd = function(md) {
    this['md'] = md;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getDccAmount = function() {
    return this['dccAmount'];
  }

  /**
   * @param {module:model/Amount} dccAmount
   */
  exports.prototype.setDccAmount = function(dccAmount) {
    this['dccAmount'] = dccAmount;
  }


  /**
   * @return {String}
   */
  exports.prototype.getDccSignature = function() {
    return this['dccSignature'];
  }

  /**
   * @param {String} dccSignature
   */
  exports.prototype.setDccSignature = function(dccSignature) {
    this['dccSignature'] = dccSignature;
  }


  /**
   * Returns the unique reference that is associated with the payment
   * @return {String}
   */
  exports.prototype.getPspReference = function() {
    return this['pspReference'];
  }

  /**
   * Sets the unique reference that is associated with the payment
   * @param {String} pspReference the unique reference that is associated with the payment
   */
  exports.prototype.setPspReference = function(pspReference) {
    this['pspReference'] = pspReference;
  }


  /**
   * @return {module:model/ResultCode}
   */
  exports.prototype.getResultCode = function() {
    return this['resultCode'];
  }

  /**
   * @param {module:model/ResultCode} resultCode
   */
  exports.prototype.setResultCode = function(resultCode) {
    this['resultCode'] = resultCode;
  }


  /**
   * Returns a map of name/value pairs for passing in additional/industry-specific data
   * @return {Object}
   */
  exports.prototype.getAdditionalData = function() {
    return this['additionalData'];
  }

  /**
   * Sets a map of name/value pairs for passing in additional/industry-specific data
   * @param {Object} additionalData a map of name/value pairs for passing in additional/industry-specific data
   */
  exports.prototype.setAdditionalData = function(additionalData) {
    this['additionalData'] = additionalData;
  }


  /**
   * Returns the mapped refusal reason
   * @return {String}
   */
  exports.prototype.getRefusalReason = function() {
    return this['refusalReason'];
  }

  /**
   * Sets the mapped refusal reason
   * @param {String} refusalReason the mapped refusal reason
   */
  exports.prototype.setRefusalReason = function(refusalReason) {
    this['refusalReason'] = refusalReason;
  }


  /**
   * @return {module:model/FraudResult}
   */
  exports.prototype.getFraudResult = function() {
    return this['fraudResult'];
  }

  /**
   * @param {module:model/FraudResult} fraudResult
   */
  exports.prototype.setFraudResult = function(fraudResult) {
    this['fraudResult'] = fraudResult;
  }



  return exports;
}));


