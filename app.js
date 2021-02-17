$(document).ready(function(){
    var player = 1;
    var winner = 0;
    var colors = {};
    colors[-1] = "yellow";
    colors[1] = "blue";
    var count = 0;

    $(".cell").each(function(){
        $(this).attr("id", count);
        $(this).attr("data-player", 0);
        count++;

        $(this).click(function(){
            //alert(" Hola!"+$(this).attr("id")+" "+$(this).attr("data-player"));
            let columna = $(this).attr("id")%7;
            /*if(isValid($(this).attr("id"))){
                //alert($(this).attr("id"));
                $(this).css("background-color", colors[player]);
                $(this).attr("data-player", player);
                if (checkWin(player)){
                    alert(colors[player] + " ha ganado!!");
                    winner=player;
                }
                player *= -1;
            }*/
            if (winner==0) {
            let celda= ValidarColumna(columna);
            if (celda!=undefined) {
                $("#" + celda).css("background-color", colors[player]);
                $("#" + celda).attr("data-player", player);
                if (checkWin(player)){
                    alert(colors[player] + " ha ganado!!");
                    winner=player;
                }
                player *= -1;
            }else{
                alert("ya no hay espacio");
            }
        }
            //alert(celda);
        });
    })  ;

    function ValidarColumna(columna){
        var id = parseInt(columna);
        for (var i = 5; i >=0 ; i--) {
            if($("#" + (id+7*i)).attr("data-player") === "0"){
            return id+7*i;
          }
        }
        return undefined;
    }
    function isValid(n){
        var id = parseInt(n);
        if (winner!==0) {
            return false;
        }
        if($("#" + id).attr("data-player") === "0"){
            //if(id >= 35){
              //  return true;
            //}
            //if($("#" + (id + 7)).attr("data-player") !== 0){
               return true;
            //}
        }
        return false;
    }

    function checkWin(player){
        //chacar las filas
        var chain = 0;
        for (var i = 0; i < 42; i+=7) {
            for (var j = 0; j < 7; j++){
                var cell = $("#" + (i+j));
                if (cell.attr("data-player")==player){
                    chain++;
                }else{
                    chain=0;
                }

                if (chain >= 4) {
                    return true;
                }
            }
            chain=0;
        }

        //checar las columnas
        chain=0;
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 42; j+=7) {
                var cell=$("#" + (i+j));
                if (cell.attr("data-player") == player){
                    chain++;
                }else{
                    chain=0;
                }

                if (chain>=4) {
                    return true;
                }
            }

            chain=0;
        }
        return false;
    }
});