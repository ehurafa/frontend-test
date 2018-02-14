class compareHelper{
    constructor(el){
        this.el = el;
    }    
   compareString(el){
        if( el ){
            return el
        }else{
            return  ''
        }                          
    }
    compareNumber(el){
        if( el ){
            return el
        }else{
            return  0
        }                          
    }

}