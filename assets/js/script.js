
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');
if(toggle){ toggle.addEventListener('click',()=>menu.classList.toggle('active')); }
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('active')));

const orcamentoForm = document.getElementById('orcamento-form');
if(orcamentoForm){
  orcamentoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = orcamentoForm.nome.value.trim();
    const telefone = orcamentoForm.telefone.value.trim();
    const servico = orcamentoForm.servico.value.trim();
    const mensagem = orcamentoForm.mensagem.value.trim();
    const texto = `Olá, meu nome é ${nome} (${telefone}). Preciso de um orçamento de ${servico || 'um serviço'}. ${mensagem}`;
    window.open('https://wa.me/5571991505533?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });
}
