// Elementos DOM que são usados múltiplas vezes
const elements = {
  input: document.getElementById("textoInput"),
  result: document.getElementById("resultado"),
  copyBtn: document.getElementById("botaoCopiar"),
  copyMsg: document.getElementById("mensagemCopia")
};

/**
 * Converte o texto removendo acentos e substituindo caracteres especiais por hífens
 */
function converterTexto() {
  const texto = elements.input.value;
  
  // Remove acentos e diacríticos
  const semAcentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
  // Substitui caracteres especiais por hífens
  const resultado = semAcentos.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
  
  // Atualiza a interface
  elements.result.innerText = resultado;
  elements.copyBtn.hidden = false;
  elements.copyMsg.hidden = true;
}

/**
 * Copia o texto convertido para a área de transferência
 */
function copiarTexto() {
  const texto = elements.result.innerText;
  
  navigator.clipboard.writeText(texto)
    .then(() => {
      // Mostra a mensagem de sucesso
      elements.copyMsg.hidden = false;
      
      // Esconde a mensagem após 2 segundos
      setTimeout(() => {
        elements.copyMsg.hidden = true;
      }, 2000);
    })
    .catch(err => {
      console.error('Erro ao copiar texto: ', err);
      alert('Não foi possível copiar o texto');
    });
}

// Adiciona event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("btnConverter").addEventListener('click', converterTexto);
  elements.copyBtn.addEventListener('click', copiarTexto);
  
  // Permite converter ao pressionar Enter no campo de texto
  elements.input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      converterTexto();
    }
  });
});
