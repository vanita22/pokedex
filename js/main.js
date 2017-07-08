$(document).ready(function(){
    
    
      /* var dato = $.ajax({
            url: 'http://pokeapi.co/api/v2/pokedex/',
            type: 'GET',
            dataType: 'JSON',
            data: {
                "limit": '811',
                name: 'name',
                size: 'size'
            },  
        })
        .done(function(){
            console.log("success");            
        })
        .fail(function(){
            console.log("error");
        })
        .always(function(){
            console.log("complete");
        })
   

        
        function dato(){
           $("#buscar").on("click",function(){
                var text = "";
                var tag = $("#dat").val();               
                    $.each(dato.results.name, function(i, name){
                        text += "<div class='cuadro'>" +"<p>"+name+"</p>"+ "</div>";
                    });
                $("#informacion").html(text);                
           });
         }*/  

         var imagenes = function(data){
        var imag = " ";
        var url = " ";
        data.forEach(function(element){
            imag = element.img.url;
            
        $("#informacion").append(armarTemplate(imag));
        })
    }

    var template = function(imag,url){
        var t = "<div class='elemento'><img src='" + imag + "'/><a href='" + url + "'>Ver más</a></div>";
        return t;
    }

    var image = function(imag){
        $.ajax({
            url: 'http://pokeapi.co/media/img',
            type: 'GET',
            datatype: 'json',
            data: {
                q: img,                
            }
        })
        .done(function(response){
            console.log(response);
            imagenes(response.data);
        })
        .fail(function(){
            console.log("error");
        });
    }

    $("#buscar").click(function(event){
        console.log("Entro");
        $("#informacion").empty();
        var info = $("#dat").val();
        image(info);
    });
})