
var Kplus =  [];

var pc1value;   // variables correspondientes  a las tablas pc1, pc2 y ip
var pc2value;
var ipvalue;


var C0;  // K se divide en C0 Y D0
var D0;

var C1D1,C2D2,C3D3,C4D4,C5D5,C6D6,C7D7,C8D8,C9D9,C10D10,C11D11,C12D12,C13D13,C14D14,C15D15,C16D16;

var K1= '',K2 = '',K3 = '',K4 = '',K5 = '',K6 = '',K7 = '',K8 = '',K9 = '',K10 = '',K11 = '',K12 = '',K13 = '',
K14 = '',K15 = '',K16 = '';

var mensajeIP = '';

var L0;   // mensajeIP se divide en dos bloques L0 y D0
var R0;

var R1= '',R2= '',R3= '',R4= '',R5= '',R6= '',R7= '',R8= '',R9= '',R10= '',R11= '',R12= '',R13= '',R14= '',R15= '',R16= '';
var L1= '',L2= '',L3= '',L4= '',L5= '',L6= '',L7= '',L8= '',L9= '',L10= '',L11= '',L12= '',L13= '',L14= '',L15= '',L16= '';

var dR1= '',dR2= '',dR3= '',dR4= '',dR5= '',dR6= '',dR7= '',dR8= '',dR9= '',dR10= '',dR11= '',dR12= '',dR13= '',dR14= '',dR15= '',dR16= '';
var dL1= '',dL2= '',dL3= '',dL4= '',dL5= '',dL6= '',dL7= '',dL8= '',dL9= '',dL10= '',dL11= '',dL12= '',dL13= '',dL14= '',dL15= '',dL16= '';


var s1ABin= [];


var Bn = '';

var ip_1value = '';
var resBin = '';

var msCD =[];

var resHex = ''; 

var msCDtoStr = '';

var dIP = '';

var dR0L0 = '';

var IpInv = '';

var dMsCd= '';

dMensaje= ''; 

var mensajeArray = [];

var mensajeShift = '';

var Mensaje = '';
var Clave = '';
var MensajeDes= '';
var MensajeEn = '';

// FUNCIÓN QUE DEVUELVE 8 BITS PARA CADA CARÁCTEr

var boton = document.querySelector("#boton");

function setMessage(){

     Mensaje = document.getElementById("mensaje").value; 
     Clave = document.getElementById("clave").value; 




function textoABinario(text) {

    var output = [];
    var binario;
    for (var i = 0; i < text.length; i++){

        binario = text[i].charCodeAt().toString(2);
        output.push(Array(8-binario.length+1).join("0") + binario);       //  devuelve 8 bits por char
    }

    return output.join("");
}


    while ((Mensaje.length % 8) != 0) { // mensaje % 8 = 0

        Mensaje += " ";
      
      }

for(var i = 0; i < (Mensaje.length/8); i++){
        mensajeArray.push(Mensaje.slice(i*8,8*i + 8));        
}

         
 while(mensajeArray.length > 0){ // toda la encriptación dentro

     mensajeShift = mensajeArray.shift();

        
    var mensajeABinario = textoABinario(mensajeShift);   // 0100111001000101010101100101001001010001010101010100100101010100 
    var K = textoABinario(Clave);                   // 0100101101000001010100110100100001001001010100110100000101000010


//  CLAVE K+ A PARTIR DE K
//  K  64bits  -->  K+  56bits
//  K+ = K[ PC_1(i)]     0<= i <=55                         
for (var i = 0; i < pc1.length; i++){
    pc1value = pc1[i];
    Kplus += K[pc1value - 1];
}                                               // 00000000111111110000000000101010010100000000000110010100


C0 = Kplus.slice(0,28);
D0 = Kplus.slice(28,56);                        // 00000000111111110000000000101010010100000000000110010100


//  Cn = Cn-1 <<leftshift(i)      1<=i<=16      Cn 28bits
//  Dn = Dn-1 <<leftshift(i)      1<=i<=16      Dn 28bits
//  left shift : 1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1

C1D1 = C0.slice(1,28) + C0.slice(0,1) + D0.slice(1,28) + D0.slice(0,1);
C2D2 = C0.slice(2,28) + C0.slice(0,2) + D0.slice(2,28) + D0.slice(0,2);
C3D3 = C0.slice(4,28) + C0.slice(0,4) + D0.slice(4,28) + D0.slice(0,4);
C4D4 = C0.slice(6,28) + C0.slice(0,6) + D0.slice(6,28) + D0.slice(0,6);
C5D5 = C0.slice(8,28) + C0.slice(0,8) + D0.slice(8,28) + D0.slice(0,8);
C6D6 = C0.slice(10,28) + C0.slice(0,10) + D0.slice(10,28) + D0.slice(0,10);
C7D7 = C0.slice(12,28) + C0.slice(0,12) + D0.slice(12,28) + D0.slice(0,12);
C8D8 = C0.slice(14,28) + C0.slice(0,14) + D0.slice(14,28) + D0.slice(0,14);
C9D9 = C0.slice(15,28) + C0.slice(0,15) + D0.slice(15,28) + D0.slice(0,15);
C10D10 = C0.slice(17,28) + C0.slice(0,17) + D0.slice(17,28) + D0.slice(0,17);
C11D11 = C0.slice(19,28) + C0.slice(0,19) + D0.slice(19,28) + D0.slice(0,19);
C12D12 = C0.slice(21,28) + C0.slice(0,21) + D0.slice(21,28) + D0.slice(0,21);
C13D13 = C0.slice(23,28) + C0.slice(0,23) + D0.slice(23,28) + D0.slice(0,23);
C14D14 = C0.slice(25,28) + C0.slice(0,25) + D0.slice(25,28) + D0.slice(0,25);
C15D15 = C0.slice(27,28) + C0.slice(0,27) + D0.slice(27,28) + D0.slice(0,27);
C16D16 = C0.slice(28,28) + C0.slice(0,28) + D0.slice(28,28) + D0.slice(0,28);


// GENERACION DE SUBCLAVES Kn A PARTIR DE CnDn   56bits  -->  48bits
// Kn = CnDn( PC2[i])      1<=n<=16 ;  0<=i<=47
for (var i = 0; i < pc2.length; i++){

    pc2value = pc2[i];
    K1 += C1D1[pc2value - 1];
    K2 += C2D2[pc2value - 1];
    K3 += C3D3[pc2value - 1];
    K4 += C4D4[pc2value - 1];
    K5 += C5D5[pc2value - 1];
    K6 += C6D6[pc2value - 1];
    K7 += C7D7[pc2value - 1];
    K8 += C8D8[pc2value - 1];
    K9 += C9D9[pc2value - 1];
    K10 += C10D10[pc2value - 1];
    K11 += C11D11[pc2value - 1];
    K12 += C12D12[pc2value - 1];
    K13 += C13D13[pc2value - 1];
    K14 += C14D14[pc2value - 1];
    K15 += C15D15[pc2value - 1];
    K16 += C16D16[pc2value - 1];    
}

//  ENCRIPTACION DEL MENSAJE
//  REORDENACION DEL MENSAJE BINARIO SEGUN TABLA PERMUTACION INICIAL
//  IP = M(PermInicial[])   64bits --> 64bits

for (var i = 0; i < ip.length; i++){
    ipvalue = ip[i];
    mensajeIP += mensajeABinario[ipvalue - 1];
}                                               //11111111101111001010011101110010000000000000000001000001 00001101
                                                //1111111110111100101001110111001000000000000000000100000100001101


L0 = mensajeIP.slice(0,32);
R0 = mensajeIP.slice(32,64)



L1 = R0;
R1 = getR(L0, R0, K1);

L2 = R1;
R2 = getR(L1, R1, K2);

L3 = R2;
R3 = getR(L2, R2, K3);

L4 = R3;
R4 = getR(L3, R3, K4);

L5 = R4;
R5 = getR(L4, R4, K5);

L6 = R5;
R6 = getR(L5, R5, K6);

L7 = R6;
R7 = getR(L6, R6, K7);

L8 = R7;
R8 = getR(L7, R7, K8);

L9 = R8;
R9 = getR(L8, R8, K9);

L10 = R9;
R10 = getR(L9, R9, K10);

L11 = R10;
R11 = getR(L10, R10, K11);

L12 = R11;
R12 = getR(L11, R11, K12);

L13 = R12;
R13 = getR(L12, R12, K13);

L14 = R13;
R14 = getR(L13, R13, K14);

L15 = R14;
R15 = getR(L14, R14, K15);

L16 = R15;
R16 = getR(L15, R15, K16);

R16L16 = R16 + L16;


for (var i = 0; i < ip_1.length; i++){
            
    ip_1value = ip_1[i];
    resBin += R16L16[ip_1value-1]


}

// se pasa el resultado final 'resBin' a hexadecimal

msCD.push(resBin);
resHex += binhex(resBin);


// Se reinicializan las variables
mensajeIP = '';
resBin = '';

}

mensajeEn = document.getElementById("mensajeen");
mensajeEn.value = resHex;

// DESENCRIPTACIÓN

while(msCD.length > 0){


    msCDtoStr = msCD.shift();


    for (var i = 0; i < ip.length; i++){
        ipvalue = ip[i];
        dIP += msCDtoStr[ipvalue - 1];
    }  

dL16 = dIP.slice(0,32);
dR16 = dIP.slice(32,64);

dL15 = dR16;
dR15 = getR(dL16, dR16, K16);

dL14 = dR15;
dR14 = getR(dL15,dR15,K15);

dL13 = dR14;
dR13 = getR(dL14,dR14,K14);

dL12 = dR13;
dR12 = getR(dL13,dR13,K13);

dL11 = dR12;
dR11 = getR(dL12,dR12,K12);

dL10 = dR11;
dR10 = getR(dL11,dR11,K11);

dL9 = dR10;
dR9 = getR(dL10,dR10,K10);

dL8 = dR9;
dR8 = getR(dL9,dR9,K9);

dL7 = dR8;
dR7 = getR(dL8,dR8,K8);

dL6 = dR7;
dR6 = getR(dL7,dR7,K7);

dL5 = dR6;
dR5 = getR(dL6,dR6,K6);

dL4 = dR5;
dR4 = getR(dL5,dR5,K5);

dL3 = dR4;
dR3 = getR(dL4,dR4,K4);

dL2 = dR3;
dR2 = getR(dL3,dR3,K3);

dL1 = dR2;
dR1 = getR(dL2,dR2,K2);

dL0 = dR1;
dR0 = getR(dL1,dR1,K1);


dR0L0 = dR0 + dL0;

for (var i = 0; i < ip_1.length; i++){
            
    ip_1value = ip_1[i];
    IpInv += dR0L0[ip_1value-1]

}

dMsCd = binhex(IpInv);

dMensaje += hex2a(dMsCd);

MensajeDes = document.getElementById("mensajedes");
MensajeDes.value = dMensaje;


}


 }