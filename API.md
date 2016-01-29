<a name="HashTable"></a>
## HashTable
**Kind**: global class  

* [HashTable](#HashTable)
    * [new HashTable()](#new_HashTable_new)
    * [.put(key, value)](#HashTable+put)
    * [.get(key)](#HashTable+get) ⇒ <code>\*</code>
    * [.has(key)](#HashTable+has) ⇒ <code>boolean</code>
    * [.remove(key)](#HashTable+remove) ⇒ <code>boolean</code>
    * [.clear()](#HashTable+clear)
    * [.size()](#HashTable+size) ⇒ <code>Number</code>
    * [.max_load_factor(optionalFactor)](#HashTable+max_load_factor) ⇒ <code>number</code> &#124; <code>\*</code>
    * [.keys()](#HashTable+keys) ⇒ <code>Array</code>
    * [.forEach(callback, [thisArg])](#HashTable+forEach)

<a name="new_HashTable_new"></a>
### new HashTable()
Create a new HashTable.

<a name="HashTable+put"></a>
### hashTable.put(key, value)
Insert a new key/value pair in the HashTable. If a key/value pair with the given key already exists it willbe overridden. Please note, the underlying implementation only supports keystring values in contrast to the native implementation.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | a unique key used to store the value |
| value | <code>\*</code> | the value can be any javascript type, including objects. |

<a name="HashTable+get"></a>
### hashTable.get(key) ⇒ <code>\*</code>
Lookup a value from its key.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  
**Returns**: <code>\*</code> - Returns the value if the key exists. Otherwise, undefined is returned.  

| Param |
| --- |
| key | 

<a name="HashTable+has"></a>
### hashTable.has(key) ⇒ <code>boolean</code>
Check if key exists.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  
**Returns**: <code>boolean</code> - Returns false if the key does not exist; otherwise true.  

| Param |
| --- |
| key | 

<a name="HashTable+remove"></a>
### hashTable.remove(key) ⇒ <code>boolean</code>
Remove a key/value pair by its key.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  
**Returns**: <code>boolean</code> - Returns false, if the key does not exist. Returns true, if a pair is removed.  

| Param |
| --- |
| key | 

<a name="HashTable+clear"></a>
### hashTable.clear()
Removes all key/value pairs from the HashTable.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  
<a name="HashTable+size"></a>
### hashTable.size() ⇒ <code>Number</code>
Returns the number of key/value pairs in the HashTable.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  
<a name="HashTable+max_load_factor"></a>
### hashTable.max_load_factor(optionalFactor) ⇒ <code>number</code> &#124; <code>\*</code>
This feature is not supported by this HashTable implementation and only exists for compatibility reasons.Returns or sets the max load factor of the HashTable.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  

| Param |
| --- |
| optionalFactor | 

<a name="HashTable+keys"></a>
### hashTable.keys() ⇒ <code>Array</code>
Returns an array of the keys stored in the HashTable

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  
<a name="HashTable+forEach"></a>
### hashTable.forEach(callback, [thisArg])
The forEach method executes the provided callback once for each key ofthe HashTable. The callback is function executed for each element with the key and valuepassed as parameters. The context of the callback will bound to thisArg.

**Kind**: instance method of <code>[HashTable](#HashTable)</code>  

| Param | Description |
| --- | --- |
| callback |  |
| [thisArg] | Value to use as this when executing callback. If undefined the global context will be used. |

