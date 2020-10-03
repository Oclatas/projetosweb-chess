class chessController{

    constructor(){

        this._audio = new Audio('toc.mpeg');
        
        this._peaP = '&#9823'; 
        this._torP = '&#9820';
        this._cavP = '&#9822';
        this._bisP = '&#9821';
        this._raiP = '&#9819';
        this._reiP = '&#9818';

        this._peaB = '&#9817'; 
        this._torB = '&#9814'; 
        this._cavB = '&#9816';
        this._bisB = '&#9815';
        this._raiB = '&#9813';
        this._reiB = '&#9812';

        this._primeiroClick = "";
        this._segundoClick = "";
        this._pecaEscolhida = "";

        this.iniciarJogo();
        this.clicarPecas();

    }

    iniciarJogo(){

        let brancas = document.querySelectorAll("#l1 > div, #l2 > div");

        brancas.forEach((item, index)=>{
           
            if(this.linhaPeao(item.id)){
                
                document.getElementById(item.id).innerHTML = this._peaB;

            }else{

                switch(item.id){

                    case 'l1c1':
                    case 'l1c8':
                        document.getElementById(item.id).innerHTML = this._torB;
                        break;
                    case 'l1c2':
                    case 'l1c7':
                        document.getElementById(item.id).innerHTML = this._cavB;
                        break;
                    case 'l1c3':
                    case 'l1c6':
                        document.getElementById(item.id).innerHTML = this._bisB;
                        break;
                    case 'l1c4':
                        document.getElementById(item.id).innerHTML = this._raiB;
                        break;
                    case 'l1c5':
                        document.getElementById(item.id).innerHTML = this._reiB;
                }
            };
        });

        let pretas = document.querySelectorAll("#l7 > div, #l8 > div");

        pretas.forEach((item, index)=>{
            
            if(this.linhaPeao(item.id)){
                
                document.getElementById(item.id).innerHTML = this._peaP;

            }else{

                switch(item.id){

                    case 'l8c1':
                    case 'l8c8':
                        document.getElementById(item.id).innerHTML = this._torP;
                        break;
                    case 'l8c2':
                    case 'l8c7':
                        document.getElementById(item.id).innerHTML = this._cavP;
                        break;
                    case 'l8c3':
                    case 'l8c6':
                        document.getElementById(item.id).innerHTML = this._bisP;
                        break;
                    case 'l8c4':
                        document.getElementById(item.id).innerHTML = this._raiP;
                        break;
                    case 'l8c5':
                        document.getElementById(item.id).innerHTML = this._reiP;
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

    clicarPecas(){

        let pecas = document.querySelectorAll("#l1 > div, #l2 > div, #l3 > div, #l4 > div, #l5 > div, #l6 > div, #l7 > div, #l8 > div");

        pecas.forEach((pc, index)=>{

            this.addEventListenerAll(pc,"click drag mouse", e=> {
                
                if(!this._primeiroClick){

                    this._primeiroClick = pc.id;

                    document.getElementById(this._primeiroClick).style.fontSize = "9vh";

                    this._pecaEscolhida = document.getElementById(this._primeiroClick).innerHTML;

                    console.log("pecaEscolhida = ",this._pecaEscolhida);

                } else{

                    this._segundoClick = pc.id;

                    console.log("segundoClick",this._segundoClick);
                    
                    document.getElementById(this._primeiroClick).style.fontSize = "7vh";
                    document.getElementById(this._primeiroClick).innerHTML = "";
                    document.getElementById(this._segundoClick).innerHTML = this._pecaEscolhida;

                    this._primeiroClick = "";

                    this.playAudio();

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
