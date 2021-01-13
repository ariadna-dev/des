
  function decbin (dec, largo){
    var out= '';
    while (largo--){ 
        out += (dec >> largo) & 1; 
    }return out;
}

function binhex(b){    
    return b.match(/.{4}/g).reduce(function (acc, i) {
        return acc + parseInt(i, 2).toString(16); }, '');
 }



 // calcular f

function getR(Ln_1, Rn_1, Kn){   

        
    var K1xor = [];  
    var B1= '',B2= '',B3= '',B4= '',B5= '',B6= '', B7 = '', B8 = '';
    var finalF='';
    var fXOR ='';
    var ER0= '';
    var B1column = '', B2column = '', B3column = '', B4column = '', B5column = '', B6column = '', B7column = '', B8column = '';
    var B1line= '',  B2line = '', B3line= '', B4line= '', B5line= '', B6line= '', B7line= '', B8line= '';
    var evalue;
    var pvalue='';
    var s1value = 0,s2value = 0,s3value = 0,s4value = 0,s5value = 0,s6value = 0,s7value = 0,s8value = 0;


    for (var i = 0; i < expand.length; i++){        
         evalue = expand[i];
         ER0 += Rn_1[evalue-1]
     }

     for (var i = 0; i < expand.length; i++){
        K1xor += ER0[i] ^  Kn[i];
     }

    // console.log(K1xor);
          
    B1 = K1xor.slice(0,6);
    B1line = parseInt(B1.slice(0,1) + B1.slice(5,6),2);
    B1column = parseInt(B1.slice(1,5),2);

    B2 = K1xor.slice(6,12);
    B2line = parseInt(B2.slice(0,1) + B2.slice(5,6),2);  
    B2column = parseInt(B2.slice(1,5),2);

    B3 = K1xor.slice(12,18);
    B3line = parseInt(B3.slice(0,1) + B3.slice(5,6),2);  
    B3column = parseInt(B3.slice(1,5),2);

    B4 = K1xor.slice(18,24);
    B4line = parseInt(B4.slice(0,1) + B4.slice(5,6),2);  
    B4column = parseInt(B4.slice(1,5),2);

    B5 = K1xor.slice(24,30);
    B5line = parseInt(B5.slice(0,1) + B5.slice(5,6),2);  
    B5column = parseInt(B5.slice(1,5),2);

    B6 = K1xor.slice(30,36);
    B6line = parseInt(B6.slice(0,1) + B6.slice(5,6),2);  
    B6column = parseInt(B6.slice(1,5),2);

    B7 = K1xor.slice(36,42);
    B7line = parseInt(B7.slice(0,1) + B7.slice(5,6),2);  
    B7column = parseInt(B7.slice(1,5),2);

    B8 = K1xor.slice(42,48);
    B8line = parseInt(B8.slice(0,1) + B8.slice(5,6),2);  
    B8column = parseInt(B8.slice(1,5),2);




    var s1position = B1line*16 + B1column;    //console.log(B1line);console.log(B1column);console.log(s1position);
    s1value += s1[s1position].toString();
    var S1B1 = decbin(s1value,4);


    var s2position = B2line*16 + B2column;
    s2value += s2[s2position].toString();
    var S2B2 = decbin(s2value,4);

    var s3position = parseInt(B3line*16 + B3column);
    s3value += s3[s3position].toString();
    var S3B3 = decbin(s3value,4);

    var s4position = parseInt(B4line*16 + B4column);
    s4value += s4[s4position].toString();
    var S4B4 = decbin(s4value,4);

    var s5position = parseInt(B5line*16 + B5column);
    s5value += s5[s5position].toString();
    var S5B5 = decbin(s5value,4);

    var s6position = parseInt(B6line*16 + B6column);
    s6value += s6[s6position].toString();
    var S6B6 = decbin(s6value,4);

    var s7position = parseInt(B7line*16 + B7column);
    s7value += s7[s7position].toString();
    var S7B7 = decbin(s7value,4);

    var s8position = parseInt(B8line*16 + B8column);
    s8value += s8[s8position].toString();
    var S8B8 = decbin(s8value,4);

    var SnBn = S1B1 + S2B2 + S3B3 + S4B4 + S5B5 + S6B6 + S7B7 + S8B8;
  

    // Resultado de SnBn: 0010 1111 0100 1101 1010 1001 1011 0000

    //Resultado que SnBn debería dar: 0010 1111 0100 1101 1010 1001 1011 0000

    for (var i = 0; i < p.length; i++){
            
        pvalue = p[i];
        finalF += SnBn[pvalue-1]


    }

    //valor de la f: 1101 0011 0000 1001 0111 0110 1101 0001

    // valor de finalF: 11010011000010010111011011010001

    for (var i = 0; i < finalF.length; i++){
        fXOR += Ln_1[i] ^  finalF[i];
    }
    //console.log(finalF);


    return fXOR;

}

function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}