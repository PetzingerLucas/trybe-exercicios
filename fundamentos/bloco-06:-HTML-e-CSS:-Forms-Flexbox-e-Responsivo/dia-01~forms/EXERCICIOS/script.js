const body = document.querySelector('body')
const selectState = document.querySelector("#select-state");

for (let i = 0; i <= 26; i += 1) {
  let createState = document.createElement("option");
  selectState.appendChild(createState);
  let siglaEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "GO", "ES", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SP", "SC", "SE", "TO",]
  let nomeEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro','Rio Grande do Norte' ,'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe',  'Tocantins']
    createState.innerText =  nomeEstados[i]
    createState.value = siglaEstados[i]


}
console.log(body);
