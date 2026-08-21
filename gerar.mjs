/**
 * Gera as páginas do site a partir do conteúdo.
 *
 * Rodar: node gerar.mjs
 *
 * POR QUE UM GERADOR, e não HTML escrito à mão: são trinta funções documentadas
 * com a mesma estrutura. Escritas uma a uma, a quinta ficaria diferente da
 * vigésima, e um site de manual precisa da mesma forma em todo lugar para a
 * pessoa aprender a ler uma vez e depois só procurar o que precisa.
 *
 * A saída é HTML estático puro, commitado no repositório: o GitHub Pages
 * continua servindo arquivo, sem etapa de build. Este script é ferramenta de
 * quem edita, não dependência de quem visita.
 */

import { writeFileSync } from 'node:fs';
import { JORNADAS, PAGINAS } from './conteudo.mjs';
import { rodapeDaHome } from './rodape.mjs';

const SITE = 'https://ressoaapp.rafasbatista.app.br';

const MARCA_SVG = `<svg class="eco" viewBox="0 0 48 48" aria-hidden="true"><circle cx="14" cy="24" r="4.5" fill="currentColor"/><path d="M23 15a12 12 0 0 1 0 18" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M29 9a20 20 0 0 1 0 30" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/><path d="M35 4a27 27 0 0 1 0 40" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" opacity=".25"/></svg>`;

function cabeca({ titulo, descricao, arquivo }) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${titulo} · Ressoa</title>
<meta name="description" content="${descricao}" />
<meta property="og:title" content="${titulo} · Ressoa" />
<meta property="og:description" content="${descricao}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Ressoa" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:url" content="${SITE}/${arquivo}" />
<meta property="og:image" content="${SITE}/og.png" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="apple-touch-icon" href="${SITE}/apple-touch-icon.png" />
<meta name="theme-color" content="#0C0D12" />
<link rel="icon" href="favicon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="site.css" />
</head>
<body id="top">`;
}

function navegacao() {
  return `
<nav id="nav">
  <div class="wrap nav-in">
    <a class="brand" href="/" aria-label="Ressoa, início">
      ${MARCA_SVG}
      <span><span class="r">R</span>essoa</span>
    </a>
    <div class="nav-links">
      <a href="como-funciona.html">Como funciona</a>
      <a href="o-que-nao-faz.html">O que não faz</a>
      <a href="privacidade-simples.html">Privacidade</a>
      <a class="btn btn-primary" href="/#baixar">Baixar o app</a>
    </div>
  </div>
</nav>`;
}

/** A trilha das jornadas, com a atual marcada. */
function trilha(atual) {
  const itens = [
    `<a href="como-funciona.html"${atual === 'indice' ? ' aria-current="page"' : ''}>Todas</a>`,
    ...JORNADAS.map(
      (j) =>
        `<a href="${j.id}.html"${atual === j.id ? ' aria-current="page"' : ''}>${j.titulo}</a>`
    ),
  ];
  return `<div class="trilha">${itens.join('')}</div>`;
}

function rodape() {
  return `
${rodapeDaHome()}
</body>
</html>
`;
}

/** Um bloco de função: problema, passos, o que recebe e a ressalva. */
function funcao(f) {
  return `
      <article class="func">
        <h3>${f.titulo}</h3>
        <p class="problema">${f.problema}</p>
        <ol class="passos">
          ${f.passos.map((p) => `<li>${p}</li>`).join('\n          ')}
        </ol>
        <p class="recebe"><strong>Você recebe:</strong> ${f.recebe}</p>
        <p class="ressalva">${f.ressalva}</p>
      </article>`;
}

function paginaDaJornada(j) {
  const descricao = `${j.resumo} Passo a passo de cada função do Ressoa nesta etapa da apuração.`;
  return (
    cabeca({ titulo: j.titulo, descricao, arquivo: `${j.id}.html` }) +
    navegacao() +
    `
<main class="wrap" style="padding-top:120px;padding-bottom:80px">
  ${trilha(j.id)}
  <section class="jornada">
    <span class="eyebrow">${j.titulo}</span>
    <h2>${j.resumo}</h2>
    <p class="lead">${j.lead}</p>
    ${j.funcoes.map(funcao).join('\n')}
  </section>
  <a class="voltar-topo" href="como-funciona.html">← todas as etapas</a>
</main>` +
    rodape()
  );
}

function paginaIndice() {
  const cartoes = JORNADAS.map(
    (j) => `
      <a class="card hl" href="${j.id}.html" style="display:block">
        <span class="eyebrow">${j.titulo}</span>
        <h3 style="margin:12px 0 8px">${j.resumo}</h3>
        <p style="color:var(--text-2);margin:0">${j.funcoes.length} ${
          j.funcoes.length === 1 ? 'função documentada' : 'funções documentadas'
        }</p>
      </a>`
  ).join('\n');

  const total = JORNADAS.reduce((t, j) => t + j.funcoes.length, 0);

  return (
    cabeca({
      titulo: 'Como funciona',
      descricao: `Passo a passo das ${total} funções do Ressoa, na ordem do dia do repórter: antes da entrevista, durante, depois, sempre e em equipe.`,
      arquivo: 'como-funciona.html',
    }) +
    navegacao() +
    `
<main class="wrap" style="padding-top:120px;padding-bottom:80px">
  ${trilha('indice')}
  <section class="jornada">
    <span class="eyebrow">Como funciona</span>
    <h2>As ${total} funções, na ordem do seu dia.</h2>
    <p class="lead">
      Este é o manual do Ressoa, organizado como a apuração acontece, e não como o aplicativo foi
      construído. Cada função tem o problema que resolve, os passos para usar, o que você recebe e
      a ressalva honesta: o que ela não faz, ou onde ela erra.
    </p>
    <div class="mini-grid" style="margin-top:26px">
      ${cartoes}
    </div>
  </section>
</main>` +
    rodape()
  );
}

function paginaSolta(p) {
  const blocos = p.blocos
    .map(
      (b) => `
      <article class="func">
        <h3>${b.titulo}</h3>
        <p class="problema" style="margin-bottom:0">${b.texto}</p>
      </article>`
    )
    .join('\n');

  return (
    cabeca({ titulo: p.titulo, descricao: p.descricao, arquivo: p.arquivo }) +
    navegacao() +
    `
<main class="wrap" style="padding-top:120px;padding-bottom:80px">
  <section class="jornada">
    <span class="eyebrow">${p.eyebrow}</span>
    <h2>${p.h1}</h2>
    <p class="lead">${p.lead}</p>
    ${blocos}
  </section>
  <a class="voltar-topo" href="como-funciona.html">← como funciona</a>
</main>` +
    rodape()
  );
}

let escritos = 0;
function escrever(arquivo, html) {
  writeFileSync(arquivo, html, 'utf8');
  escritos++;
  console.log(`  ${arquivo}`);
}

console.log('Gerando as páginas:');
escrever('como-funciona.html', paginaIndice());
for (const j of JORNADAS) escrever(`${j.id}.html`, paginaDaJornada(j));
for (const p of PAGINAS) escrever(p.arquivo, paginaSolta(p));

const total = JORNADAS.reduce((t, j) => t + j.funcoes.length, 0);
console.log(`\n${escritos} páginas, ${total} funções documentadas.`);
