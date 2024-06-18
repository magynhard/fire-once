<a name="FireOnce"></a>

## FireOnce
FireOnce

* [FireOnce](#FireOnce)
    * [.fire(identifier, func, options)](#FireOnce.fire) &rarr; <code>boolean</code>
    * [.FireFunction](#FireOnce.FireFunction) : <code>Object</code>

<a name="FireOnce.fire"></a>

### FireOnce.fire(identifier, func, options) &rarr; <code>boolean</code>
**Kind**: static method of [<code>FireOnce</code>](#FireOnce)  
**Returns**: <code>boolean</code> - true if directly fired, false if stacked  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| identifier | <code>string</code> |  | for the function |
| func | <code>function</code> |  | function to run |
| options | <code>Object</code> |  |  |
| options.period | <code>Number</code> |  | period in ms where function is maximal called once |
| options.type | <code>&#x27;both&#x27;</code> \| <code>&#x27;start&#x27;</code> \| <code>&#x27;end&#x27;</code> | <code>&#x27;both&#x27;</code> | call pattern |

<a name="FireOnce.FireFunction"></a>

### FireOnce.FireFunction : <code>Object</code>
Type definition of a fire function object
**Properties**

| Name | Type |
| --- | --- |
| func | <code>function</code> | 
| stack_count | <code>Number</code> | 
| last_call | <code>Date</code> | 
| options | <code>Object</code> | 
| options.period | <code>Number</code> | 
