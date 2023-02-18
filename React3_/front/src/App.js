import { Card } from './components/card/Card'

const cardStyle = {
    display: 'flex',
    gap: '15px',
}
function App() {
    return (
        <>
            <div style={cardStyle}>
                <Card />
            </div>
        </>
    );
}

export default App;
