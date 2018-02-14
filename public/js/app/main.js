// fetch( 'http://localhost:7007/fazenda.json' )
//   .then(response => response.json()) //// retorna uma promise
//   .then(result => {
//     console.log('resultado' + result);
//     console.log('resultado.data' + result.data);
//     let teste = result.data;

//     //// código omitido
//         console.log(JSON.parse(result.responseText));

//   })
//   .catch(err => {
//   //// trata se alguma das promises falhar
//   console.error('Failed retrieving information', err);
// });

// let url = 'http://localhost:7007/js/app/fazenda.json';

// let xhr = new XMLHttpRequest();
// xhr.open('GET', url, true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     if (xhr.status = 200)     
      
//       var json = JSON.parse(xhr.responseText);

//       preencheCampos(json);

      

//      for(var i = 0; i < json.data.length; i ++){
      
//       var votoSim = porcentagem(

//         // parseInt(json.data[i].positive   !== 0 |  json.data[i].positive   !== null ? json.data[i].positive : 0), 
          
//         // parseInt(json.data[i].negative  !== 0 |  json.data[i].positive   !== null  ? json.data[i].negative : 0), 


//        parseInt(json.data[i].positive), 
      
        
//         parseInt(json.data[i].negative), 
//         'sim'
      
      
      
      
      
//       );
//       var votoNao = porcentagem(parseInt(json.data[i].positive), parseInt(json.data[i].negative), 'nao');

//       console.log( teste(json.data[i].positive));

//       console.log(json.data[i].negative);   
//       console.log( parseInt(json.data[i].negative) + parseInt(json.data[i].positive) );
//       console.log( '---------------------' );


//       function teste(el){
//         if( el ){
//           return el
//         }else{
//          return  0
//         }
       
//       }

//      }





//     }

//   }
//   xhr.send();

    //função para preencher os campos
    // function preencheCampos(json) {
    //     document.querySelector('#id').textContent = 'id ' + json.data[0].__id;
    //     document.querySelector('#nome').textContent = 'nome ' + json.data[0].name;
    //     document.querySelector('#descricao').textContent = 'descricao ' + json.data[0].description;
    //     document.querySelector('#foto').src =  json.data[0].picture;
    // }




   // var teste = new VotacaoView;
   // VotacaoController.obtemParticipantes();
   //console.log(teste.update());


  
  var tbody = document.querySelector('table tbody');
  
 // document.querySelector('.form').addEventListener('submit', function(event) {
      
         


//...


//....


     

  //});
















