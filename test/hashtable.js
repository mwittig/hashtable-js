/*
 * hashtable-js
 * https://github.com/mwittig/hashtable-js
 *
 * Copyright (c) 2016 Marcus Wittig
 * Licensed under the MIT license.
 */

'use strict';
var HashTable = require("..");
require('jasmine-expect');

describe("Testing the hashtable functions", function() {
    var hashTable;

    beforeEach(function() {
        hashTable = new HashTable();
    });

    it("shall put and get items", function() {
        expect(hashTable.keys().length).toBe(0);
        hashTable.put('42', 42);
        hashTable.put('44', 44);
        expect(hashTable.get('42')).toBe(42);
        expect(hashTable.get('44')).toBe(44);
        expect(hashTable.has('42')).toBeTruthy();
        expect(hashTable.has('44')).toBeTruthy();
        expect(hashTable.keys().length).toBe(2);
    });

    it("shall remove items", function() {
        hashTable.put('42', 42);
        hashTable.put('44', 44);
        expect(hashTable.size()).toBe(2);
        expect(hashTable.has('42')).toBeTruthy();
        expect(hashTable.has('44')).toBeTruthy();
        expect(hashTable.has('99')).toBeFalsy();

        expect(hashTable.remove('99')).toBeFalsy();
        expect(hashTable.has('42')).toBeTruthy();
        expect(hashTable.has('44')).toBeTruthy();
        expect(hashTable.has('99')).toBeFalsy();

        expect(hashTable.remove('42')).toBeTruthy();
        expect(hashTable.has('42')).toBeFalsy();
        expect(hashTable.has('44')).toBeTruthy();
        expect(hashTable.remove('44')).toBeTruthy();
        expect(hashTable.has('44')).toBeFalsy();
        expect(hashTable.size()).toBe(0);
    });

    it("shall iterate the table", function(done) {
        hashTable.put('42', 42);
        hashTable.put('44', 44);
        var counter = 0;
        this._item = true;

        hashTable.forEach(
            function(key, value) {
                counter++;
                expect(key).toBeString();
                expect(value).toBeNumber();
                expect(value).toBe(hashTable.get(key))
                expect(this._item).toBeTruthy()
            },
            this
        );
        setTimeout(
            function() {
                expect(counter).toBe(2);
                done()
            },
            2000
        )
    });

    it("shall clear the table", function() {
        hashTable.put('42', 42);
        hashTable.put('44', 44);
        expect(hashTable.size()).toBe(2);
        hashTable.clear();
        expect(hashTable.size()).toBe(0);
    });

    it("shall support rehash and reserve mockups", function() {
        hashTable.put('42', 42);
        hashTable.put('44', 44);
        expect(hashTable.size()).toBe(2);
        hashTable.rehash();
        hashTable.reserve();
        expect(hashTable.size()).toBe(2);
    });

    it("shall get and set the maximum load factor", function() {
        expect(hashTable.max_load_factor()).toBe(1.0);
        expect(hashTable.max_load_factor(0.75)).toBe(0.75);
    });
});