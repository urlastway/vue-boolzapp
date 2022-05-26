const app = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        contacts: [
            {
                name: 'Michele',
                img: 'img/avatar_1.jpg',
                time: '12:00',
                mex__contact: [
                        'Ciao come stai?', 'Tutto bene.',
                ],
                mex__user: ['Bene, tu?',],

            },
            {
                name:'Fabio',
                img: 'img/avatar_2.jpg',
                time: '12:00',
                mex__contact: [
                    'hai finito di fare la doccia???', 'ok',
                ],
                mex__user: ['Si, sto scendendo.',],     
            },
            {
                name: 'Samuele',
                img: 'img/avatar_3.jpg',
                time: '12:00',
                mex__contact: [
                    'Hai comprato il pane?', 'Prendi anche le fragole.',
                ],
                mex__user: ['Sto andando in cassa!',],     
            },
            {
                name: 'Alessandro B.',
                img: 'img/avatar_4.jpg',
                time: '12:00',
                mex__contact: [
                    'Sta sera che facciamo?', 'Va bene, ci vediamo alle 18:45.',
                ],
                mex__user: ['Andiamo a cena fuori?',],     
            },
            {
                name: 'Alessandro L.',
                img: 'img/avatar_5.jpg',
                time: '12:00',
                mex__contact: [
                    'A che ora è la festa da Mirco?', 'Faccio un po tardi.',
                ],
                mex__user: ['Alle 20:00', ],    
            },
            {
                name: 'Claudia',
                img: 'img/avatar_6.jpg',
                time: '12:00',
                mex__contact: [
                    'Che cosa ti ha detto Marica?', 'Incolpala!',
                ],
                mex__user: ['Che si sente in colpa.', ],    
            },
            {
                name: 'Federico',
                img: 'img/avatar_7.jpg',
                time: '12:00',
                mex__contact: [
                    'Non ho studiato per interrogazione.', 'Prenderò in considerazione la tua proposta però preferisco saltare scuola.',
                ],
                mex__user: ['Tranquillo, ti sugerisce la paperella.',],     
            },
            {
                name: 'Davide',
                img: 'img/avatar_8.jpg',
                time: '12:00',
                mex__contact: [
                    'Finalmente è arrivata amica mia, la aspettavo da 3 mesi', 'La Paperella di Boolean',
                ],
                mex__user: ['E chi è?',],     
            },
        ],
    },
});