# Posicionamento

## Static
Default de todos os elementos

## Relative
Libera outras quatro propriedades:
* top
* bottom
* left
* right

E quando se usa um valor nelas:

    left: 30px;

O elemento irá se movimentar 30 pixels para a direita. Força vinda da esquerda que empurra o elemento baseado na posição original.

## Absolute

Ele passa a ter seu próprio fluxo de posicionamento, ele vai pra onde você quiser.

Vai para qualquer lugar que você quiser. É como se sumisse para os outros elementos. E ficasse delimitado apenas entre o conteiner com `position: relative;` que o abriga, se não tem nada o body, vai se posicionar em relação ao conteiner com posição diferente de static.

    bottom: 0px;

## Fixed
Fixado no mesmo lugar, não se importando com o quando você rolar o mouse.

**Propriedades:**
* top
* bottom
* left
* right

## Sticky

"Grudento"

Vai grudar no no pixel que você colocar, troca de static para fixo. Só cuidado com a compatibilidade com o browser.
