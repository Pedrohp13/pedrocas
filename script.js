// Script básico para interatividade
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
  
    // Exemplo de interação: ao clicar em qualquer item de música, exibe um alerta com o título da música.
    const musicItems = document.querySelectorAll('.music-item');
    musicItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const title = item.querySelector('h2').textContent;
        alert('Você clicou em: ' + title);
      });
    });
  });
  