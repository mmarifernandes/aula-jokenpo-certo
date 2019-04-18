/* const maos = {
    pedra: 'pedra',
    papel: 'papel',
    tesoura: 'tesoura',
    largarto: 'largarto',
    spock: 'spock'
};
*/
// console.log(maos);

const jokenpo = {
    maoJogadorum: null,  //propriedade: chave/valor
    maoJogadordois: null,
    maos: {
        pedra: {
            vence: {
                tesoura: 'quebra',
                largarto: 'esmaga'
            }
        },
        papel: {
            vence: {
                pedra: 'embrulha',
                spock: 'refuta'
            }
        },
        tesoura: {
            vence: {
                papel: 'corta',
                largarto: 'decapita'

            }
        },
        largarto: {
            vence: {
                papel: 'come',
                spock: 'envenena'
            }
        },
        spock: {
            vence: {
                pedra: 'vaporiza',
                tesoura: 'quebra'
            }
        }
    },
    jogar: function() { //método: propriedade c/ function
        if (this.maoJogadorum === null) {
            // lançar exceção
            throw new Error('Jogador 1 não escolheu uma mão');
        }
        if (this.maoJogadorDois === null) {
            throw new Error('Jogador 2 não escolheu uma mão');
        }
        if (this.maoJogadorum === this.maoJogadordois) {
            return {
                vencedor: 0,
                texto: 'Empatou'
            };
        }
        const mao1 = this.maoJogadorum;
        const mao2 = this.maoJogadordois;
        if (jokenpo['maos'][mao1]['vence'][mao2]) {
            return {
                vencedor: 1,
                texto: `${mao1} ${jokenpo['maos'][mao1]['vence'][mao2]} ${mao2}`
            };
        } else {
            return {
                vencedor: 2,
                texto: `${mao2} ${jokenpo['maos'][mao2]['vence'][mao1]} ${mao1}`
            };
        }
    }
};

// lógica para o humano selecionar uma mão
const botaoJogar = document.querySelector('button');
const divHumano = document.querySelector('div#humano');
let maoSelecionada = null;
const selecionarMao = function(e){
    console.log(e.target); //consoles: debug, warn, dir, table
    if(e.target.classList.contains('mao')){
        if(e.target === maoSelecionada){ //desmarcar a mão
            e.target.classList.remove('selecionada');
            maoSelecionada= null;
        } else{
            if(maoSelecionada !== null){
            maoSelecionada.classList.remove('selecionada');
            }
            maoSelecionada = e.target;
            maoSelecionada.classList.add('selecionada');
        }
        if(maoSelecionada){
            botaoJogar.removeAttribute('disabled');
        }
    }
};
divHumano.addEventListener('click',selecionarMao);

// botão jogar
//função anonima par ao evento //CALLBACK
botaoJogar.addEventListener('click', function(e) {
    document.querySelectorAll('div#computador img.mao').forEach(function(elemento){
        elemento.classList.add('carregando');
    });
    //.forEach((img) => el.classList.add('carregando'));
    //arrow function^^^^^
    jokenpo.maoJogadorum=maoSelecionada.getAttribute('alt');
    console.dir(jokenpo)
const maos = ['pedra', 'papel',
    'tesoura', 'largarto', 'spock'
];
const indice = Math.floor(Math.random() * 5);
jokenpo.maoJogadordois = maos[indice];

setTimeout(function () {
document
    .querySelectorAll('div#computador img.mao')
    .forEach((img) => img.classList.remove('carregando'));

document
    .querySelector(
        `div#computador img[alt=${jokenpo.maoJogadordois}]`
    ).classList.add('selecionada');

const resp = jokenpo.jogar();
document.querySelector('div#resultado')
    .textContent = resp.texto;
}, 3000);

});
// lógica para o computador selecionar uma mão
// apresentar quem ganhou











/*
// travesing /navegando na estrutura vv
console.log(jokenpo.maos.largarto.vence.spock);
// ou
console.log(jokenpo['maos']['largarto']['vence']['spock']);

// const mao1='largarto';
// const mao2='spock';
// ou
console.log(jokenpo['maos'][mao1]['vence'][mao2]);
console.log(jokenpo['maos'][mao2]['vence'][mao1]);

for (const m of Object.keys(jokenpo.maos)) {
    console.log(m);
    for (const v of Object.keys(jokenpo.maos[m].vence)) {
        console.log(m, jokenpo.maos[m].vence[v], v);
    }
}
*/
