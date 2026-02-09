function selecionarServico(servico) {
  document.getElementById("servico").value = servico;
  document.getElementById("agendamento").scrollIntoView({ behavior: "smooth" });
}

function agendar() {
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const profissional = document.getElementById("profissional").value;

  if (!servico || !data || !hora || !profissional) {
    alert("Preencha todos os campos");
    return;
  }

  const telefone = "5511944565457";

  const mensagem = `Olá! Gostaria de agendar:%0A
Serviço: ${servico}%0A
Data: ${data}%0A
Horário: ${hora}%0A
Profissional: ${profissional}`;

  const url = `https://wa.me/${telefone}?text=${mensagem}`;
  window.open(url, "_blank");
}