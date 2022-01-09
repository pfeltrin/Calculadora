function insert(num) //função para inserção dos valores numericos
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean() // função para apagar todo conteúdo do resultado
{
    document.getElementById('resultado').innerHTML = "";
}
function back() //função para apagar apenas o último número de cada vez
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); 
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado); //eval é responsável por fazer os cálculos
    }
    else{
        document.getElementById('resultado').innerHTML = "nada..."
    }
}