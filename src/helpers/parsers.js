function forcaImagem(imagem) {
  const forcas = {
    'Fraco.gif': 'fraca',
    'Forte.gif': 'forte',
    'Moderado.gif': 'moderada',
    'MuitoForte.gif': 'muito forte'
  };

  return forcas[imagem.split('/').slice(-1).pop()];
}

module.exports = {
  forcaImagem
};
