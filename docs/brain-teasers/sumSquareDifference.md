# (I) `sumSquareDifference`

```javascript
/**
 * sumOfSquares
 * @description
 * The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385.
 * The square of the sum of the first ten natural numbers is, ( 1 + 2 + ... + 10 )^2 = 55^2 = 3025.
 * The difference between the sum of the squares of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
 * Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
 * @param {number} n - number to create range
 * @return {number} - difference between the sum of the squares of the first n natural numbers and the square of the sum
 */

function sumSquareDifference( n ) {
    
}

console.assert( sumSquareDifference( 100 ) );

```

<br/>
------
<br/>

<details>
<summary>Answer</summary>
<div>

Using a for-loop is one potential answer, but there is a better way using the [sum of n numbers](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF) and the [sum of n square numbers](https://en.wikipedia.org/wiki/Square_pyramidal_number) formulas. 

```javascript
function sumSquareDifference {
    const sumOfN = ( n * ( n + 1 ) ) / 2;
    const sumOfNSquare = ( n * ( n + 1 ) * ( 2 * n + 1 ) ) / 6;

    return ( sumOfN ** 2 ) - sumOfNSquare;
}

console.assert( sumSquareDifference( 100 ) );
```

</div>
</details>
