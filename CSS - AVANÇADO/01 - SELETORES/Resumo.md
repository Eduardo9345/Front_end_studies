# Seletores

## UNIVERSAL

### *{}

Alterações se aplicam a todos os elementos da página.

## DE TEXTO
### h1, h2, h3{}

Seleciona elementos pelo tipo

## DE CLASSE
### .classe{}

Seleciona um elemento cujo o atributo class tem como valor o especificado depois do ponto

## DE ID
### #id{}

Seleciona um elemento cujo o atributo id tem como valor o especificado depois do Hashtag. Só pode ser usado em um elemento apenas.

## DE FILHO

### li>a{}
Indica que um elemento é filho de outro, seleciona todos os elemento `<a>` que são filhos de `<li>`.

## DE DESCENDENTE

### p a {}
Seleciona um elemento que é descendente de outro, não apenas filho direto

## DE IRMÃO ADJACENTE

### h1+p {}
Seleciona o próximo/primeiro elemento `<p>` logo depois de `<h1>`, não todos os `<p>`
## DE IRMÃO GERAL

### h1~p {}
Seleciona um elemento que é um irmão de outro, embora ele não precise ser o elemento diretamente precedente