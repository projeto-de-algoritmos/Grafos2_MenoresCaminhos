function valor_no(no) {
    return parseInt(no.match(/\d+/)[0]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function resetar_caminho() {
    d3.selectAll('circle')
        .attr("fill", "black");
    d3.selectAll('line')
        .attr("fill", "green")
        .attr("stroke", "green");
    document.getElementById('caminho').innerHTML = 'Caminho percorrido: ';
    document.getElementById('distancia').innerHTML = 'Distancia entre nós: '
}

function cria_options(select, numero_nos) {
    for (var i = 0; i<numero_nos; i++){
        var opt = document.createElement('option');
        opt.value = 'No'+i;
        opt.innerHTML = 'Nó '+i;
        select.appendChild(opt);
    }
}

function preenche_select(numero_nos) {
    origem = document.getElementById('origem');
    reseta_select(origem);
    cria_options(origem, numero_nos)
    destino = document.getElementById('destino');
    reseta_select(destino);
    cria_options(destino, numero_nos)
}

function reseta_select(select) {
    var aux = select[0]
    select.innerHTML = '';
    select.appendChild(aux);
}
 
function resetar_grafo() {
    d3.selectAll("svg > *").remove();
}