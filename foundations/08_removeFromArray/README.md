# Exercise 08 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array, and returns the resulting array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

See if you can make use of some built-in array methods in this exercise.

## Hints

The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

- you can manipulate the original array you pass into the function call or create a new array that is returned as the result, but the function should return the resulting array regardless of the approach.
- how to remove a single element from an array
- how to deal with multiple optional arguments in a JavaScript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

----------------------------

# Exercício 08 - removerDoArray

Implemente uma função que receba um array e alguns outros argumentos, remova os outros argumentos desse array e retorne o array resultante:

```javascript
removeFromArray([1, 2, 3, 4], 3); // deve remover 3 e retornar [1,2,4]
```

Veja se você consegue usar alguns métodos nativos de arrays neste exercício.

## Dicas

O primeiro teste é relativamente fácil, mas há alguns pontos a considerar (ou pesquisar no Google) para os testes seguintes:

- Você pode manipular o array original passado para a função ou criar um novo array que será retornado como resultado, mas a função deve retornar o array resultante independentemente da abordagem.

- Como remover um único elemento de um array?
- Como lidar com múltiplos argumentos opcionais em uma função JavaScript?
- Para mais informações, consulte a página da MDN sobre [argumentos de função](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - role a página até a seção sobre `Array.from` ou o operador spread. Você também pode consultar a página da MDN sobre [parâmetros rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).