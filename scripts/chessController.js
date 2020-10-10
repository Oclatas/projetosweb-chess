class chessController{

    constructor(){

        this._audio = new Audio('toc.mpeg');
              
        this._peaP = "♟"; 
        this._torP = "♜";
        this._cavP = "♞";
        this._bisP = "♝";
        this._raiP = "♛";
        this._reiP = "♚";
        
        this._peaB = "♙"; 
        this._torB = "♖"; 
        this._cavB = "♘";
        this._bisB = "♗";
        this._raiB = "♕";
        this._reiB = "♔";

        this._black  = [this._peaP,this._cavP,this._bisP,this._torP,this._raiP,this._reiP];
        this._white = [this._peaB,this._cavB,this._bisB,this._torB,this._raiB,this._reiB];
        
        this._primeiroClick = "";
        this._segundoClick = "";
        this._pecaEscolhida = "";
        this._pecaEscolhida2 = "";

        this._movimenta = "";

        this.iniciarJogo();
        this.clicarPecas();

    }

    iniciarJogo(){

        let brancas = document.querySelectorAll("#l1 > div, #l2 > div");

        brancas.forEach((item, index)=>{
           
            if(this.linhaPeao(item.id)){
                
                document.getElementById(item.id).textContent = this._peaB;

            }else{

                switch(item.id){

                    case 'l1c1':
                    case 'l1c8':
                        document.getElementById(item.id).textContent = this._torB;
                        break;
                    case 'l1c2':
                    case 'l1c7':
                        document.getElementById(item.id).textContent = this._cavB;
                        break;
                    case 'l1c3':
                    case 'l1c6':
                        document.getElementById(item.id).textContent = this._bisB;
                        break;
                    case 'l1c4':
                        document.getElementById(item.id).textContent = this._raiB;
                        break;
                    case 'l1c5':
                        document.getElementById(item.id).textContent = this._reiB;
                }
            };
        });

        let pretas = document.querySelectorAll("#l7 > div, #l8 > div");

        pretas.forEach((item, index)=>{
            
            if(this.linhaPeao(item.id)){
                
                document.getElementById(item.id).textContent = this._peaP;

            }else{

                switch(item.id){

                    case 'l8c1':
                    case 'l8c8':
                        document.getElementById(item.id).textContent = this._torP;
                        break;
                    case 'l8c2':
                    case 'l8c7':
                        document.getElementById(item.id).textContent = this._cavP;
                        break;
                    case 'l8c3':
                    case 'l8c6':
                        document.getElementById(item.id).textContent = this._bisP;
                        break;
                    case 'l8c4':
                        document.getElementById(item.id).textContent = this._raiP;
                        break;
                    case 'l8c5':
                        document.getElementById(item.id).textContent = this._reiP;
                        break;

                }
            }

        });
    }

    linhaPeao(value){
       return (value.indexOf('l2') > -1 || value.indexOf('l7') > -1);
    }

    playAudio(){
            
        this._audio.currentTime = 0;
        this._audio.play();        
    }

    mesmaCor(peca1,peca2){
        if(this._black.indexOf(peca1)> -1 && this._black.indexOf(peca2)> -1){
            return true;
        }else if(this._white.indexOf(peca1)> -1 && this._white.indexOf(peca2)> -1){
            return true;
        }else{
            return false;
        }
    }

    consisteMovimento(peca1,peca2,casa1,casa2){

        if(!this.mesmaCor(peca1,peca2)) {

            let c1 = casa1.split("");
            let c2 = casa2.split("");

            let casaFinal = [];
            let possibilidades = [];

            switch(peca1){
                case "♙":
                    
                    //Possibilidade 1 = move 1 linha
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(c1[3]);

                    if(peca2 == "vazio"){
                        possibilidades.push(casaFinal);
                    } 

                    casaFinal = [];   
                    
                    //Possibilidade 2 = move 2 linhas 
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+2).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(c1[3]);

                    if(c2[1] == 4){
                        var terceira = document.getElementById(c1[0]+eval(parseInt(c1[1])+1).toString()+c1[2]+c1[3]).textContent;

                        if(terceira == "vazio" || terceira == ""){
                            possibilidades.push(casaFinal);
                        }
                    
                    }

                    casaFinal = []; 
                    
                    //Possibilidade 3 = move 1 linhas e 1 coluna
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])+1).toString());

                    if(peca2 != "vazio"){
                        possibilidades.push(casaFinal);
                    }    
                    casaFinal = []; 

                    //Possibilidade 4 = move 1 linhas e 1 
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])-1).toString());

                    if(peca2 != "vazio"){
                        possibilidades.push(casaFinal);
                    }    
                    casaFinal = []; 
                break;

                case "♟":
                    
                    //Possibilidade 1 = move 1 linha 
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(c1[3]);

                    if(peca2 == "vazio"){
                        possibilidades.push(casaFinal);
                    } 

                    casaFinal = [];   
                    
                    //Possibilidade 2 = move 2 linhas 
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-2).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(c1[3]);

                    if(c2[1] == 5){
                    
                        var sexta = document.getElementById(c1[0]+eval(parseInt(c1[1])-1).toString()+c1[2]+c1[3]).textContent;

                        if(sexta == "vazio" || sexta == ""){
                            possibilidades.push(casaFinal);
                        }
                    
                    }

                    casaFinal = []; 
                    
                    //Possibilidade 3 = move 1 linhas e 1 coluna
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])-1).toString());

                    if(peca2 != "vazio"){
                        possibilidades.push(casaFinal);
                    }    
                    casaFinal = []; 

                    //Possibilidade 4 = move 1 linhas e 1 coluna
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])+1).toString());

                    if(peca2 != "vazio"){
                        possibilidades.push(casaFinal);
                    }    
                    casaFinal = []; 
                break;

                case "♘":
                case "♞":
                    // Possiblidade 1 = move 1 linha e 2 colunas
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])-2).toString());

                    if(casaFinal[1]>0 && casaFinal[3]<9){
                        possibilidades.push(casaFinal);
                    }
                    casaFinal = []

                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])+2).toString());

                    if(casaFinal[1]>0 && casaFinal[3]<9){
                        possibilidades.push(casaFinal);
                    }
                    casaFinal = []                                      

                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])+2).toString());

                    if(casaFinal[1]>0 && casaFinal[3]<9){
                        possibilidades.push(casaFinal);
                    }
                    casaFinal = []

                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+1).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])-2).toString());

                    if(casaFinal[1]>0 && casaFinal[3]<9){
                        possibilidades.push(casaFinal);
                    }
                    casaFinal = []
                    
                    // Possiblidade 2 = move 2 linhas e 1 coluna
                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-2).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])-1).toString());

                    if(casaFinal[1]>0 && casaFinal[3]<9){
                        possibilidades.push(casaFinal);
                    }
                    casaFinal = []

                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])-2).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])+1).toString());

                    if(casaFinal[1]>0 && casaFinal[3]<9){
                        possibilidades.push(casaFinal);
                    }
                    casaFinal = []                     

                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+2).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])+1).toString());

                    if(casaFinal[1]>0 && casaFinal[3]<9){
                        possibilidades.push(casaFinal);
                    }
                    casaFinal = []

                    casaFinal.push(c1[0]);
                    casaFinal.push(eval(parseInt(c1[1])+2).toString());
                    casaFinal.push(c1[2]);
                    casaFinal.push(eval(parseInt(c1[3])-1).toString());

                    possibilidades.push(casaFinal);
                    casaFinal = []                    

                break;

                case "♜":
                case "♖":
                   
                    if(c1[1]==c2[1]){
                        if(c1[3] > c2[3]){

                            for(var i = eval(parseInt(c2[3])+1); i < c1[3]; i++ ){
                                
                                var testaCasa = c2[0]+c2[1].toString()+c2[2]+i.toString();
                                
                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        } else if(c1[3] < c2[3]){

                            for(var i = eval(parseInt(c1[3])+1); i < c2[3]; i++ ){
                                
                                var testaCasa = c2[0]+c2[1].toString()+c2[2]+i.toString();
                                
                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        }
                    } else if (c1[3]==c2[3]){

                        if(c1[1]> c2[1]){

                            for(var i = eval(parseInt(c2[1])+1); i < c1[1]; i++){

                                var testaCasa = c2[0]+i.toString()+c2[2]+c2[3].toString();

                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        }
                        if(c1[1]< c2[1]){

                            for(var i = eval(parseInt(c1[1])+1); i < c2[1]; i++){

                                var testaCasa = c2[0]+i.toString()+c2[2]+c2[3].toString();

                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        }

                    } else{
                        return false;
                    }  
              
                    if(c1[1]==c2[1] || c1[3] == c2[3]){
                        possibilidades.push(c2);
                    }


                break;

                case "♝":
                case "♗":

                    // Linha maior e Coluna maior
                    if(c1[1]<c2[1] && c1[3]<c2[3]){

                        var difBispo = eval(c2[1] - c1[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])+i).toString()+c1[2]+eval(parseInt(c1[3])+i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    }
                    // Linha maior e Coluna menor
                    else if(c1[1]<c2[1] && c1[3]>c2[3]){

                        var difBispo = eval(c2[1] - c1[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])+i).toString()+c1[2]+eval(parseInt(c1[3])-i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    } 
                    // Linha menor e Coluna menor
                    else if(c1[1]>c2[1] && c1[3]>c2[3]){

                        var difBispo = eval(c1[1] - c2[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])-i).toString()+c1[2]+eval(parseInt(c1[3])-i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    } 
                    // Linha menor e Coluna maior
                    else if(c1[1]>c2[1] && c1[3]<c2[3]){

                        var difBispo = eval(c1[1] - c2[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])-i).toString()+c1[2]+eval(parseInt(c1[3])+i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    } 
                    else{
                        return false;
                    }                                                           
                
                    if((parseInt(c1[1])+parseInt(c1[3])) == (parseInt(c2[1])+parseInt(c2[3])) || c1[1]-c1[3] == c2[1]-c2[3]){
                        possibilidades.push(c2);
                    }

                break;

                case "♛":
                case "♕":

                    if(c1[1]==c2[1]){
                        if(c1[3] > c2[3]){

                            for(var i = eval(parseInt(c2[3])+1); i < c1[3]; i++ ){
                                
                                var testaCasa = c2[0]+c2[1].toString()+c2[2]+i.toString();
                                
                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        } else if(c1[3] < c2[3]){

                            for(var i = eval(parseInt(c1[3])+1); i < c2[3]; i++ ){
                                
                                var testaCasa = c2[0]+c2[1].toString()+c2[2]+i.toString();
                                
                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        }
                    } else if (c1[3]==c2[3]){

                        if(c1[1]> c2[1]){

                            for(var i = eval(parseInt(c2[1])+1); i < c1[1]; i++){

                                var testaCasa = c2[0]+i.toString()+c2[2]+c2[3].toString();

                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        }
                        if(c1[1]< c2[1]){

                            for(var i = eval(parseInt(c1[1])+1); i < c2[1]; i++){

                                var testaCasa = c2[0]+i.toString()+c2[2]+c2[3].toString();

                                var contTestaCasa = document.getElementById(testaCasa).textContent;

                                if(contTestaCasa != "vazio" && contTestaCasa != ""){
                                    return false;
                                }
                            }
                        }

                    }   
              
                    // Linha maior e Coluna maior
                    else if(c1[1]<c2[1] && c1[3]<c2[3]){

                        var difBispo = eval(c2[1] - c1[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])+i).toString()+c1[2]+eval(parseInt(c1[3])+i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    }
                    // Linha maior e Coluna menor
                    else if(c1[1]<c2[1] && c1[3]>c2[3]){

                        var difBispo = eval(c2[1] - c1[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])+i).toString()+c1[2]+eval(parseInt(c1[3])-i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    } 
                    // Linha menor e Coluna menor
                    else if(c1[1]>c2[1] && c1[3]>c2[3]){

                        var difBispo = eval(c1[1] - c2[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])-i).toString()+c1[2]+eval(parseInt(c1[3])-i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    } 
                    // Linha menor e Coluna maior
                    else if(c1[1]>c2[1] && c1[3]<c2[3]){

                        var difBispo = eval(c1[1] - c2[1]);
                        
                        for(var i = 1; i < difBispo; i++){

                            var proximoBispo = document.getElementById(c1[0]+eval(parseInt(c1[1])-i).toString()+c1[2]+eval(parseInt(c1[3])+i).toString());

                            if(proximoBispo.textContent != "vazio" && proximoBispo.textContent != ""){
                                return false;
                            }
                        }
                    } 
                    
                    if(c1[1]==c2[1] || c1[3] == c2[3]){
                        possibilidades.push(c2);
                    } else if((parseInt(c1[1])+parseInt(c1[3])) == (parseInt(c2[1])+parseInt(c2[3])) || c1[1]-c1[3] == c2[1]-c2[3]){
                        possibilidades.push(c2);
                    }

                break;

                case this._reiB:
                case this._reiP:

                    if(parseInt(c1[1])+1 == parseInt(c2[1]) && parseInt(c1[3])-1 == parseInt(c2[3])){
                        possibilidades.push(c2);
                    } 
                    else if(parseInt(c1[1])+1 == parseInt(c2[1]) && parseInt(c1[3]) == parseInt(c2[3])){
                        possibilidades.push(c2);
                    } 
                    else if(parseInt(c1[1])+1 == parseInt(c2[1]) && parseInt(c1[3])+1 == parseInt(c2[3])){
                        possibilidades.push(c2);
                    }
                    else if(parseInt(c1[1]) == parseInt(c2[1]) && parseInt(c1[3])-1 == parseInt(c2[3])){
                        possibilidades.push(c2);
                    }
                    else if(parseInt(c1[1]) == parseInt(c2[1]) && parseInt(c1[3])+1 == parseInt(c2[3])){
                        possibilidades.push(c2);
                    }
                    else if(parseInt(c1[1])-1 == parseInt(c2[1]) && parseInt(c1[3])-1 == parseInt(c2[3])){
                        possibilidades.push(c2);
                    }
                    else if(parseInt(c1[1])-1 == parseInt(c2[1]) && parseInt(c1[3]) == parseInt(c2[3])){
                        possibilidades.push(c2);
                    } 
                    else if(parseInt(c1[1])-1 == parseInt(c2[1]) && parseInt(c1[3])+1 == parseInt(c2[3])){
                        possibilidades.push(c2);
                    }                                                                                  

                break;
            }
            
            function testarpossibilidade(currentValue, index, arr) {
                return currentValue.toString() == c2.toString();
              }
                           
            if(possibilidades.some(testarpossibilidade)){
                return true;
            }  
       
        }else{
            return false;
        }
    }
   
    clicarPecas(){

        let pecas = document.querySelectorAll("#l1 > div, #l2 > div, #l3 > div, #l4 > div, #l5 > div, #l6 > div, #l7 > div, #l8 > div");

        pecas.forEach((pc, index)=>{

            this.addEventListenerAll(pc,"click drag mouse", e=> {
                
                if(this._primeiroClick == ""){

                    this._primeiroClick = pc.id;

                    document.getElementById(this._primeiroClick).style.fontSize = "9vh";
                    
                    this._pecaEscolhida = document.getElementById(this._primeiroClick).textContent;

                } else{

                    this._segundoClick = pc.id;

                    if(!document.getElementById(this._segundoClick).textContent){
                        this._pecaEscolhida2 = "vazio";
                    }else{
                        this._pecaEscolhida2 = document.getElementById(this._segundoClick).textContent;
                    }

                    this._movimenta = this.consisteMovimento(this._pecaEscolhida,this._pecaEscolhida2,this._primeiroClick,this._segundoClick);
                                      
                    if(this._movimenta == true){

                        document.getElementById(this._primeiroClick).style.fontSize = "7vh";
                        document.getElementById(this._primeiroClick).innerHTML = "";
                        document.getElementById(this._segundoClick).innerHTML = this._pecaEscolhida;
                        this.playAudio();
                        this._primeiroClick = ""; 
                        this._segundoClick = ""; 
                        

                    }else{
                        document.getElementById(this._primeiroClick).style.fontSize = "7vh";
                        this._primeiroClick = ""; 
                        this._segundoClick = ""; 
                                   
                    }                                

                }

                             
            });

                        
            this.addEventListenerAll(pc,"mouseover mouseup mousedown", e =>{

                pc.style.cursor = "pointer";
            
            });
        });

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event,fn,false);
        
        });
    }


}
