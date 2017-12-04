# Teste Prático - Frontend | Mercado Livre

Teste prático para os candidatos ao cargo de frontend no Mercado Livre.

##Visão Geral

Esse projeto foi desenvolvido para atender uma etapa do processo seletivo no Mercado Livre.

##Características

Está dividido em dois diretórios, que representam cada etapa proposta nas espeficicações do teste

### Diretório server.
Foi construido uma API Rest retornando um JSON com os produtos.
O projeto foi desenvolvido usando Node e Express.

### Quickstart

Iniciar o projeto ( dentro do diretório server )
> $ npm install

Iniciar o servidor
> $ node server.js

### Rotas
> http://localhost:3001/api - Apresentação;
> http://localhost:3001/api/items?q=exemplo - Resultado de busca;
> http://localhost:3001/api/items/MLA648219886 - Detalhes do produto selecionado.



A conexão deverá ser estabelecida na porta 3001. Acesse: http://localhost:3001.

### Diretório client.
Foi construido uma pequena aplicação, se constitui de três componentes principais: O campo de busca, a visualização de resultados e a descrição do detalhe do produto.
As informações são consumidas pelo API que se encontra no diretório server.

O projeto foi desenvolvido usando HTML5, React, e  Sass.

Iniciar o projeto ( dentro do diretório client )
> $ npm install

Em seguinda a página deverá ser carregada em seu browser (http://localhost:3000).

### Rotas
> http://localhost:3000/ - Home;
> http://localhost:3000/items?q=exemplo - Resultado de busca;
> http://localhost:3000/item/MLA648219886 - Detalhes do produto.
