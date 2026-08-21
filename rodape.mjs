import { readFileSync } from 'node:fs';

/**
 * O rodapé das páginas geradas vem da PRÓPRIA home.
 *
 * A primeira versão tinha uma cópia do rodapé dentro do gerador, e ela
 * divergiu da home na primeira vez que um link foi acrescentado. Rodapé
 * diferente entre páginas faz o site parecer dois sites.
 *
 * Lendo do index.html não existe cópia para envelhecer: mudou lá, mudou aqui na
 * próxima geração. Se um dia o index perder o rodapé, isto falha alto, e não em
 * silêncio com uma página sem rodapé nenhum.
 */
export function rodapeDaHome() {
  const home = readFileSync('index.html', 'utf8');
  const m = home.match(/<footer[\s\S]*?<\/footer>/);
  if (!m) {
    throw new Error('Não achei o <footer> no index.html. O rodapé das páginas sai de lá.');
  }
  return m[0];
}
