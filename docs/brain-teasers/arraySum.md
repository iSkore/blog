# (I) `arraySum`

Choose your argument type:

1. function overload - `function sum( ...args ) {`

```javascript
function sum( ...args ) {

}

console.assert( sum( 0 ) === 0 );
console.assert( sum( 1, 2, 3 ) === 6 );
console.assert( sum( 1.1, 2.2, 3.3 ) === 6.6 );
console.assert( sum( 1e1, 1e2, 1e3 ) === 1110 );
console.assert( sum( 0b01, 0b10 ) === 3 );
```

2. or defined parameter - `function sum( args ) {`

```javascript
function sum( args ) {

}

console.assert( sum( [ 0 ] ) === 0 );
console.assert( sum( [ 1, 2, 3 ] ) === 6 );
console.assert( sum( [ 1.1, 2.2, 3.3 ] ) === 6.6 );
console.assert( sum( [ 1e1, 1e2, 1e3 ] ) === 1110 );
console.assert( sum( [ 0b01, 0b10 ] ) === 3 );
```

<br/>
------
<br/>

<details>
<summary>Answer</summary>
<div>

Only explanation I'll give for this one is the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Using the spread operator (the `...args` part) is a [Function Overload](https://en.wikipedia.org/wiki/Function_overloading) method in JavaScript.

It allows us to pass in 0, 1, or `n` amount of arguments.

Within the function, `args` is an array that can be iterated on.

In this scenario, the function doesn't change if we use the spread operator or not

```javascript
/**
 * sum
 * @description
 * returns the sum of a list of parameters or array of numbers
 * @param {number[]} args - arguments to operate on
 * @returns {number} - result of cumulative additions
 * @example
 * sum( 1, 2, 3 ); // -> 6
 */
function sum( ...args ) {
    let n = 0;

    for ( let i = 0; i < args.length; i++ ) {
        n += args[ i ];
    }

    return n;
}

console.assert( sum( 0 ) === 0 );
console.assert( sum( 1, 2, 3 ) === 6 );
console.assert( sum( 1.1, 2.2, 3.3 ) === 6.6 );
console.assert( sum( 1e1, 1e2, 1e3 ) === 1110 );
console.assert( sum( 0b01, 0b10 ) === 3 );
```

</div>
</details>
