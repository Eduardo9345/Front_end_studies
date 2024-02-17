# Modelos de caixa
A tag `<div>` em HTML é como uma caixa que você pode colocar em volta de outros elementos HTML para organizá-los. É como se fosse uma divisória ou um contêiner onde você pode agrupar diferentes partes do conteúdo da sua página da web.

Imagine que você está arrumando suas coisas em uma caixa grande. Dentro dessa caixa, você pode ter várias outras caixas menores para separar e organizar seus itens. A tag `<div>` funciona assim na estrutura de uma página da web.

Por exemplo:

```html
<div class="header">
    <h1>Meu Site</h1>
    <p>Este é o cabeçalho da minha página.</p>
</div>

<div class="main-content">
    <h2>Artigos</h2>
    <p>Aqui estão os artigos do meu site.</p>
    <!-- ...mais conteúdo... -->
</div>

<div class="footer">
    <p>Rodapé da página.</p>
</div>
```

Neste caso, temos três `<div>`: um para o cabeçalho (`<div class="header">`), outro para o conteúdo principal (`<div class="main-content">`) e um terceiro para o rodapé (`<div class="footer">`). Cada `<div>` agrupa e separa visualmente diferentes partes da página.

Depois, usando o CSS (Cascading Style Sheets), é possível estilizar essas divisões (`<div>`) para mudar cores, tamanhos, posições na página e muito mais, ajudando a criar um layout visualmente agradável e bem estruturado para seu site.

# Elementos flutuantes

Propriedade float
`Syntax: left | right | none | inline-start | inline-end`

Elementos flutuantes em HTML e CSS são usados para posicionar um elemento fora do fluxo normal do documento, permitindo que outros elementos sejam posicionados ao lado dele. Geralmente, são utilizados para criar layouts de várias colunas ou para alinhar elementos lado a lado.

### Propriedade CSS `float`:
- **Sintaxe:** `float: left | right | none;`
- `left`: O elemento flutua para o lado esquerdo.
- `right`: O elemento flutua para o lado direito.
- `none`: O elemento não flutua e fica no fluxo normal do documento.

### Comportamento dos elementos flutuantes:
- Quando um elemento é definido como flutuante (`float: left;` ou `float: right;`), ele se move para o lado especificado e outros elementos subsequentes tendem a se posicionar ao redor dele.
- Os elementos que seguem um elemento flutuante podem se alinhar ao lado esquerdo ou direito desse elemento, dependendo da direção especificada pelo `float`.
- Os elementos subsequentes podem não ocupar o espaço ocupado pelo elemento flutuante, resultando em um layout onde outros elementos se ajustam ao seu redor.
- É importante lidar com a limpeza das flutuações para evitar que elementos indesejados sejam afetados por flutuações anteriores.

### Uso comum:
- **Layouts de colunas:** Ao flutuar elementos como `<div>`s para a esquerda ou direita, é possível criar um layout de várias colunas em uma página.
- **Alinhamento de imagens:** Flutuar imagens para a esquerda ou direita permite que o texto flua ao redor delas, criando um layout mais atraente.
- **Menus ou barras de navegação:** É comum flutuar itens de menu para criar barras de navegação horizontal.

### Exemplo básico de uso de flutuação:

HTML:

```html
<div class="container">
    <div class="left">Conteúdo à esquerda</div>
    <div class="right">Conteúdo à direita</div>
    <div class="clear"></div> <!-- Limpeza da flutuação -->
</div>
```

CSS:

```css
.left {
    float: left;
    width: 50%; /* 50% da largura para criar um layout de duas colunas */
}

.right {
    float: right;
    width: 50%;
}

.clear {
    clear: both; /* Limpa as flutuações anteriores */
}
```

No exemplo acima, dois elementos estão flutuando para a esquerda e direita dentro de um contêiner. O elemento `<div class="clear"></div>` é usado para limpar as flutuações anteriores e garantir que nenhum outro elemento seja afetado por essas flutuações.

A propriedade `clear` em CSS é usada para controlar o comportamento de um elemento em relação a elementos flutuantes. Ela define se um elemento deve se posicionar ao lado de elementos flutuantes anteriores ou se deve ser movido abaixo deles.

- `clear: left;`: O elemento não será posicionado ao lado de elementos flutuantes à esquerda.
- `clear: right;`: O elemento não será posicionado ao lado de elementos flutuantes à direita.
- `clear: both;`: O elemento não será posicionado ao lado de nenhum elemento flutuante, seja à esquerda ou à direita. Ele será movido abaixo de qualquer elemento flutuante.

Isso é especialmente útil quando há elementos flutuantes que estão impactando o layout de outros elementos. A propriedade `clear` permite que um elemento seja posicionado abaixo de outros elementos flutuantes, independentemente do lado em que eles estão flutuando.

Exemplo:

```html
<div style="float: left; width: 100px; height: 100px; background-color: red;"></div>
<div style="float: right; width: 100px; height: 100px; background-color: blue;"></div>
<div style="clear: both; height: 100px; background-color: yellow;">
    <!-- Este elemento não ficará ao lado dos elementos flutuantes -->
</div>
```

Neste exemplo, dois elementos estão flutuando para a esquerda e para a direita, respectivamente, e o terceiro elemento usa `clear: both` para garantir que ele não se posicione ao lado de nenhum elemento flutuante e fique abaixo deles.

# Elementos Bloco

Em HTML e CSS, existem três tipos principais de elementos: elementos de bloco (block), elementos em linha (inline) e elementos de bloco em linha (inline-block). Cada tipo tem suas próprias características de exibição e comportamento no layout da página.

### 1. Elementos de Bloco (`display: block;`):

- **Características:**
  - Por padrão, ocupam toda a largura disponível e começam em uma nova linha.
  - Permitem definir largura, altura, margens, preenchimento e alinhamento vertical/horizontal.
  - Exemplos comuns: `<div>`, `<p>`, `<h1>` a `<h6>`, `<form>`, `<ul>`, `<ol>`, `<header>`, `<footer>`, `<section>`, etc.

### 2. Elementos em Linha (`display: inline;`):

- **Características:**
  - Ocupam apenas o espaço necessário dentro do conteúdo.
  - Não aceitam largura, altura, margens superior ou inferior, apenas margens esquerda e direita.
  - Não quebram a linha naturalmente e ficam ao lado de outros elementos em linha.
  - Exemplos comuns: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<b>`, `<i>`, etc.

### 3. Elementos de Bloco em Linha (`display: inline-block;`):

- **Características:**
  - Combina propriedades de elementos de bloco e em linha.
  - Ocupa apenas o espaço necessário, mas permite definir largura, altura, margens, preenchimento, etc.
  - Permite o fluxo de elementos adjacentes em linha e ao mesmo tempo aceita propriedades de blocos.
  - Exemplos comuns: Elementos que você deseja exibir lado a lado, mas que precisam de algumas propriedades de bloco, como `<input>`, `<button>`, `<textarea>`, etc.

### Exemplo de uso:

```html
<div class="bloco">Bloco</div>
<span class="inline">Em Linha</span>
<input type="text" class="inline-block" value="Inline-Block">
```

```css
.bloco {
    display: block;
    width: 200px;
    height: 100px;
    background-color: blue;
}

.inline {
    display: inline;
    color: red;
}

.inline-block {
    display: inline-block;
    width: 150px;
    height: 30px;
    background-color: green;
}
```

Neste exemplo, a `<div>` é um elemento de bloco que ocupa a largura total, o `<span>` é um elemento em linha e o `<input>` é um elemento de bloco em linha que aceita largura e altura. Cada tipo de elemento tem seu próprio comportamento de layout padrão e é útil para diferentes situações de design na construção de páginas web.

# Span
Se você estava tentando mencionar o elemento `<span>`, ele é um elemento HTML em linha usado para marcar uma parte do texto ou conteúdo dentro de um documento HTML sem quebrar a linha.

O `<span>` não tem uma formatação ou significado próprio, mas pode ser estilizado com CSS e usado em conjunto com JavaScript para aplicar estilos ou manipular o conteúdo de maneira mais específica. Ele é útil para aplicar estilos a partes específicas do texto, criar seleções para processos de script ou definir áreas de texto com um propósito específico.

Exemplo de uso do `<span>`:

```html
<p>Este é um texto com <span style="color: red;">uma parte em vermelho</span>.</p>
```

Nesse exemplo, o `<span>` é usado para envolver a parte do texto que deve aparecer em vermelho. O atributo `style="color: red;"` é aplicado ao `<span>` para alterar a cor do texto contido dentro dele.

O `<span>` é frequentemente usado em conjunto com CSS para aplicar estilos específicos a partes menores do texto ou conteúdo dentro de um documento HTML.
