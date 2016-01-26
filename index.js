'use strict';
/**
 * Created by marcus on 26.01.2016.
 */


function HashTable() {
    this.hashmap = {};
    this.maxLoadFactor = 1.0;
}

HashTable.prototype.put = function put(key, data) {
    this.hashmap[key] = data;
};

HashTable.prototype.get = function get(key) {
    return this.hashmap[key];
};

HashTable.prototype.has = function get(key) {
    return this.hashmap.hasOwnProperty(key);
};

HashTable.prototype.remove = function get(key) {
    if (this.has(key)) {
        delete this.hashmap[key]
    }
};

HashTable.prototype.clear = function clear() {
    this.hashmap = {};
};

HashTable.prototype.size = function size() {
    return this.keys().length;
};

HashTable.prototype.max_load_factor = function max_load_factor(optionalFactor) {
    if (typeof (optionalFactor) !== "undefined") {
        this.maxLoadFactor = optionalFactor;
    }
    return this.maxLoadFactor;
};


HashTable.prototype.keys = function max_load_factor(optionalFactor) {
    return Object.keys(this.hashmap);
};

HashTable.prototype.rehash = function rehash(n) {
    // do nothing
};

HashTable.prototype.reserve = function reserve(n) {
    // do nothing
};


module.exports = HashTable;