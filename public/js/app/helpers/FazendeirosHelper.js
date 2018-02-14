class FazendeirosHelper{

    constructor(){
        this._url = 'http://localhost:7007/js/app/fazenda.json';          
    }


    retornaFazendeiros(){
        var xhr = new XMLHttpRequest();
            xhr.open('GET', this._url, true);
            xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200)                     
                var json = JSON.parse(xhr.responseText);

                //preencheCampospreencheCampos(json);

                for(var i = 0; i < json.data.length; i ++){
                
                    var votoSim = porcentagem(parseInt(json.data[i].positive), parseInt(json.data[i].negative), 'sim');
                    var votoNao = porcentagem(parseInt(json.data[i].positive), parseInt(json.data[i].negative), 'nao');


                    function compare(el){
                        if( el ){
                        return el
                        }else{
                        return  0
                        }                    
                    }

                }

            }

        }
        xhr.send();
       // return xhr
    }


    }