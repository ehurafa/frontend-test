class porcentagemHelper{
  constructor(positivos, negativos, status){
    this.positivos = positivos;
    this.negativos = negativos;
    this.status = status;
  }

  calcule(positivos, negativos, status ){
    let tot = positivos + negativos;
    let r = status === 'sim' ? positivos /  tot * 100 : negativos /  tot * 100;
    if( r % 2){
      return r.toFixed(0) + '%'
     
    }else{
      return 0
    }  
  }

}

