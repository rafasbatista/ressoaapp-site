/**
 * O que o site documenta: cada função do Ressoa, com passo a passo.
 *
 * Conteúdo separado do desenho de propósito. Escrever 30 funções à mão em HTML
 * garantiria que a quinta ficasse diferente da vigésima, e um site de manual
 * precisa da mesma forma em todo lugar para a pessoa aprender a ler uma vez.
 *
 * REGRA EDITORIAL: toda função tem uma `ressalva`. Se um recurso não tem limite
 * que valha dizer, ou ele é trivial ou não foi pensado o bastante. Site de
 * produto que só elogia o produto não é lido por jornalista.
 *
 * As jornadas seguem o dia do repórter, e não a nossa arquitetura.
 */

export const JORNADAS = [
  {
    id: 'antes',
    titulo: 'Antes',
    resumo: 'A pauta chega. O que um bom editor faria com você antes de sair.',
    lead:
      'A pauta que chega é quase sempre um assunto, não uma história. Aqui o Ressoa faz o que a redação não tem mais tempo de fazer: traduz o assunto em história, aponta a pergunta que a matéria precisa responder e prepara você para a fonte que vai desconversar.',
    funcoes: [
      {
        titulo: 'Preparar a pauta',
        problema:
          'Você recebe uma linha do editor no WhatsApp e sai sem saber por onde começar.',
        passos: [
          'Na tela inicial, toque em <strong>Preparar uma pauta</strong>.',
          'Cole a pauta como ela chegou. Pode ser a mensagem do editor, um trecho de ofício ou o assunto escrito do seu jeito.',
          'Toque em <strong>Preparar a pauta</strong> e espere alguns segundos.',
        ],
        recebe:
          'Sete peças: a história por trás do assunto, a pergunta que a matéria precisa responder, o que já se sabe, o que falta apurar, quem ouvir por papel, as perguntas em escada e as fugas prováveis da fonte com a frase que traz a conversa de volta.',
        ressalva:
          'O Ressoa não conhece o seu caso. Tudo que ele escreve sobre a história é hipótese a checar, nunca fato, e ele é proibido de afirmar qualquer coisa que não esteja na pauta que você colou.',
      },
      {
        titulo: 'A colinha',
        problema:
          'O dossiê é ótimo na mesa e inútil no semáforo, com a fonte esperando na porta.',
        passos: [
          'Abra a pauta e toque na aba <strong>Colinha</strong>.',
          'São cinco linhas em letra grande, mais a pergunta difícil destacada.',
        ],
        recebe: 'O que não pode faltar, numa olhada, sem rolar tela.',
        ressalva:
          'A colinha fica guardada no seu aparelho e abre sem internet, de propósito. Na porta da fonte quase nunca tem sinal, e colinha que precisa carregar é colinha que não existe na hora que serve.',
      },
      {
        titulo: 'Modo TV na preparação',
        problema:
          'Imagem que não foi pensada antes da saída se perde para sempre.',
        passos: [
          'Ao criar a pauta, marque <strong>Modo TV</strong>.',
          'O dossiê ganha três peças a mais.',
        ],
        recebe:
          'Que imagens fazer, onde fica a passagem e o que ela precisa cumprir, e que tipo de resposta se sustenta sozinha em quinze segundos no ar.',
        ressalva:
          'O app diz o que a passagem precisa <em>prometer</em>, nunca a frase para você ler. Cabeça e passagem vão ao ar na sua voz, e escrevê-las seria escrever jornalismo.',
      },
      {
        titulo: 'Roteiro de perguntas',
        problema:
          'No meio da entrevista você esquece a pergunta que era o motivo de estar ali.',
        passos: [
          'Na tela inicial, escreva as perguntas no bloco <strong>Roteiro da entrevista</strong>.',
          'Durante a conversa, vá tocando para marcar as que já foram feitas.',
        ],
        recebe: 'O roteiro fica salvo junto da gravação daquele dia.',
        ressalva:
          'O roteiro é mais simples que a pauta e serve para quem vai sair correndo. Se der tempo de preparar direito, a pauta entrega muito mais.',
      },
    ],
  },
  {
    id: 'durante',
    titulo: 'Durante',
    resumo: 'A entrevista acontecendo, com o telefone no bolso.',
    lead:
      'O que o aplicativo faz enquanto você está com a fonte na frente. A regra aqui é uma só: nada pode exigir que você olhe para a tela em vez de olhar para a pessoa.',
    funcoes: [
      {
        titulo: 'Gravar com a tela apagada',
        problema:
          'Aplicativo que para de gravar quando a tela apaga perde a entrevista inteira.',
        passos: [
          'Toque no botão redondo <strong>Ressoar</strong>, no centro da barra de baixo.',
          'Guarde o telefone. Pode apagar a tela, atender o WhatsApp, usar a câmera.',
          'Volte e toque em <strong>Finalizar</strong> quando acabar.',
        ],
        recebe: 'O áudio inteiro, salvo no aparelho.',
        ressalva:
          'O iPhone não deixa nenhum aplicativo gravar uma ligação por dentro enquanto ela acontece. Para ligação, use um segundo aparelho no viva-voz ou importe o áudio depois.',
      },
      {
        titulo: 'Entrevista, ligação ou coletiva',
        problema:
          'Uma coletiva de uma hora e uma entrevista de dez minutos não pedem o mesmo tratamento.',
        passos: [
          'Antes de gravar, escolha o tipo no topo da tela inicial.',
        ],
        recebe:
          'A gravação já nasce com nome e tipo, e os recursos que vêm depois sabem com o que estão lidando.',
        ressalva:
          'Escolher errado não quebra nada: você pode renomear depois, e todos os recursos funcionam em qualquer tipo.',
      },
      {
        titulo: 'Marcar o momento, já dizendo para quê',
        problema:
          'Você marca um ponto da entrevista e, ao voltar, não lembra por que marcou.',
        passos: [
          'Com a gravação rodando, toque em <strong>aspa</strong>, <strong>sonora</strong> ou <strong>voltar aqui</strong>.',
          'Marque quantas vezes quiser, sem parar a conversa.',
        ],
        recebe:
          'Na tela da gravação, os momentos aparecem com o tipo e o minuto, e um toque leva o áudio direto para lá.',
        ressalva:
          'A marca guarda o instante em que você tocou, então costuma cair um pouco depois da frase. Ouça alguns segundos antes.',
      },
      {
        titulo: 'Transcrição ao vivo',
        problema:
          'Às vezes você precisa ler o que está sendo dito enquanto a pessoa fala.',
        passos: [
          'Na tela inicial, entre em <strong>Ao vivo</strong>.',
          'Fale ou deixe a fonte falar: o texto vai aparecendo.',
          'Ao fim, salve em Gravações.',
        ],
        recebe: 'O texto acompanhando a fala, e a gravação salva ao final.',
        ressalva:
          'A transcrição ao vivo erra mais que a normal, porque decide na hora, sem ouvir a frase inteira. Para citar alguém, use a transcrição feita depois.',
      },
      {
        titulo: 'Importar áudio',
        problema:
          'A entrevista foi gravada no WhatsApp, no gravador do celular ou por um colega.',
        passos: [
          'Na aba <strong>Gravações</strong>, toque em <strong>Importar áudio</strong>.',
          'Escolha o arquivo.',
        ],
        recebe:
          'O áudio entra no acervo como qualquer gravação e recebe todos os recursos.',
        ressalva:
          'Áudio importado chega sem a duração; ela é preenchida quando você abre a gravação pela primeira vez.',
      },
    ],
  },
  {
    id: 'depois',
    titulo: 'Depois',
    resumo: 'A entrevista acabou e a matéria fecha hoje.',
    lead:
      'É aqui que o Ressoa faz mais. A ordem da tela não é por acaso: primeiro o que ainda dá para consertar, depois o que continua valendo daqui a uma hora.',
    funcoes: [
      {
        titulo: 'Transcrever, com ou sem sinal',
        problema:
          'Você entrevistou dentro de um prédio público, no interior, e não tem rede nenhuma.',
        passos: [
          'Abra a gravação e toque em <strong>Transcrever agora</strong>.',
          'Se houver internet, o texto fica pronto em alguns segundos.',
          'Se não houver, a gravação entra na fila. Pode fechar o aplicativo.',
        ],
        recebe:
          'A transcrição em português do Brasil, dividida em falas com o minuto de cada uma. O que ficou na fila transcreve sozinho quando o sinal volta, uma por vez.',
        ressalva:
          'Só vai para a fila o que o tempo conserta. Cota do mês esgotada, sessão vencida e arquivo grande demais aparecem como erro na hora, porque esperar não resolve nenhum dos três.',
      },
      {
        titulo: 'Quem falou o quê',
        problema:
          'A transcrição vem em bloco e você não sabe onde acaba a sua pergunta e começa a resposta.',
        passos: [
          'Na transcrição, toque no rótulo ao lado de uma fala.',
          'Escolha <strong>Repórter</strong>, <strong>Fonte</strong> ou um nome da sua agenda.',
          'As falas seguintes recebem o mesmo rótulo até a próxima troca.',
        ],
        recebe:
          'A transcrição separada por quem falou, e todas as aspas passam a sair com o nome de quem disse.',
        ressalva:
          'A marcação é sua, e não automática. A separação por voz erra bastante em áudio de rua, e um nome errado numa aspa é pior que nenhum nome.',
      },
      {
        titulo: 'Revisão assistida',
        problema:
          'Nome próprio e termo da região são o que o reconhecimento de fala mais erra.',
        passos: [
          'Abra a gravação transcrita e vá até <strong>Revisão assistida</strong>.',
          'Cada sugestão mostra a palavra original e a correção provável.',
          'Aceite ou rejeite uma por uma.',
        ],
        recebe: 'A troca aplicada no texto, só onde você aprovou.',
        ressalva:
          'A revisão só olha os trechos em que a própria transcrição ficou insegura. Ela não relê a entrevista inteira, e nunca troca nada sem você mandar.',
      },
      {
        titulo: 'Marcar as aspas',
        problema:
          'A citação está lá no meio de quarenta minutos e você vai ter que caçar de novo.',
        passos: [
          'Na transcrição, toque no ícone de marcador ao lado da fala.',
          'A fala vai para a seção <strong>Aspas</strong>.',
        ],
        recebe:
          'Uma lista das citações escolhidas, cada uma com botão para ouvir o segundo exato e para copiar já formatada.',
        ressalva:
          'Existe um botão de sugerir aspas com IA, e ele é um atalho, não um juízo. Quem decide o que vira citação é você.',
      },
      {
        titulo: 'A aspa que vira prova',
        problema: 'A fonte diz que foi tirada de contexto.',
        passos: [
          'Na aspa marcada, toque em <strong>Gerar prova desta citação</strong>.',
          'Compartilhe o documento, e o áudio junto se quiser.',
        ],
        recebe:
          'Um documento com a citação, quem disse, o momento no áudio, de onde veio e um código de verificação calculado sobre esse conjunto.',
        ressalva:
          'A prova sai com o nome real mesmo quando a fonte está protegida, porque o código é calculado sobre o texto verdadeiro. O app avisa antes e deixa a decisão com você.',
      },
      {
        titulo: 'Cartão para redes',
        problema:
          'Você quer publicar a declaração e não tem tempo de abrir editor de imagem.',
        passos: [
          'Na aspa marcada, toque em <strong>Cartão para redes</strong>.',
          'Compartilhe direto para o Instagram, o X ou onde quiser.',
        ],
        recebe:
          'Uma imagem de 1080 por 1080 com a citação, quem disse, a origem e a marca do Ressoa.',
        ressalva:
          'A letra diminui sozinha em citação comprida, e citação muito longa é cortada com reticências. Cartão que vaza pela borda é pior que cartão resumido.',
      },
      {
        titulo: 'O que é notícia aqui',
        problema:
          'O evento acabou, a matéria vai ao ar agora e você precisa saber o que é notícia ali.',
        passos: [
          'Na gravação transcrita, toque em <strong>Achar os ganchos</strong>.',
        ],
        recebe:
          'Até três trechos, cada um com o critério dito na cara: admitiu, número inédito, fato novo, promessa com prazo, conflito ou contradiz o que disse antes. E quais servem de sonora, com a duração real.',
        ressalva:
          'O app aponta o que é notícia. Ele não escreve a matéria, nem o título, nem a cabeça, nem a passagem.',
      },
      {
        titulo: 'Espelho do pacote de TV',
        problema:
          'Meia hora até o link e três decisões para tomar ao mesmo tempo.',
        passos: [
          'Ache os ganchos primeiro.',
          'Toque em <strong>Montar espelho de TV</strong>.',
        ],
        recebe:
          'O que a cabeça precisa prometer, as sonoras com entrada e saída, onde fica a passagem, que imagens fazer e a ordem do pacote, do abre ao fecha.',
        ressalva:
          'O app avisa quando a soma das sonoras passa da metade do pacote, porque aí ele vira colagem de falas.',
      },
      {
        titulo: 'Ata da coletiva',
        problema:
          'Uma hora de coletiva, dez veículos perguntando, e você não vai reouvir tudo.',
        passos: [
          'Na gravação transcrita, toque em <strong>Montar a ata</strong>.',
          'Acompanhe o progresso: coletiva longa é analisada por partes.',
        ],
        recebe:
          'Os pontos-chave, os números citados e os prazos, cada item com o minuto exato. Um toque leva o áudio para lá.',
        ressalva:
          'Uma coletiva de uma hora leva alguns minutos para ser analisada, porque é dividida em blocos. E se algum bloco falhar, o app diz que a ata está incompleta em vez de fingir que está inteira.',
      },
      {
        titulo: 'O que faltou perguntar',
        problema:
          'O pior momento da profissão é chegar na redação e perceber que faltou a pergunta que importava.',
        passos: [
          'Ligue a gravação à pauta, tocando no nome dela na tela da gravação.',
          'Transcreva. A conferência roda sozinha.',
        ],
        recebe:
          'Quantas das perguntas preparadas foram feitas, quais ficaram de fora e, principalmente, em quais a fonte desconversou, com o minuto de cada evasiva.',
        ressalva:
          'Este é o único recurso que só existe porque você preparou a pauta aqui e gravou aqui. Sem as duas pontas, nenhuma ferramenta sabe o que era para perguntar.',
      },
      {
        titulo: 'Promessas com prazo',
        problema:
          'A autoridade promete, o prazo vence meses depois e ninguém lembra de cobrar.',
        passos: [
          'Na gravação transcrita, toque em <strong>Achar promessas</strong>.',
          'As promessas vão para a tela <strong>Promessas</strong>, em ordem de vencimento.',
          'Autorize o aviso quando o app pedir.',
        ],
        recebe:
          'Cada compromisso com a data calculada, o nome de quem prometeu e a fala original. Um aviso chega dois dias antes do vencimento.',
        ressalva:
          'O app é conservador: data solta sem alguém se comprometendo não vira promessa. Cobrar o que ninguém prometeu custa a sua credibilidade, e isso é pior que perder uma promessa.',
      },
      {
        titulo: 'A cobrança pronta',
        problema:
          'O prazo venceu e você ainda tem que reouvir a gravação para escrever a mensagem.',
        passos: [
          'Na tela <strong>Promessas</strong>, toque em <strong>Cobrar</strong>.',
          'Cole no e-mail ou no WhatsApp da assessoria.',
        ],
        recebe:
          'A fala original, a data da entrevista, o prazo citado, há quantos dias venceu e a pergunta pronta.',
        ressalva:
          'O que sai daí é uma pergunta com o fato datado, não um texto de matéria. Perguntar não é redigir.',
      },
      {
        titulo: 'Proteção de fonte',
        problema:
          'Quem falou com você arriscou o emprego, e o nome não pode sair num arquivo esquecido.',
        passos: [
          'Na gravação, vá em <strong>Proteção de fonte</strong>.',
          'Escreva o nome como ele aparece na transcrição e por qual apelido ele deve ser trocado.',
          'Toque em <strong>O que mais pode identificar?</strong> para a segunda camada.',
        ],
        recebe:
          'O nome trocado em tudo que sai daqui, inclusive no rótulo de quem falou, e uma lista dos trechos que ainda entregariam a pessoa mesmo sem o nome.',
        ressalva:
          'O aviso de identificação aponta e explica, e nunca corta nada sozinho. Cortar demais destrói a apuração, cortar de menos expõe a fonte, e as duas decisões são de quem assina.',
      },
      {
        titulo: 'Exportar',
        problema: 'O material precisa sair do celular e chegar ao editor.',
        passos: [
          'Na gravação, escolha o formato no fim da tela.',
        ],
        recebe:
          'Texto puro para colar em qualquer lugar, documento formatado que abre no Word e no Google Docs, e planilha das aspas com quem disse, o minuto e a origem, para quem trabalha no Sheets.',
        ressalva:
          'Tudo que sai por aqui já vai com a proteção de fonte aplicada. Este é o ponto único de saída, e é por isso que a proteção mora nele.',
      },
    ],
  },
  {
    id: 'sempre',
    titulo: 'Sempre',
    resumo: 'O acervo trabalhando por você, mesmo quando você não pede.',
    lead:
      'Todo jornalista acumula entrevistas e depois não consegue usar nenhuma. Aqui o acervo deixa de ser um arquivo morto e vira a sua maior vantagem sobre qualquer ferramenta genérica: nenhuma delas estava naquela entrevista de março.',
    funcoes: [
      {
        titulo: 'O acervo que avisa sozinho',
        problema:
          'Você não lembra que o mesmo secretário disse o contrário no ano passado, e não tem como saber que precisa perguntar.',
        passos: [
          'Transcreva a entrevista normalmente.',
          'Se houver algo, o aviso aparece no topo da tela da gravação, sem você pedir.',
        ],
        recebe:
          'Aviso quando a fonte contradiz o que ela mesma disse antes, com a fala antiga e a data, e quando uma promessa já tinha sido feita em outra entrevista.',
        ressalva:
          'É o único recurso que fala sem ser chamado, e ele só funciona sobre o que já está no seu acervo, com quem falou marcado. Quanto mais entrevistas guardadas, mais ele enxerga.',
      },
      {
        titulo: 'Pergunte às suas entrevistas',
        problema:
          'A resposta está em alguma das suas gravações e você não lembra em qual, nem com que palavras.',
        passos: [
          'Abra <strong>Pergunte</strong> e escreva em linguagem normal.',
          'Filtre por fonte ou por período, se vierem muitos resultados.',
          'Toque num resultado para abrir a gravação já tocando no ponto exato.',
        ],
        recebe:
          'Os trechos mais relevantes de todo o acervo, com a gravação e o minuto de cada um.',
        ressalva:
          'A busca só enxerga o que já foi transcrito. Gravação parada em "a transcrever" não aparece.',
      },
      {
        titulo: 'Dossiê da fonte',
        problema:
          'Você vai entrevistar de novo alguém que já entrevistou três vezes e não lembra o que ela disse.',
        passos: [
          'Abra <strong>Minhas fontes</strong> e toque na pessoa.',
        ],
        recebe:
          'Tudo que aquela pessoa já disse a você, entrevista por entrevista, com datas e as aspas que você marcou.',
        ressalva:
          'Roda inteiro no aparelho, sem consultar servidor e sem custo. Depende de você ter marcado quem falou.',
      },
      {
        titulo: 'Detector de contradição',
        problema: 'A fonte mudou de versão entre uma entrevista e outra.',
        passos: [
          'No dossiê da fonte, toque em <strong>Procurar contradições</strong>.',
        ],
        recebe:
          'Os pares de falas que se contradizem, com a explicação e a data de cada uma.',
        ressalva:
          'Precisa de pelo menos duas entrevistas em datas diferentes com a mesma pessoa. Com uma só não há o que comparar.',
      },
      {
        titulo: 'Minhas fontes',
        problema:
          'Contato, cargo e histórico de cada fonte espalhados entre a agenda, o WhatsApp e a memória.',
        passos: [
          'Abra <strong>Minhas fontes</strong> pelo Perfil.',
          'Toque em <strong>Puxar da agenda do telefone</strong> ou preencha na mão.',
          'Complete cargo, órgão e as suas anotações.',
        ],
        recebe:
          'A sua agenda de fontes, ligada ao acervo: cada uma leva ao que já disse a você.',
        ressalva:
          'O seletor da agenda devolve só o contato que você escolher. O aplicativo nunca lê a sua lista inteira.',
      },
      {
        titulo: 'Documento por foto',
        problema:
          'O ofício que sustenta a matéria está em papel, e digitar é o que faz a apuração parar.',
        passos: [
          'Na aba <strong>Documentos</strong>, fotografe ou escolha uma imagem.',
          'Espere a leitura.',
          'Ligue o documento a uma pauta, se ele pertence a uma.',
        ],
        recebe:
          'O texto completo, os dados factuais separados (valores, prazos, nomes de órgão) e a possibilidade de transformar cada dado em citação.',
        ressalva:
          'A foto do documento não é guardada na nuvem, só o texto extraído. Guarde o papel.',
      },
    ],
  },
  {
    id: 'equipe',
    titulo: 'Em equipe',
    resumo: 'A redação trabalhando junto, sem abrir o acervo de ninguém.',
    lead:
      'O modo redação existe para o fluxo real de uma equipe: o editor prepara e distribui, o repórter recebe no telefone e vai para a rua. O que não existe, e é decisão de produto, é qualquer forma de o time ver as entrevistas alheias.',
    funcoes: [
      {
        titulo: 'Criar a redação e convidar',
        problema:
          'A equipe inteira refazendo a mesma preparação, cada um do seu jeito.',
        passos: [
          'No Perfil, abra <strong>Redação</strong> e crie uma com o nome da equipe.',
          'Convide pelo e-mail de cada pessoa.',
          'Avise a equipe você mesmo, pelo canal de sempre.',
        ],
        recebe:
          'O convite fica guardado e vale no primeiro acesso com aquele e-mail, mesmo para quem ainda não tem conta no Ressoa.',
        ressalva:
          'O aplicativo não envia a mensagem de convite. Quem avisa é você, e isso é dito na tela para ninguém ficar esperando um e-mail que não vai sair.',
      },
      {
        titulo: 'Compartilhar uma pauta',
        problema:
          'O editor prepara a pauta e ela morre no computador dele.',
        passos: [
          'Abra a pauta e toque no nome da redação.',
          'Ela aparece no aplicativo de todo mundo do time.',
        ],
        recebe:
          'A equipe recebe o dossiê e a colinha, e cada repórter pode gravar sob aquela pauta, o que faz o "o que faltou perguntar" funcionar para ele também.',
        ressalva:
          'Pauta compartilhada é só leitura para quem não a criou, porque pauta que qualquer um reescreve é pauta em que ninguém confia. As suas marcações ficam no seu aparelho.',
      },
      {
        titulo: 'O que o time NÃO vê',
        problema:
          'Compartilhar apuração não pode significar abrir a fonte de alguém para a redação inteira.',
        passos: [
          'Nada a fazer: é assim por padrão e não há como mudar.',
        ],
        recebe:
          'O time recebe as pautas que você compartilhar. O áudio, a transcrição, as suas aspas, as suas fontes e os seus documentos continuam só seus.',
        ressalva:
          'Quem falou com você não falou com a redação inteira. Para passar uma citação adiante, use a exportação ou o cartão, com a proteção de fonte aplicada.',
      },
    ],
  },
];

/** As páginas soltas, fora das jornadas. */
export const PAGINAS = [
  {
    arquivo: 'o-que-nao-faz.html',
    titulo: 'O que o Ressoa não faz',
    descricao:
      'A lista do que este aplicativo se recusa a fazer, e por quê. Zero texto jornalístico gerado por IA.',
    eyebrow: 'A linha',
    h1: 'Aqui, quem escreve é <span class="grad">você</span>.',
    lead:
      'Quase todo produto de IA para jornalismo promete escrever por você. O Ressoa promete o contrário, e esta página existe para você poder cobrar essa promessa.',
    blocos: [
      {
        titulo: 'Não escreve matéria, lead, título nem cabeça',
        texto:
          'Nem um parágrafo. O aplicativo aponta o que é notícia, organiza, encontra e prova. A frase publicada é sua, e é ela que carrega a sua assinatura e o seu risco.',
      },
      {
        titulo: 'Não escreve a passagem nem a cabeça do VT',
        texto:
          'No modo TV ele diz o que a cabeça precisa prometer e o que a passagem precisa cumprir. Nunca a frase para ler no ar, porque ela sai na voz de alguém.',
      },
      {
        titulo: 'Não inventa fala',
        texto:
          'Tudo que aparece como citação é o que a fonte disse, palavra por palavra, com o áudio no segundo exato. Quando um recurso resume ou rotula, o texto original fica visível logo abaixo.',
      },
      {
        titulo: 'Não afirma o que não sabe',
        texto:
          'Na preparação de pauta, o que o aplicativo não sabe vira buraco a apurar ou pergunta, nunca afirmação. Fato inventado num dossiê vira pergunta com pressuposto falso feita na cara da fonte.',
      },
      {
        titulo: 'Não decide o que anonimizar',
        texto:
          'A troca de nome é feita por busca exata, do jeito que você mandou, e não por IA. O aviso de identificação indireta aponta e explica, mas nunca corta nada sozinho.',
      },
      {
        titulo: 'Não treina IA com o seu material',
        texto:
          'Nenhuma entrevista, nenhum documento e nenhuma anotação sua alimenta modelo nenhum.',
      },
      {
        titulo: 'Não guarda o seu áudio na nuvem',
        texto:
          'O áudio fica no aparelho que gravou. Ele sobe temporariamente só para transcrever e é apagado em seguida. Quem protege fonte entende por quê.',
      },
      {
        titulo: 'Não tem rastreador, anúncio nem análise de comportamento',
        texto:
          'O aplicativo não sabe o que você está apurando, e é assim que tem de ser.',
      },
    ],
  },
  {
    arquivo: 'privacidade-simples.html',
    titulo: 'Privacidade em português',
    descricao:
      'O que o Ressoa guarda, onde guarda e o que nunca sai do seu aparelho, explicado sem juridiquês.',
    eyebrow: 'Privacidade',
    h1: 'O que fica <span class="grad">com você</span>, e o que sai daí.',
    lead:
      'Esta página explica em linguagem normal. Ela não substitui a política de privacidade, que é o documento com valor legal, mas é ela que responde o que você realmente quer saber.',
    blocos: [
      {
        titulo: 'O áudio fica no seu aparelho',
        texto:
          'Ele sobe para o servidor só no momento de transcrever, por um endereço temporário, e é apagado assim que a transcrição termina. Trocar de telefone não leva os áudios junto.',
      },
      {
        titulo: 'O texto sincroniza, para você não perder',
        texto:
          'Transcrições, aspas, fontes, documentos, pautas e promessas ficam na sua conta, para reaparecerem se você trocar de aparelho ou reinstalar.',
      },
      {
        titulo: 'A foto do documento não é guardada',
        texto:
          'Só o texto que foi extraído dela. A imagem some depois da leitura.',
      },
      {
        titulo: 'As notas da aba Escrever não sincronizam',
        texto:
          'Elas ficam só no aparelho, de propósito. É onde muita gente escreve o que ainda não quer em lugar nenhum.',
      },
      {
        titulo: 'Ninguém do seu time vê as suas entrevistas',
        texto:
          'No modo redação, o que se compartilha é a pauta. Áudio, transcrição, aspas, fontes e documentos continuam só seus.',
      },
      {
        titulo: 'Você pode apagar tudo, de verdade',
        texto:
          'A exclusão da conta remove gravações, transcrições, aspas, documentos e fontes, e limpa os áudios guardados no aparelho. Não existe lixeira: exporte antes o que precisar.',
      },
      {
        titulo: 'Dúvida ou pedido sobre os seus dados',
        texto:
          'Escreva para ressoaapp@rafasbatista.app.br. O compromisso é responder em até 15 dias.',
      },
    ],
  },
];
