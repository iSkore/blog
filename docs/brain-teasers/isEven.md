# isEven

```javascript
/**
 * isEven
 * @description
 * determine if an integer is a multiple of two
 * @param {number} n - number to evaluate
 * @return {boolean} - if the integer is a multiple of two
 * @example
 * isEven( 4 ) // -> true
 */
function isEven( n ) {
    
}

console.assert( isEven( 0 ) === true );
console.assert( isEven( 1 ) === false );
console.assert( isEven( 2 ) === true );
console.assert( isEven( 3 ) === false );
console.assert( isEven( 4 ) === true );
console.assert( isEven( 1024 ) === true );
console.assert( isEven( 1025 ) === false );
console.assert( isEven( 1.1 ) === false );
console.assert( isEven( 1e3 ) === true );
console.assert( isEven( -1 ) === false );
console.assert( isEven( -2 ) === true );
```

<br/>
------
<br/>

<details>
<summary>Answer</summary>
<p>

Lets break this down:
- `n === 0` first we have to check if `n` is `0` because `0` is an even number according to math wizards
- `( n && ...` check if `n` is a value (not `null` or `undefined`, etc.)
- `... && n === +n ...` check if `n` is equal to itself if coerced into a number (evaluating against something like `1 === "1"`)
- `... && n === ~~n ...` check if `n` is equal to `n` floored because only integers can be even (evaluating against something like `1 === 1.1`)
- `... && !( n & 1 ) )` check if `n` AND 1 evaluate to `0` and evaluate the result. If the result is `0`, it will evaluate as `false`.

$$
\frac{
\begin{matrix}
\quad 0100 \\
\& \, 0001
\end{matrix}
}{\quad 0000}

\qquad

\frac{
\begin{matrix}
\quad 0101 \\
\& \, 0001
\end{matrix}
}{\quad 0001}
$$

```javascript
/**
 * isEven
 * @description
 * determine if an integer is a multiple of two
 * @param {number} n - number to evaluate
 * @return {boolean} - if the integer is a multiple of two
 * @example
 * isEven( 4 ) // -> true
 */
function isEven( n ) {
    return n === 0 || ( n && n === +n && n === ~~n && !( n & 1 ) );
}

console.assert( isEven( 0 ) === true );
console.assert( isEven( 1 ) === false );
console.assert( isEven( 2 ) === true );
console.assert( isEven( 3 ) === false );
console.assert( isEven( 4 ) === true );
console.assert( isEven( 1024 ) === true );
console.assert( isEven( 1025 ) === false );
console.assert( isEven( 1.1 ) === false );
console.assert( isEven( 1e3 ) === true );
console.assert( isEven( -1 ) === false );
console.assert( isEven( -2 ) === true );
```

</p>
</details>
