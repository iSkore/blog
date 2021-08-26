# (II) `omit`

This method is useful for crea

```javascript
function omit( o, ...keys ) {

}

console.assert( JSON.stringify( omit( { a: 1, b: 2, c: 3 }, 'a' ) ) === '{\"b\":2,\"c\":3}' );
console.assert( JSON.stringify( omit( { a: 1, b: 2, c: 3 }, 'd' ) ) === '{\"a\":1,\"b\":2,\"c\":3}' );
console.assert( JSON.stringify( omit( { a: 1, b: 2, c: 3 }, 'a', 'b', 'c' ) ) === '{}' );
```

<br/>
------
<br/>

<details>
<summary>Answer</summary>
<div>

`omitCopy` is one potential answer.
Likely the most optimal but notice it *creates* a new object rather than acting on the original.

`omit` acts on the original object.

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

function omit( o, ...keys ) {
    for ( let i = 0; i < keys.length; i++ ) {
        delete o[ keys[ i ] ];
    }
}

const obj = { a: 1, b: 2, c: 3 };
console.assert( JSON.stringify( obj ) === '{"a":1,"b":2,"c":3}' );
omit( obj, 'a' );
console.assert( JSON.stringify( obj ) === '{"b":2,"c":3}' );
```

</div>
</details>
