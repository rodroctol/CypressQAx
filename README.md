# CypressQAx
Cypress automation test training by Fernando Papito

Para que esta automação funcione corretamente, é preciso que a versão 12.2.0 do Cypress esteja instalada.
Quanto à versão node.js, deve ser a de numero 18 ou do contrário a API de teste não funcionará corretamente.

para inicializar a API do teste, deve-se utilizar os seguintes comandos abaixo:
    - selecione o diretorio da API;
    - ainda no terminal dentro do diretorio correto, lance o comando: 'npm run db:init' (isto irá criar um db para testes);
    - depois disso entrar com o comando: 'npm run dev' (agora irá aparecer um msg que o app está no ar);

para inicializar a web de teste, basta estar no diretorio de web e entrar com o comando: 'npm run dev'

concluido os 2 passos acima, para incializar a API o app Web, abrir uma nova aba no browser com o endereço: 
    - http://localhost:3000

A partir desse momento tanto a API quanto o Web App estarão funcionando.

Problemas com a faker lib foram resolvidos com a inclusão das libs babel e update do Cypress para V.13 ou maior.
    - cmd para inclusão da faker lib: npm install @faker-js/faker --save-dev
    - cmd para inclusão de babel lib: npm install babel-loader @babel/core @babel/preset-env --save-dev
    - não ocorreu uma inclusão automática da dev dependence webpack.config.js dentro do package.json portanto deve-se criar uma para funcionar

    
