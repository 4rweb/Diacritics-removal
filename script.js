function converterTexto() {
  let texto = document.getElementById("textoInput").value;
  texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  texto = texto.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
  document.getElementById("resultado").innerText = texto;
  document.getElementById("botaoCopiar").style.display = "inline";
  document.getElementById("mensagemCopia").style.display = "none";
}

function copiarTexto() {
  let texto = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(texto).then(() => {
      let mensagem = document.getElementById("mensagemCopia");
      mensagem.style.display = "block";
      setTimeout(() => {
          mensagem.style.display = "none";
      }, 2000);
  });
}