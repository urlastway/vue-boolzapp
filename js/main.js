const app = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        NewMex: '',
        searchText: '',
        contacts: [
                {
                    name: 'Michele',
                    img: 'img/avatar_1.jpg',
                    time: '12:00',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name:'Fabio',
                    img: 'img/avatar_2.jpg',
                    time: '12:00',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                ],  
                },
                {
                    name: 'Samuele',
                    img: 'img/avatar_3.jpg',
                    time: '12:00',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],   
                },
            {
                name: 'Alessandro B.',
                img: 'img/avatar_4.jpg',
                time: '12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },        
                
                ], 
            },
            {
                name: 'Alessandro L.',
                img: 'img/avatar_5.jpg',
                time: '12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }                
                ],   
            },
            {
                name: 'Claudia',
                img: 'img/avatar_6.jpg',
                time: '12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }                
                ],
            },
            {
                name: 'Federico',
                img: 'img/avatar_7.jpg',
                time: '12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }               
                ],    
            },
            {
                name: 'Davide',
                img: 'img/avatar_8.jpg',
                time: '12:00',
                messages: [
                    {	
                        date: '10/01/2020 15:30:55',		
                        message: 'Finalmente è arrivata amica mia, la aspettavo da 3 mesi',
                        status: 'received',
                    },

                    {
                        date: '10/01/2020 15:50:00',			
                        message: 'E chi è?',
                        status: 'send',
                    },

                    {	
                        date: '10/01/2020 15:51:00',		
                        message: 'La Paperella di Boolean', 
                        status: 'received',
                    },
                
                ],   
            },
        ],
    },
    methods: {
        PushMassagge(){
            const NewMex = {
                date: '10/01/2020 15:30:55',
                message: this.NewMex,
                status: 'sent'
            };
            this.contacts[this.currentIndex].messages.push(NewMex);
            this.NewMex = '';
            this.SendMex()
        },
        SendMex(){
            setTimeout(() => {
            const SendMex = {
                date: '03:52',
                message: 'ok',
                status: 'received'
            };
            this.contacts[this.currentIndex].messages.push(SendMex);
        }, 1000)
        },
        getMessageTime(contact){
            const mess = contact.messages[contact.messages.length - 1];
            return mess.date;
        },
        searchContacts(){
            this.contact.forEach(element => {
                element.visible = element.name.toLowerCase().includes(this.searchText.toLowerCase());
            });
        }
    },


});