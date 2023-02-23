
function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}

export function UsersBase(){
    let Users= [
        {
            id:1,
            firstName: 'Igor',
            lastName: 'Makarenko',
            avatar: '',
            age: 18,
            pndingOrders: true,
            description: '',
            date: getRandomDate(),
        },
        /* {
            getRandomDate: function () {
                const maxDate = Date.now();
                const timestamp = Math.floor(Math.random() * maxDate);
                return new Date(timestamp);
            }
        
            },
        } */
    ]
}