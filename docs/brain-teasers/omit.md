# (II) `omit`

This method is useful for filtering items out of an object.

This teaser has two parts:

1. object copy

```javascript
function omitCopy( o, ...keys ) {

}

const obj = { a: 1, b: 2, c: 3 };
console.assert( JSON.stringify( omitCopy( obj, 'a' ) ) === '{\"b\":2,\"c\":3}' );
console.assert( JSON.stringify( omitCopy( obj, 'd' ) ) === '{\"a\":1,\"b\":2,\"c\":3}' );
console.assert( JSON.stringify( omitCopy( obj, 'a', 'b', 'c' ) ) === '{}' );
```

2. original object

```javascript
function omit( o, ...keys ) {

}

const obj = { a: 1, b: 2, c: 3 };
console.assert( JSON.stringify( obj ) === '{"a":1,"b":2,"c":3}' );
omit( obj, 'a' );
console.assert( JSON.stringify( obj ) === '{"b":2,"c":3}' );
omit( obj, 'b' );
console.assert( JSON.stringify( obj ) === '{"c":3}' );
omit( obj, 'c' );
console.assert( JSON.stringify( obj ) === '{}' );
```

<br/>
------
<br/>

<details>
<summary>Answer</summary>
<div>

1. `omitCopy` is one potential answer
Notice it *creates* a new object rather than acting on the original.

```javascript
function omitCopy( o, ...keys ) {
    return Object.keys( o )
        .reduce(
            ( r, k ) => {
                if ( !keys.includes( k ) ) {
                    r[ k ] = o[ k ];
                }

                return r;
            }, {}
        );
}

console.assert( JSON.stringify( omitCopy( { a: 1, b: 2, c: 3 }, 'a' ) ) === '{"b":2,"c":3}' );
console.assert( JSON.stringify( omitCopy( { a: 1, b: 2, c: 3 }, 'd' ) ) === '{"a":1,"b":2,"c":3}' );
console.assert( JSON.stringify( omitCopy( { a: 1, b: 2, c: 3 }, 'a', 'b', 'c' ) ) === '{}' );
```

2. `omit` acts on the original object.

```javascript
function omit( o, ...keys ) {
    for ( let i = 0; i < keys.length; i++ ) {
        delete o[ keys[ i ] ];
    }
}

const obj = { a: 1, b: 2, c: 3 };
console.assert( JSON.stringify( obj ) === '{"a":1,"b":2,"c":3}' );
omit( obj, 'a' );
console.assert( JSON.stringify( obj ) === '{"b":2,"c":3}' );
omit( obj, 'b' );
console.assert( JSON.stringify( obj ) === '{"c":3}' );
omit( obj, 'c' );
console.assert( JSON.stringify( obj ) === '{}' );
```

</div>
</details>
