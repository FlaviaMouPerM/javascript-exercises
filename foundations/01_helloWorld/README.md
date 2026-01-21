# Exercise 01 - Hello World

The main purpose of this exercise is to walk you through the process of running the tests and make sure everything is set up and running correctly.

In this directory you will find 2 other files:
  1. `helloWorld.js`
  2. `helloWorld.spec.js`

This setup should be similar for all of the exercises. The plain javascript file is where you'll write your code, and the `spec` file contains the tests that verify your code is functional.

Let's look at the spec file first:
```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```
At the very top of the file we use `require()` to import the code from the javascript file (`helloWorld.js`) so that we can test it.

The next block (`describe()`) is the body of the test. Basically, all it's doing is running your code and testing to see if the output is correct. The `test()` function describes what should be happening in plain english and then includes the `expect()` function. For this simple example it should be pretty simple to read.

For now you do not need to worry about how to write tests, but you should try to get comfortable enough with the syntax to figure out what the tests are asking you to do. Go ahead and run the tests by entering `npm test helloWorld.spec.js` in the terminal and watch it fail. The output from that command should tell you exactly what went wrong with your code. In this case, running the `helloWorld()` function should return the phrase 'Hello, World!' but instead it returns an empty string...

so let's look at the javascript file:
```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld
```
In this file we have a simple function called helloWorld that returns an empty string... which is exactly what our test was complaining about. The `module.exports` on the last line is how we export the function so that it can be imported with `require()` in the spec file.

Go ahead and see if you can make the test pass by editing the return value of the function, and then running the test file again.

Just to make sure, in case you're confused at this point, the test is telling you that running the function `helloWorld` should return the phrase `Hello, World!`. Punctuation and capitalization definitely matter here, so double check that if the test still isn't passing.

This is what the final function should look like:
```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld
```

For the most part we've set up these tests in such a way that you only have to update or write the code being tested. You should not have to worry about importing or exporting anything at this stage.. so just work around that bit of the code and write what it takes to make them pass!

---------------------------------

O objetivo principal deste exercício é guiá-lo pelo processo de execução dos testes e garantir que tudo esteja configurado e funcionando corretamente.

Neste diretório, você encontrará outros dois arquivos:

1. `helloWorld.js`

2. `helloWorld.spec.js`

Essa configuração deve ser semelhante para todos os exercícios. O arquivo JavaScript puro é onde você escreverá seu código, e o arquivo `spec` contém os testes que verificam se o seu código está funcionando.

Vamos analisar primeiro o arquivo `spec`:
```javascript
const helloWorld = require('./helloWorld');
});
});

``
No início do arquivo, usamos `require()` para importar o código do arquivo JavaScript (`helloWorld.js`) para que possamos testá-lo.

O bloco seguinte (`describe()`) é o corpo do teste. Basicamente, ele executa o código e verifica se a saída está correta. A função `test()` descreve o que deve acontecer em linguagem simples e, em seguida, inclui a função `expect()`. Para este exemplo simples, deve ser bem fácil de entender.
Por enquanto, você não precisa se preocupar em como escrever testes, mas deve tentar se familiarizar o suficiente com a sintaxe para entender o que os testes estão pedindo para você fazer. Execute os testes digitando `npm test helloWorld.spec.js` no terminal e observe a falha. A saída desse comando deve mostrar exatamente o que deu errado no seu código. Neste caso, a execução da função `helloWorld()` deveria retornar a frase 'Hello, World!', mas em vez disso, retorna uma string vazia...

Então, vamos dar uma olhada no arquivo JavaScript:
```javascript
const helloWorld = function() {

return ''
}

module.exports = helloWorld;
```
Neste arquivo, temos uma função simples chamada helloWorld que retorna uma string vazia... que é exatamente o que nosso teste estava apontando. O `module.exports` na última linha é como exportamos a função para que ela possa ser importada com `require()` no arquivo de especificação.
Faça o teste e veja se consegue aprová-lo editando o valor de retorno da função e executando o arquivo de teste novamente.

Só para garantir, caso ainda esteja confuso, o teste está dizendo que a execução da função `helloWorld` deve retornar a frase `Hello, World!`. A pontuação e o uso de maiúsculas e minúsculas são importantes aqui, então verifique novamente se o teste ainda não estiver passando.

A função final deve ficar assim:
```javascript
const helloWorld = function() {

return 'Hello, World!'

}

module.exports = helloWorld
```

Na maior parte, configuramos esses testes de forma que você só precise atualizar ou escrever o código que está sendo testado. Você não precisa se preocupar com importações ou exportações nesta etapa... então, simplesmente trabalhe nessa parte do código e escreva o que for necessário para que os testes sejam aprovados!