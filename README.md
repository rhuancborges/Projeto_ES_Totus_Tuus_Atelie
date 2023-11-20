# Projeto - Totus Tuus Ateliê

<p align="center"> Projeto Final da disciplina de Engenharia de Software - Universidade Federal de Lavras </p>

Integrantes: `Gustavo Biaso Dias Pinto, João Pedro Nogueira Lucas, Rhuan Campideli Borges`

## Tabela de Opções

- [Visão Geral](#visao-geral)
- [Tecnologias Utilizadas](#tecnologias)
- [Regras e Padrões de uso do Git](#regras-padroes)
- [Diretórios do Repositório](#diretorios)

## Visão Geral

<a name="visao-geral"></a>

O Totus Tuus Ateliê é uma loja de artesanatos e artigos religiosos. O desenvolvimento do software proposto visa suprir as demandas da administração da loja, no que diz respeito à gestão de vendas, pessoas e estoque. 

### Principais Funcionalidades:
- Relatório de Vendas;
- Relatório de Itens Pedidos;
- Relatório de Produtos;
- Relatório de Clientes;
- Cadastro/Alteração/Exclusão de Itens Pedidos;
- Cadastro/Alteração/Exclusão de Produtos;
  - Consulta de Produtos a partir do nome;
- Cadastro/Alteração/Exclusão de Vendas;
  - Consulta de Vendas a partir de nome de Cliente associado;
- Cadastro/Alteração/Exclusão de Clientes;

### Tipos de Usuários

O sistema contará com um único usuário: o administrador do Ateliê, uma vez que o software será para apenas de uso em gerência, na gestão de estoque e vendas.

## Tecnologias Utilizadas

<a name="tecnologias"></a>

- NodeJs
- AdonisJs
- React
- HTML
- CSS
- MySQL

OBS: As versões de cada tecnologia serão definidas mais tarde

## Regras e Padrões de uso do Git

<a name="regras-padroes"></a>

- Escrever mensagens de commits em Língua Portuguesa (Brasil);
- Utilizar gerúndio na construção da mensagem de um commit:
  - Ex: "Adicionando funcionalidade X"; "Atualizando funcionalidade Y"...
- Associar cada unidade de alteração a um único commit, de modo que cada mensagem de commit explicite bem as mudanças realizadas;
- Quando necessário, incluir a palavra-chave "Close #? ..." na mensagem do commit para associá-lo ao fechamento de issue(s);
- Manter uma separação de diretórios, isolando documentação do software de sua implementação;
- Fazer o uso de branches para o desenvolvimento de novas funcionalidades;
- Nomear uma branch conforme modelo: "[frontend/backend] - [funcionalidade]".

## Diretórios do Repositório

<a name="diretorios"></a>

### BackEnd
Nesse diretório, estão contidos os arquivos e programas relacionados à implementação do backend do projeto.

### Frontend
Nesse diretório, estão contidos os arquivos e programas relacionados à implementação do frontend do projeto

### Padrões Adotados
Nesse diretório, estão contidos os documentos que especificam as regras e padrões do projeto, tais como regras de definição de requisitos, regras de uso do Git, padrões de codificação, etc.

### Requisitos
Nesse diretório, estão contidos os documentos relacionados ao planejamento e projeto do sistema, tais como documento de requisitos, diagrama de banco de dados, diagrama de sequência, diagrama de classes, diagrama de infraestrutura, etc.
