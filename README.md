# Resenha
Plataforma aberta de divulgação de Eventos.

<a href="https://github.com/open-markets/resenha/stargazers"><img src="https://img.shields.io/github/stars/open-markets/resenha" alt="Stars Badge"/></a>
<a href="https://github.com/open-markets/resenha/network/members"><img src="https://img.shields.io/github/forks/open-markets/resenha" alt="Forks Badge"/></a>
<a href="https://github.com/open-markets/resenha/pulls"><img src="https://img.shields.io/github/issues-pr/open-markets/resenha" alt="Pull Requests Badge"/></a>
<a href="https://github.com/open-markets/resenha/issues"><img src="https://img.shields.io/github/issues/open-markets/resenha" alt="Issues Badge"/></a>
<a href="https://github.com/open-markets/resenha/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/open-markets/resenha?color=2b9348"></a>
<a href="https://github.com/open-markets/resenha/blob/master/LICENSE"><img src="https://img.shields.io/github/license/open-markets/resenha?color=2b9348" alt="License Badge"/></a>

---

<!-- vscode-markdown-toc -->
* 1. [Download](#Download)
* 2. [Sobre o Projeto](#SobreoProjeto)
* 3. [Estrutura](#Estrutura)
* 4. [Como Contribuir](#ComoContribuir)
		* 4.1. [Eu sou um Produtor de Eventos](#EusouumProdutordeEventos)
		* 4.2. [Eu sou um Usuário do App](#EusouumUsuriodoApp)
		* 4.3. [Eu sou um Desenvolvedor](#EusouumDesenvolvedor)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Download'></a>Download


| 📱**Resenha** || 📱**Resenha Editor** |
|:-------------:|-|:--------------------:|
| [<img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white" height="20">](https://play.google.com/store/apps/details?id=io.resenha) [<img src="https://img.shields.io/badge/F%20Droid-1976D2?style=for-the-badge&logo=f-droid&logoColor=white" height="20">](https://f-droid.org/packages/io.resenha/) [<img src="https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white" height="20">](https://itunes.apple.com/us/app/resenha/id1234)| ◇ | [<img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white" height="20">](https://play.google.com/store/apps/details?id=io.resenha) [<img src="https://img.shields.io/badge/F%20Droid-1976D2?style=for-the-badge&logo=f-droid&logoColor=white" height="20">](https://f-droid.org/packages/io.resenha/) [<img src="https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white" height="20">](https://itunes.apple.com/us/app/resenha/id1234) |


##  2. <a name='SobreoProjeto'></a>Sobre o Projeto

`Resenha` é um projeto de código livre (_open source_) que oferece uma plataforma decentralizada - sem intermediários e sem custos - para a divulgação de eventos.

> Com a proliferação dos muros na internet centralizada o acesso à informação tem voltado ao status de privilégio, não direito, desfazendo décadas de avanço civilizatório. Isso se reflete em nossas necessidades mais básicas, como a vontade inerente de ser humano entre outros humanos, hoje guiada por recomendações esdrúxulas que maximizam estatísticas de um slide passando em algum escritório alugado.
>
> Nós acreditamos que uma internet decentralizada, que se sustenta nas estruturas de convívio humanas anteriores à sua existência - ao invés de tentar substituí-las - é um caminho mais benéfico para o avanço da sociedade do que o que se desenha atualmente.
>
> Acreditamos também que essa internet é possível com a tecnologia atual, amplamente à disposição das pessoas, e que basta uma ação conjunta para criar a camada de software necessária para que nós, seres humanos, possamos voltar a interagir sem o intermédio de grandes corporações.


Existem 5 frentes de desenvolvimento:

- `OEF (Open Events Format)`: _OEF_ é um formato de dados JSON para a descrição de "Eventos". Esse formato permite a intercomunicação entre diferentes aplicações, inclusive externas ao projeto _resenha_.
- `App Resenha`: Um aplicativo mobile (iOS/Android) que permite a visualização de _Eventos_ (OEF). Os _eventos_ são adquiridos de _Agendas_ - links que apontam para um JSON com uma lista de eventos. Tais agendas são criáveis por qualquer pessoa ou entidade e compartilháveis via P2P.
- `App Resenha (Editor)`: Um aplicativo web e mobile (iOS/Android) que permite a edição de _Agendas_. O aplicativo manipula a _agenda_ localmente, e pode importar/exportar de/para diversos serviços de hosting.
- _[futuro]_ ~~`Algoritmo de Recomendação`: Um algoritmo aberto de recomendação, baseado em LLMs que rodam diretamente na máquina do usuário para máxima privacidade, customizável e limitado pelas _agendas_ importadas.~~
- _[futuro]_ ~~`Tracker`: Uma central de _agendas_ com integrações (bots) em diferentes redes sociais para facilitar o compartilhamento de agendas.~~

##  3. <a name='Estrutura'></a>Estrutura

Esse repositório é um _mono-repo_ contendo todo o código relacionado ao `resenha`, que se divide nos seguintes pacotes:

- `oef`: Definições de tipo e validadores do `OEF` em linguagens relevantes para o projeto
- `app`: Aplicação Mobile em Vue3+Vuetify
- `app_editor`: Aplicação Web/Mobile em Vue3+Vuetify
- `fofoca`: Pacote NPM do algoritmo de recomendação, contendo uma LLM in-browser (WebASM) e uma camada de integração com OEF.
- `tracker`: Aplicação Node + Web/Mobile em Vue3+Vuetify e bots para integração com redes sociais.
- `common`: Biblioteca de componentes Vue3 utilizados por diferentes aplicações do projeto.

Cada pasta possui um README com instruções de como rodar o ambiente de desenvolvimento localmente.

##  4. <a name='ComoContribuir'></a>Como Contribuir

####  4.1. <a name='EusouumProdutordeEventos'></a>Eu sou um Produtor de Eventos

- Crie e publique a sua agenda utilizando o App [Resenha Editor](#📱resenha-editor), e compartilhe o link e/ou QRCode em seus eventos e através das redes sociais.
- Entre em contato com outros produtores da sua região para criar um _tracker_ associado a contas de rede social desse grupo, uma ferramenta robusta e moderna de divulgação, totalmente sob seu controle.

####  4.2. <a name='EusouumUsuriodoApp'></a>Eu sou um Usuário do App

- Caso encontre um erro, abra uma [issue]((https://github.com/open-markets/resenha/issues)) com a descrição completa de como reproduzi-lo, e colabore na investigação desse problema quando solicitado.

####  4.3. <a name='EusouumDesenvolvedor'></a>Eu sou um Desenvolvedor

- Confira as [issues abertas](https://github.com/open-markets/resenha/issues) para ajudar na investigação e solução de bugs.
- Confira o [ROADMAP](https://github.com/open-markets/resenha/wiki/ROADMAP), caso encontre uma feature que tem interesse em fazer, siga os passos a seguir:
    1. Crie uma [issue]((https://github.com/open-markets/resenha/issues)) com o label `type: contrib` informando que vai começar a trabalhar na feature. (Confira antes se já não foi iniciado por alguém.)
    2. Crie um [fork](https://github.com/open-markets/resenha/fork) do repositório na sua conta local (caso ainda não possua).
    3. Crie uma _branch_ chamada `feature-x-y-z` (_tente_ evitar mais de 3 termos), por ex: `feature-calendar-edit`.
    4. Desenvolva localmente nessa branch. Quando estiver pronto, siga o _checklist de contribuição_ do README de cada projeto alterado.
    5. Abra um _pull request_ do seu _fork_ para o repositório principal, na branch `dev`. Na descrição desse _pull request_, inclua o número da issue que criou no passo 1, por ex: `#12`.
    6. Adicione o label `state: review` na issue.
    7. Aguarde o review de outros desenvolvedores e permaneça aberto a feedbacks e solicitações _razoáveis_ de alteração.
    8. Quando aprovado, faça o merge para o repositório principal.
    9. Remova o label `state: review` da issue, e feche como resolvida.


