function atualizarCronometro() {
  const inicio = new Date('2024-03-25T00:00:00'); // Data do início do namoro
  const agora = new Date();

  let diff = agora - inicio; // diferença em milissegundos

  // Converter para unidades
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= dias * (1000 * 60 * 60 * 24);

  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff -= horas * (1000 * 60 * 60);

  const minutos = Math.floor(diff / (1000 * 60));
  diff -= minutos * (1000 * 60);

  const segundos = Math.floor(diff / 1000);

  // Mostrar no HTML
  const timerEl = document.getElementById('timer');
  timerEl.textContent = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza a cada segundo
setInterval(atualizarCronometro, 1000);
atualizarCronometro();
Adiciona script do cronômetro do namoro

