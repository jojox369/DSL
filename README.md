Olá e sejam bem-vindos!

A Digital List tem como objetivo ajudar as pessoas no cotidiano com as suas compras no supermercado. O intuito do app é que sirva de lista, para anotar tudo aquilo que é preciso comprar e também ajude na hora de somar e ver quanto as compras irá custar.
A Digital List também serviu como forma de avaliação da disciplina de Desenvolvimento de Aplicações moveis, no segundo semestre do ano de 2020. O App foi criado com React Native e consome os dados de uma <a href="https://github.com/jojox369/Digital-List-Api" >Api</a> construida em NodeJs e o seu banco de dados é o MySQL.

Ao abrir o App, você ira se deparar com a tela de login:


<img src="https://github.com/jojox369/dl-images/blob/main/login.jpg"  height="500"  >

Caso ainda não poussa uma conta, basta clicar no "Cadastrar-se" e a tela de cadastro irá se abrir:

<img src="https://github.com/jojox369/dl-images/blob/main/register.jpg"  height="500"  >

Ao clicar no botão de cadastrar-se, uma messagem será exibida e você será automaticamente redirecionado pra tela home, que mostra todas as listas que o usuario possui. Ao entrar na home, caso o usuario não possua uma lista, ele irá exibir uma messagem informando que o usuario nao possui uma lista:

<img src="https://github.com/jojox369/dl-images/blob/main/new%20user%20message.jpg" align="left" height="500"  >
<img src="https://github.com/jojox369/dl-images/blob/main/no%20list%20message.jpg" height="500"  >

Para criar uma nova lista, basta apertar o icone de "+" na tab bar, que irá abrir a tela de cadastro de lista:

<img src="https://github.com/jojox369/dl-images/blob/main/new%20list.jpg" height="500"  >

Para criar uma lista, é necessario que ela tenha um nome e pelo menos um produto adicionado nela. Caso tente finalizar a lista sem qualquer um dos dois, ele ira exibir mensagens:

<img src="https://github.com/jojox369/dl-images/blob/main/insert%20list%20name%20message.jpg" align="left" height="500"  >
<img src="https://github.com/jojox369/dl-images/blob/main/insert%20product%20message.jpg" height="500"  >

Para adicionar o nome da lista e para adicionar um produto, basta apertar o botão arredondado. Na primeira vez que for apertado, ele irá pedir o nome da lista:

<img src="https://github.com/jojox369/dl-images/blob/main/name%20list%20modal.jpg" height="500"  >

Na segunda vez, ele ira mostrar a lista de produtos cadastras no banco de dados da Digital List. O banco possui os itens mais comuns e utilizados no dia a dia: 

<img src="https://github.com/jojox369/dl-images/blob/main/list%20of%20product%20modal.jpg" height="500"  >

Você pode pesquisar o item usando o campo de pesquisa e para adicionar o item na lista, basta apertar em cima do produto desejado e automaticamente ele irá sera adicionado na lista:

<img src="https://github.com/jojox369/dl-images/blob/main/search%20product%20modal.jpg" height="500"  >

Para fechar o a lista de produtos, basta apertar o "x" na parte superior direita. Essa será a tela da lista com itens adicionados:

<img src="https://github.com/jojox369/dl-images/blob/main/list%20with%20product.jpg" height="500"  >

Para finalizar a lista, basta apertar o botão na parte superior direita "finalizar lista". Ele irá exibir uma mesagem quando a lista for criada: 

<img src="https://github.com/jojox369/dl-images/blob/main/new%20list%20created%20message.jpg" height="500"  >

Você sera automaticamente redirecionado para a pagina de home, que ira atualizar-se com a nova lista inserida:

<img src="https://github.com/jojox369/dl-images/blob/main/home%20with%20list.jpg" height="500"  >

Ao pressionar por alguns segundos qualquer lista, ira aparecer algumas opções para o usuario: 

<img src="https://github.com/jojox369/dl-images/blob/main/list%20option.jpg" height="500"  >

Ao clicar em editar lista, sera exibida uma tela com todos os itens da lista do usuario e tbm com os campos para inserção de quantidade de itens pega e o preço unitario do item:

<img src="https://github.com/jojox369/dl-images/blob/main/editing%20list.jpg" height="500"  >

É possivel adicionar um novo item a lista, e conforme o usuario vai preenchendo os campos o valor total da lista e o valor total de cada item também é atualizado. Para adicionar um novo item, basta apertar o botão central com um "+" na parte superior do app:

<img src="https://github.com/jojox369/dl-images/blob/main/editing%20list%20and%20add%20new%20product.jpg" align="left" height="500"  >
<img src="https://github.com/jojox369/dl-images/blob/main/editing%20fields%20of%20products.jpg" height="500"  >

Para finalizar a edição, basta apertar o botão esquerdo com o sinal de "check" na parte superior do app. Uma mensagem será exibida informado que a lista foi atualizada: 

<img src="https://github.com/jojox369/dl-images/blob/main/finish%20editing%20message.jpg" height="500"  >

A pagina home também irá ser atualizada e mostrara o total da lista:

<img src="https://github.com/jojox369/dl-images/blob/main/show%20home%20updated.jpg" height="500"  >

Voltando as opções da lista, caso o usuario aperte o botão de excluir o item, uma confirmação será exibida: 

<img src="https://github.com/jojox369/dl-images/blob/main/show%20confirm%20modal%20delete%20list.jpg" height="500"  >

Caso o usuario aperte o botão sim, uma mensagem será exibida informando que a lista foi excluida e a pagina home será atualizada:

<img src="https://github.com/jojox369/dl-images/blob/main/show%20message%20list%20has%20deleted.jpg" align="left" height="500"  >

<img src="https://github.com/jojox369/dl-images/blob/main/no%20list%20message.jpg"  height="500"  >










