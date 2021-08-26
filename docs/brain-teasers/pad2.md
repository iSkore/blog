# (I) `pad2`

This method is useful when displaying dates

```javascript
function pad2( n ) {

}

console.assert( pad2( 1 ) === '01' );
console.assert( pad2( 2 ) === '02' );
console.assert( pad2( 3 ) === '03' );
console.assert( pad2( 10 ) === '10' );
console.assert( pad2( 11 ) === '11' );
```

<br/>
------
<br/>

<details>
<summary>Answer</summary>
<div>

```javascript
function pad2( n ) {
    return n < 10 ? '0' + n : n;
}

console.assert( pad2( 1 ) === '01' );
console.assert( pad2( 2 ) === '02' );
console.assert( pad2( 3 ) === '03' );
console.assert( pad2( 10 ) === '10' );
console.assert( pad2( 11 ) === '11' );
```

</div>
</details>
