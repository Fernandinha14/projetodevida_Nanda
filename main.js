const botoes= document.queryselectorAll (".botao");
const botoes= document.queryselectorAll (".aba-conteudo");

for (let i=0; i <botoes.length; i++) {

    botoes [i]. onclik=function ()  {

        for (let j=0; j <botoes.length; j++) {
            botoes[j] .classlist.remove("ativo");
            textos[j] .classlist.remove("ativo");
    }
    botoes[i] .classlist.add("ativo");
    textos[i] .classlist.add("ativo");
    }
}
