import './App.css';
import Message from './components/Message'

const myMessage = 'What\'s up?'

function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                My First React App
                <h3>Hello, {props.name}</h3>
                <Message message={myMessage} />
            </header>
        </div>
    );
}

export default App;
