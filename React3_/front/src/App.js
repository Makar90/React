import { Card } from './components/card/Card'

import { Users } from './data/user/Users';

const cardAreaStyle = {
    display: 'flex',
    gap: '15px',
};

function App() {

    const Users18 = Users.map(item => (
        item.age >= 38 ?
            (
                item
            )
            :
            (
                'null'
            )
    ));
    console.log(Users18);

    let Users18_2 = [];
    Users.map(item => (
        item.age >= 38 &&
        (
            Users18_2.push(item)
        )
    ));
    console.log(Users18_2);

    return (
        <>
            <div style={cardAreaStyle}>
                <Card Users={Users} />
            </div>
            <br />

            <div style={cardAreaStyle}>
                <Card Users={Users18} />
            </div>
            <br />

            <div style={cardAreaStyle}>
                <Card Users={Users18_2} />
            </div>
            <br />
        </>
    );
}

export default App;
