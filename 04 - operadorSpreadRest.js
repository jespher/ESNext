// operador ... rest(juntar) / spread(espalhar)

// usar spread com objeto
const funcionario = { nome: 'Diebersan', salario: 8000}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Diebersan', 'Darlene', 'Melzita']
const grupoFinal = [...grupoA, 'Ulderico', 'Sérgio', 'Leiri']
console.log(grupoFinal)
