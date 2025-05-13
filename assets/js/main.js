// exercicio pede que eu percorra os paragrafos utilizando javascript e mude algumas informaçoes como cor do background e da letra

const paragrafos = document.querySelector(".paragrafos"); //selecionei a classe paragrafos do html
const ps = document.querySelectorAll("p"); //aqui eu selecionei todos os paragrafos existentes no documento html

const estilosBody = getComputedStyle(document.body); //aqui eu selecionei todos os estilos contidos no body através do metodo 'getComputedStyle(document.body)'
const backgroundColorBody = estilosBody.backgroundColor; // Aqui eu selecionei apenas o estilo que eu queria 'estilosBody.backgroundColor'
console.log(backgroundColorBody); //aqui foi só para exibir e testar se estava funcionando

//O 'for of' percorreu todos os p selecionados pela 'const ps' e enquanto fazia isso, mudava as informaçoes de estilos das tag e do conteúdo
for (let p of ps) {
  p.style.color = "#FFFFFF"; //aqui muda a letra para branco
  p.style.backgroundColor = backgroundColorBody; //aqui muda o background do 'p' para a cor que foi selecionada na 'const backgroundColorBody'
}
