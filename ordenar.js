window.addEventListener('load',function(){

    var ordenartlf = this.document.getElementById("OTlf")
    ordenartlf.addEventListener('click',function(){
  
      var areat = document.getElementById('areat').value;
      var p = document.getElementById('contenedor');

      p.innerHTML = escribir(ordenarTlf(FormatearTexto(areat)));

    })

    var ordenarName = this.document.getElementById("Onombres")
    ordenarName.addEventListener('click',function(){
  
      var areat = document.getElementById('areat').value;
      var p = document.getElementById('contenedor');
      
      p.innerHTML = escribir(ordenarNom(FormatearTexto(areat)));

    })

    var ordenarFecha = this.document.getElementById("OFech")
    ordenarFecha.addEventListener('click',function(){
  
      var areat = document.getElementById('areat').value;
      var p = document.getElementById('contenedor');
      
      p.innerHTML = escribir(ordenarFech(FormatearTexto(areat)));

    })

  })



  function FormatearTexto(texto){
    
    var text=texto
    var textArr = [];
    textArr=text.split("\n");
    var textFin = [];

    for (let i = 0; i < textArr.length; i++) {
        for (let j = 0; j < 2; j++) {
          textFin[i]=textArr[i].split(" ");
        }
      
    }
    return textFin;
    }


    function escribir(texto){
      a=texto.length;
      var fin = "";
      for (let i = 0; i < a; i++) {
        
        fin = fin + texto[i].join("\t\t\t")+"<br>";
        
      }
      return fin;
    }

    function ordenarTlf(texto){

      return texto.sort(function(a, b){return a[0] - b[0]});

    }

    function ordenarNom(texto){

      return texto.sort(function(a, b){return a[1].localeCompare(b[1])});

    }

    function ordenarFech(texto){

      return texto.sort(function(a, b){return convertirFecha(a[2]) - convertirFecha(b[2])});

    }


    function convertirFecha (fechaString) {
      var fechaSp = fechaString.split("/");
      var anio = new Date().getFullYear();
      if (fechaSp.length == 3) {
        anio = fechaSp[2];
      }
      var mes = fechaSp[1] - 1;
      var dia = fechaSp[0];
    
      return new Date(anio, mes, dia);
    }
