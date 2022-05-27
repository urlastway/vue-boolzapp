const app = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        contacts: [
                {
                    name: 'Michele',
                    img: 'img/avatar_1.jpg',
                    visible: true,
                    massages: [
                        {
                            date: '10/01/2020 15:30:55',
                            massage: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            massage: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            massage: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name:'Fabio',
                    img: 'img/avatar_2.jpg',
                    visible: true,
                    massages: [
                        {
                            date: '20/03/2020 16:30:00',
                            massage: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            massage: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            massage: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                ],  
                },
                {
                    name: 'Samuele',
                    img: 'img/avatar_3.jpg',
                    massages: [
                        {
                            date: '28/03/2020 10:10:40',
                            massage: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            massage: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            massage: 'Ah scusa!',
                            status: 'received'
                        }
                    ],   
                },
            {
                name: 'Alessandro B.',
                img: 'img/avatar_4.jpg',
                time: '12:00',
                massages: [
                    {
                        date: '10/01/2020 15:30:55',
                        massage: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        massage: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },        
                
                ], 
            },
            {
                name: 'Alessandro L.',
                img: 'img/avatar_5.jpg',
                time: '12:00',
                massages: [
                    {
                        date: '10/01/2020 15:30:55',
                        massage: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        massage: 'Va bene, stasera la sento',
                        status: 'received'
                    }                
                ],   
            },
            {
                name: 'Claudia',
                img: 'img/avatar_6.jpg',
                time: '12:00',
                massages: [
                    {
                        date: '10/01/2020 15:30:55',
                        massage: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        massage: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        massage: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }                
                ],
            },
            {
                name: 'Federico',
                img: 'img/avatar_7.jpg',
                time: '12:00',
                massages: [
                    {
                        date: '10/01/2020 15:30:55',
                        massage: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        massage: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }               
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