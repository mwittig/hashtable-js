/*
 * hashtable-js
 * https://github.com/mwittig/hashtable-js
 *
 * Copyright (c) 2016 Marcus Wittig
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Create a new HashTable.
 * @constructor
 */
function HashTable() {
    this.hashmap = {};
    this.maxLoadFactor = 1.0;
}

/**
 * Insert a new key/value pair in the HashTable. If a key/value pair with the given key already exists it will
 * be overridden. Please note, the underlying implementation only supports key
 * string values in contrast to the native implementation.
 * @param {string} key - a unique key used to store the value
 * @param {*} value - the value can be any javascript type, including objects.
 */
HashTable.prototype.put = function put(key, value) {
    this.hashmap[key] = value;
};

/**
 * Lookup a value from its key.
 * @param {string} key - the key to lookup
 * @returns {*} Returns the value if the key exists. Otherwise, undefined is returned.
 */
HashTable.prototype.get = function get(key) {
    return this.hashmap[key];
};

/**
 * Check if key exists.
 * @param {string} key - the key to check for existence
 * @returns {boolean} Returns false if the key does not exist; otherwise true.
 */
HashTable.prototype.has = function get(key) {
    return this.hashmap.hasOwnProperty(key);
};

/**
 * Remove a key/value pair by its key.
 * @param {string} key - the key to remove
 * @returns {boolean} Returns false, if the key does not exist. Returns true, if a pair is removed.
 */
HashTable.prototype.remove = function get(key) {
    if (this.has(key)) {
        delete this.hashmap[key];
        return true;
    }
    return false;
};

/**
 * Removes all key/value pairs from the HashTable.
 */
HashTable.prototype.clear = function clear() {
    this.hashmap = {};
};

/**
 * Returns the number of key/value pairs in the HashTable.
 * @returns {number} the number of key/value pairs in the HashTable
 */
HashTable.prototype.size = function size() {
    return this.keys().length;
};

/**
 * This feature is not supported by this HashTable implementation and only exists for compatibility reasons.
 * Returns or sets the max load factor of the HashTable.
 * @param [optionalFactor]
 * @returns {number} the maximum load factor
 */
HashTable.prototype.max_load_factor = function max_load_factor(optionalFactor) {
    if (typeof (optionalFactor) !== "undefined") {
        this.maxLoadFactor = optionalFactor;
    }
    return this.maxLoadFactor;
};

/**
 * Returns an array of the keys stored in the HashTable
 * @returns {array<string>} an array of keys
 */
HashTable.prototype.keys = function keys() {
    return Object.keys(this.hashmap);
};

/**
 * The forEach method executes the provided callback once for each key of
 * the HashTable.
 * @param callback - callback function  executed for each element with the key and value
 * passed as parameters. The context of the callback will bound to thisArg.
 * @param [thisArg] - value to use as this when executing callback. If undefined the global context
 * will be used.
 */
HashTable.prototype.forEach = function forEach(callback, thisArg) {
    var self = this;
    function proxyCB(key) {
        callback.call(this, key, self.hashmap[key])
    }
    Object.keys(this.hashmap).forEach(proxyCB, thisArg);
};

/**
 * A do-nothing for compatibility reasons.
 * @param n
 */
HashTable.prototype.rehash = function rehash(n) {
    // do nothing
};

/**
 * A do-nothing for compatibility reasons.
 * @param n
 */
HashTable.prototype.reserve = function reserve(n) {
    // do nothing
};


module.exports = HashTable;