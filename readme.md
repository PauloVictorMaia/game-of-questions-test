## Dev Mobile
Essa aplicação feita com React Native tem como objetivo facilitar o estudo da língua inglesa de maneira dinâmica, por meio de um jogo de perguntas e respostas.
## Feito Com

- [React Native](http://facebook.github.io/react-native/) - versão 0.64.0; O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;

- [React Navigation](https://reactnavigation.org/) - versão ^5.9.3;  O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;

- [react-navigation/stack](https://reactnavigation.org/) - versão ^5.14.3; é o tipo de navegação em pilha do react navigation;

- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - versão ^1.10.3; API declarativa que permite a manipulação de toques e gestos no React Native;

- [Axios](https://github.com/axios/axios) - versão ^0.21.1; O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;

- [Styled-components](https://styled-components.com/) - versão ^5.2.1; é um biblioteca que permite a utilização de estilos ao nível component;

- [react-native-community/async-storage](https://www.npmjs.com/package/@react-native-community/async-storage) - versão ^1.12.1; utilização do async-storage para persistência dos dados;

- [react-native-svg](https://github.com/react-native-svg/react-native-svg) - versão ^12.1.0; possíbilita a renderização de svg no react-native ;

- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) - versão ^0.14.3; possibilita a utilização de svg como component;

- [testing-library/react-native](https://github.com/testing-library/native-testing-library) - versão ^7.2.0; é uma implementação da conhecida API de biblioteca de teste que funciona para React Native;


# Começando
 Para a instalação de todos os pacotes e criação da pasta node-modules. Basta rodar 'npm install' se estiver utilizando npm ou 'yarn' se estiver utilizando o yarn.

# Iniciando a aplicação
 Caso tenha o yarn na sua máquina rode 'yarn android' ou 'yarn ios' ou para rodar com o npx direto da nuvem basta rodar, 'npx react-native run-android' ou 'npx react-native run-ios'.

 caso esteja utilizando um emulador android, como do android studio por exemplo, é importante criar seu arquivo de propriedades locais com a raiz do seu sdk, basta criar o arquivo 'local.properties' dentro da pasta android e colocar a raiz do sdk, 'sdk.dir = dir', sua dir pode ser encontrar nas configurações de sdk do android studio.

 ao termino do build no seu emulador  basta rodar o comando 'yarn start' ou 'npx react-native start'.

 ao abrir a aplicação encontrará a tela inicial, ao clicar em 'Sin In' será direcionado para uma tela com algumas instruções e na próxima tela as categorias de perguntas.

# Melhorias / Próximas features

### construção de uma api própria para consumo das questões, hoje é utilizada uma api pública que apresenta alguns problemas refletindo na necessidade de  soluções paliativas dentro da aplicação.

### desenvolvimento de uma lógica mais complexa para a gerar a ordem de perguntas de maneira mais randomica.
### com o crescimento da aplicação será necessário a implementação de mais testes como testes de login e custom hooks, unitários, functionais..., E2E utilizando o Detox muito provavelmente. 













