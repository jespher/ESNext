const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular'))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Números']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(134, 'a')
chavesVariadas.set(150, 'b')
chavesVariadas.set(132, 'b')
console.log(chavesVariadas)

