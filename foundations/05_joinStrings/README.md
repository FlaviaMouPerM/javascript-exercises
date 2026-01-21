54# Exercise 05 - joinStrings

## Step 1: Learn
First, look at the example code in `joinStrings-example.js`. Try and predict what the `console.log` output will be. When you're ready, run the test:
```bash
npm test joinStrings-example.spec.js
```
If you saw anything unexpected, feel free to review the code again.

## Step 2: Do
After understanding the example code, you will recreate the snippet on your own using the following instructions (in `joinStrings.js`):

1. Create 4 variables: `firstName`, `lastName`, `thisYear`, and `birthYear`

2. Create a 5th variable, `greeting`, that is constructed from the previous 4 variables
- It should contain a greeting that includes the person's full name and age

Note: To make the tests pass, you will need to use exact values and wording (as you will see described in `joinStrings.js`). If the tests fail, look at the feedback in your terminal then check your spacing, capitalization, and punctuation.

## Step 3: Optimize
You will edit your code to make it easier to read using the following instructions:

1. Create 2 new variables: `fullName` and `age`
- Do NOT simply type the full name and age into the new variables
- Instead, use the pre-existing variables, with the calculations that are currently inside of `greeting`

2. Edit the `greeting` string to use `fullName` and `age` instead of the other 4 variables
- `greeting` should look something like:
```js
"Hello! My name is " + fullName
```

Run all the tests one last time to ensure that the output remains unchanged:
```bash
npm test joinStrings.spec.js
```

## Hints

- Look at the docs for JavaScript variables for a quick reference.

- Refer back to the [Variables and Operators lesson](https://www.theodinproject.com/lessons/foundations-variables-and-operators) if you are still stuck.

-------------------------------

# Exercício 05 - joinStrings

## Passo 1: Aprenda
Primeiro, observe o código de exemplo em `joinStrings-example.js`. Tente prever qual será a saída de `console.log`. Quando estiver pronto, execute o teste:
```bash
npm test joinStrings-example.spec.js
```
Se você observar algo inesperado, sinta-se à vontade para revisar o código novamente.

## Passo 2: Faça
Após entender o código de exemplo, você recriará o trecho por conta própria seguindo as instruções abaixo (em `joinStrings.js`):

1. Crie 4 variáveis: `firstName`, `lastName`, `thisYear` e `birthYear`

2. Crie uma 5ª variável, `greeting`, que seja construída a partir das 4 variáveis ​​anteriores.
- Ela deve conter uma saudação que inclua o nome completo e a idade da pessoa.

Observação: Para que os testes sejam aprovados, você precisará usar os valores e a redação exatos (como descrito em `joinStrings.js`). Se os testes falharem, verifique o feedback no seu terminal e, em seguida, verifique o espaçamento, as maiúsculas e a pontuação.

## Etapa 3: Otimizar
Você editará seu código para torná-lo mais fácil de ler, seguindo estas instruções:

1. Crie 2 novas variáveis: `fullName` e `age`
- NÃO digite simplesmente o nome completo e a idade nas novas variáveis
- Em vez disso, use as variáveis ​​preexistentes, com os cálculos que estão atualmente dentro de `greeting`

2. Edite a string `greeting` para usar `fullName` e `age` em vez das outras 4 variáveis
- `greeting` deve ficar assim:
```js
"Olá! Meu nome é " + fullName
```

Execute todos os testes mais uma vez para garantir que a saída permaneça inalterada:
```bash
"npm test joinStrings.spec.js"
```
## Dicas

- Consulte a documentação sobre variáveis ​​em JavaScript para uma referência rápida.

- Se ainda tiver dúvidas, volte à lição [Variáveis ​​e Operadores](https://www.theodinproject.com/lessons/foundations-variables-and-operators).