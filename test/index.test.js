const pegaArquivo = require('../index')

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pega arquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('I:/Alura_gb.tech_/Nodejs/criando-biblioteca/test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  it('deve retornar mensagem não há links', async () => {
    const resultado = await pegaArquivo('I:/Alura_gb.tech_/Nodejs/criando-biblioteca/test/arquivos/texto1_semlinks.md')
    expect(resultado).toBe('não há links')
  })
  it('deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivo('I:/Alura_gb.tech_/Nodejs/criando-biblioteca/test/arquivos/')).rejects.toThrow(/não há arquivo no caminho/)
  })
  // it('deve retornar náo foi encontrado arquivo', async () => {
  //   const reulstado = await pegaArquivo('I:/Alura_gb.tech_/Nodejs/criando-biblioteca/test/arquivos/')
  //   expect(resultado).toBe('não há arquivo no caminho')
  // })
})
