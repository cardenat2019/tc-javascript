const clients = [{
    id: 1,
    taxNumber: '86620855',
    name: 'HECTOR ACUÑA BOLAÑOS'
},
{
    id: 2,
    taxNumber: '7317855K',
    name: 'JESUS RODRIGUEZ ALVAREZ'
},
{
    id: 3,
    taxNumber: '73826497',
    name: 'ANDRES NADAL MOLINA'
},
{
    id: 4,
    taxNumber: '88587715',
    name: 'SALVADOR ARNEDO MANRIQUEZ'
},
{
    id: 5,
    taxNumber: '94020190',
    name: 'VICTOR MANUEL ROJAS LUCAS'
},
{
    id: 6,
    taxNumber: '99804238',
    name: 'MOHAMED FERRE SAMPER'
}
];
const accounts = [{
    clientId: 6,
    bankId: 1,
    balance: 15000
},
{
    clientId: 1,
    bankId: 3,
    balance: 18000
},
{
    clientId: 5,
    bankId: 3,
    balance: 135000
},
{
    clientId: 2,
    bankId: 2,
    balance: 5600
},
{
    clientId: 3,
    bankId: 1,
    balance: 23000
},
{
    clientId: 5,
    bankId: 2,
    balance: 15000
},
{
    clientId: 3,
    bankId: 3,
    balance: 45900
},
{
    clientId: 2,
    bankId: 3,
    balance: 19000
},
{
    clientId: 4,
    bankId: 3,
    balance: 51000
},
{
    clientId: 5,
    bankId: 1,
    balance: 89000
},
{
    clientId: 1,
    bankId: 2,
    balance: 1600
},
{
    clientId: 5,
    bankId: 3,
    balance: 37500
},
{
    clientId: 6,
    bankId: 1,
    balance: 19200
},
{
    clientId: 2,
    bankId: 3,
    balance: 10000
},
{
    clientId: 3,
    bankId: 2,
    balance: 5400
},
{
    clientId: 3,
    bankId: 1,
    balance: 9000
},
{
    clientId: 4,
    bankId: 3,
    balance: 13500
},
{
    clientId: 2,
    bankId: 1,
    balance: 38200
},
{
    clientId: 5,
    bankId: 2,
    balance: 17000
},
{
    clientId: 1,
    bankId: 3,
    balance: 1000
},
{
    clientId: 5,
    bankId: 2,
    balance: 600
},
{
    clientId: 6,
    bankId: 1,
    balance: 16200
},
{
    clientId: 2,
    bankId: 2,
    balance: 10000
}
]
const banks = [{
    id: 1,
    name: 'SANTANDER'
},
{
    id: 2,
    name: 'CHILE'
},
{
    id: 3,
    name: 'ESTADO'
}
];

// Variable para enlazar datos de Cuentas Bancarias y Bancos
let datosCuentaYBancos = accounts.map(cuenta=>{
    let bancos = banks.filter(banco=>{
        return cuenta.bankId === banco.id
    })[0];
    return {
        clientId: cuenta.clientId,
        bankId: cuenta.bankId,
        balance: cuenta.balance,
        bankName: bancos.name
    }
});

// Variable para enlazar datos de Cuentas Bancarias, Bancos y Clientes
let datosClientesCtas = clients.map(client=>{
    let ctasBancos = datosCuentaYBancos.filter(cb=>{
        return cb.clientId === client.id
    })[0];
    return {
        clientId: client.id,
        taxNumber: client.taxNumber,
        clientName: client.name,
        bankId: ctasBancos.bankId,
        bankName: ctasBancos.bankName,
        balance: ctasBancos.balance
    }
})

// Metodo para ordenar arreglo de objetos JSON
const ordenar = (field, reverse, primer) => {
    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };
  
    reverse = !reverse ? 1 : -1;
  
    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

const listClientsIds = ()=>{
    return datosClientesCtas.map(datos => datos.clientId);
}

const listClientsIdsSortByTaxNumber = () =>{
    const json_ordenado = datosClientesCtas.sort(ordenar('taxNumber', false, (a) =>  a.toUpperCase()));
    return json_ordenado.map(datos=>datos.clientId);
}

const sortClientsTotalBalances = ()=>{
}

const banksClientsTaxNumbers = () =>{
}

console.log('Pregunta 0');
console.log(listClientsIds());
console.log('Pregunta 1');
console.log(listClientsIdsSortByTaxNumber());
// console.log('Pregunta 2');
// console.log(sortClientsTotalBalances());
// console.log('Pregunta 3');
// console.log(banksClientsTaxNumbers());
// console.log('Pregunta 4');
// console.log(richClientsBalances());
// console.log('Pregunta 5');
// console.log(banksRankingByTotalBalance());
// console.log('Pregunta 6');
// console.log(banksFidelity());
// console.log('Pregunta 7');
// console.log(banksPoorClients());
// console.log('Pregunta 8');
// console.log(newClientRanking());
