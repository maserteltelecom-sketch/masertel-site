# Masertel Soluções — Site institucional

Site estático (HTML/CSS/JS puro, sem build) para a Masertel Soluções.

## Estrutura

```
index.html                    Home
empresa.html                  Sobre a empresa
servicos.html                 Serviços
portfolio.html                Portfólio
dicas.html                    Dicas técnicas
clientes.html                 Clientes e segmentos
contato.html                  Contato / formulário (envia via WhatsApp)
politica-de-privacidade.html  Política de privacidade
404.html                      Página de erro
assets/css/style.css          Estilos
assets/js/script.js           Menu mobile + formulário de contato
assets/img/                   Logo e ícones (favicon gerado a partir da logo)
robots.txt / sitemap.xml      SEO
_headers                      Cabeçalhos de segurança/cache (Cloudflare Pages)
```

## Rodar localmente

Não precisa de build. Basta servir a pasta como estática, por exemplo:

```bash
python -m http.server 8080
```

e abrir http://localhost:8080

## Deploy — GitHub + Cloudflare Pages

1. Suba este repositório para o GitHub (veja passo a passo abaixo).
2. No painel da Cloudflare, vá em **Workers & Pages → Create → Pages → Connect to Git**.
3. Selecione o repositório.
4. Configuração de build:
   - **Build command:** (deixe em branco)
   - **Build output directory:** `/`
5. Deploy. A cada `git push` na branch principal, o site atualiza automaticamente.
6. Em **Custom domains**, adicione `masertelsolucoes.com.br` (o domínio já está com DNS na Cloudflare, então a validação é automática).

## Antes de publicar

- Confirme o domínio final em `robots.txt`, `sitemap.xml` e nas tags `canonical`/`og:url` de cada página (está configurado para `https://masertelsolucoes.com.br`).
