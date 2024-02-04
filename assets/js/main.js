let siren = document.getElementById("siren");
let message= document.querySelector('#message');
let button = document.querySelector("#button");

button.addEventListener('click',checkSiren);
siren.addEventListener('keyup',()=>{
    let regex = new RegExp ('\\d{9}');
    if (!regex.test(siren.value)){message.textContent="Doit contenir 9 chiffres";
            button.disabled=true;}
            else{message.textContent="";
                button.disabled=false;}});

function checkSiren (){
    let number=siren.value;
    let chiffres=[];
        for (let i = 0; i < number.length; i++) {
            let chiffre = parseInt(number[i]);
            chiffres.push(chiffre);}
            if (number.length!=9){
                message.textContent="Numero de SIREN invalide, le numéro doit avoir 9 chiffres ";}
            else{
                if(luhn(chiffres)==0){
                    let key=vatKey(number);
                    message.textContent="Valide, numero de TVA associé : FR"+key+number;}
                else{message.textContent="Non valide";}
                }       
            }

function luhn(entry){
    let i = entry.length-2;
    let res1=0;
    let res2=0
    while(i>=0){
                let resTemp = entry[i]*2;
                if (resTemp<=9){res1+=resTemp}
                    else{res1+=resTemp-9;}
                if(i!=1){res2+=entry[i+1];}
                    else{res2+=entry[i+1]+entry[i-1]}
                i=i-2;
                ;
                }
    let resTot = (res1+res2)%10;  
    return resTot;  
}


function vatKey(nbre){
    let key= [12+3*(nbre%97)]%97;
    if (key<10){key='0'+key};
    return key;
}

    

