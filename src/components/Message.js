import '../App.css';

function Message(props) {
    return (
        <div className="Message">
            <h3>{props.message}</h3>
        </div>
    );
}

export default Message;