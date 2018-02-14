class Votacao {
    
        constructor() {       
      
        this._url = 'http://localhost:3000/js/app/fazenda.json';   
        this.ret = this.retornaFazendeiros();        
    
    }
   

    retornaFazendeiros(){
  
        var elemento = document.querySelector('#table');

        let url = this._url;
        (function() {
          var httpRequest;            

          function request() {
            if (window.XMLHttpRequest) { 
              httpRequest = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
              try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
              } 
              catch (e) {
                try {
                  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } 
                catch (e) {}
              }
            }

            if (!httpRequest) {
              alert('Giving up :( Cannot create an XMLHTTP instance');
              return false;
            }
            httpRequest.onreadystatechange = alertContents;
            httpRequest.open('GET', url);
            httpRequest.send();
          }request() ;

          function alertContents() {
            if (httpRequest.readyState === 4) {
              if (httpRequest.status === 200) {
               var json = JSON.parse(httpRequest.responseText);
               
                var fazendeiros = [];    

                var Fazendeiro = function(id, timestamp, name, description, picture, positive, negative, age) {
                    this.id =  id;       
                    this.timestamp =  timestamp;   
                    this.name =  name;  
                    this.description = description;
                    this.picture = picture;         
                    this.positive = positive;
                    this.negative = negative;        
                    this.age = age;                 
                };  

                  var comparacao = new compareHelper();
                  var porcentagem = new porcentagemHelper();

                 for(var i = 0; i < json.data.length; i ++){
                
                    var votoSim = porcentagem.calcule(parseInt(json.data[i].positive), parseInt(json.data[i].negative), 'sim');
                    var votoNao = porcentagem.calcule(parseInt(json.data[i].positive), parseInt(json.data[i].negative), 'nao');

      
                    fazendeiros[i] =   new Fazendeiro(
                      json.data[i].__id,
                      json.data[i].timestamp,
                      json.data[i].name,
                      json.data[i].description,
                      json.data[i].picture,
                      comparacao.compareNumber(votoSim),
                      comparacao.compareNumber(votoNao),          
                      comparacao.compareNumber((json.data[i].age))
                        );      

                     fazendeiros.sort(function(a, b) {
                          return a.positive - b.positive;
                      });

                      var tr = document.createElement('tr');      

                      elemento.appendChild(tr);                

                    }
               

                       var tr_ = document.querySelectorAll('tr');

                       for(var i = 0; i < json.data.length; i ++){
                         tr_[i].innerHTML=  
                          `
                          <tr class="transition">
                            <td class="picture">
                              <figure>
                                <img src="${fazendeiros[i].picture}" alt="">
                              </figure>                
                            </td>
                            <td class="text">
                              <h2>${fazendeiros[i].name}</h2>
                              <p>${fazendeiros[i].description}</p>
                              <div class="tooltip">
                                <span class="arrow"></span>
                                <div class="gostam">
                                  <h3>Gostam</h3>
                                  <p >${fazendeiros[i].positive}</p>
                                </div>
                                <div class="nao-gostam">
                                  <h3>Não Gostam</h3>
                                  <p >${fazendeiros[i].negative}</p>
                                </div>

                              </div>
                            </td>
                          </tr>
                          `
                       }
                
       
              } else {
                consle.log('Tivemos um problema com a requisição!');
              }
            }

          }alertContents();
   

        })();


       

    }
  
}