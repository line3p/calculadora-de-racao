$("#calcular").click(calculaRacao);

function calculaRacao(){
    var nomeCachorro = $("#nome").val();
    var pesoCao = $("#peso").val();
    if ($("#miniatura").is(':checked')){
        var calculo = (7 * pesoCao)/100;
        alert(nomeCachorro+" precisa comer "+calculo.toFixed(3)+" kg/dia")
    }
    if ($("#miniatura2").is(':checked')){
        var calculo = (6 * pesoCao)/100;
        alert(nomeCachorro+" precisa comer "+calculo.toFixed(3)+" kg/dia")
    }
    if ($("#pequeno").is(':checked')){
        var calculo = (5 * pesoCao)/100;
        alert(nomeCachorro+" precisa comer "+calculo.toFixed(3)+" kg/dia")
    }
    if ($("#medio").is(':checked')){
        var calculo = (5 * pesoCao)/100;
        alert(nomeCachorro+" precisa comer "+calculo.toFixed(3)+" kg/dia")
    }
    if ($("#grande").is(':checked')){
        var calculo = (4.5 * pesoCao)/100;
        var calculo2 = (5 * pesoCao)/100;
        alert(nomeCachorro+" precisa comer "+calculo.toFixed(3)+" ou "+calculo2.toFixed(3)+" kg/dia")
    }
    if ($("#gigante").is(':checked')){
        var calculo = (3.5 * pesoCao)/100;
        var calculo2 = (4 * pesoCao)/100;
        alert(nomeCachorro+" precisa comer "+calculo.toFixed(3)+" ou "+calculo2.toFixed(3)+" kg/dia")
    }
}