// Não aceita repetição/não indexada
const times = new Set()
times.add('Athletico Paranaense')
times.add('Coritiba').add('Paraná')
times.add('Athletico Paranaense')

console.log(times)
console.log(times.size)
console.log(times.has('athletico paranaense'))
console.log(times.has('Athletico paranaense'))
console.log(times.has('Athletico Paranaense'))

times.delete('Paraná')
console.log(times)
console.log(times.has('Paraná'))

const nomes = ['Diebersan', 'Dirlainee', 'Mel', 'Diebersan']
const nomesSet = new Set(nomes)
console.log(nomesSet)


