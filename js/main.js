const app = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        contacts: [
            {
                name: 'Michele',
                img: 'img/avatar_1.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'Ciao come stai?',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'Bene, tu?',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'Tutto bene.',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ],


            },
            {
                name:'Fabio',
                img: 'img/avatar_2.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'hai finito di fare la doccia???',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'Si, sto scendendo.',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'ok',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ],   
            },
            {
                name: 'Samuele',
                img: 'img/avatar_3.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'Hai comprato il pane?',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'Sto andando in cassa!',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'Prendi anche le fragole.',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ],    
            },
            {
                name: 'Alessandro B.',
                img: 'img/avatar_4.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'Che cosa facciamo sta sera?',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'Andiamo a cena fuori?',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'Va bene, ci vediamo alle 18:45.',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ], 
            },
            {
                name: 'Alessandro L.',
                img: 'img/avatar_5.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'A che ora è la festa da Mirco?',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'Alle 20:00',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'Faccio un po tardi.',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ],   
            },
            {
                name: 'Claudia',
                img: 'img/avatar_6.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'Che cosa ti ha detto Marica?',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'Che si sente in colpa.',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'Incolpala!',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ],
            },
            {
                name: 'Federico',
                img: 'img/avatar_7.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'Non ho studiato per interrogazione.',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'Tranquillo, ti sugerisce la paperella.',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'Prenderò in considerazione la tua proposta però preferisco saltare scuola.',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ],    
            },
            {
                name: 'Davide',
                img: 'img/avatar_8.jpg',
                time: '12:00',
                massages: [
                    {			
                        massage: 'Finalmente è arrivata amica mia, la aspettavo da 3 mesi',
                        time: '12:00', 
                        status: 'received',
                    },

                    {			
                        massage: 'E chi è?',
                        time: '12:00', 
                        status: 'send',
                    },

                    {			
                        massage: 'La Paperella di Boolean',
                        time: '12:00', 
                        status: 'received',
                    },
                
                ],   
            },
        ],
    },
    
});