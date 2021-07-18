import { ChatEngine } from 'react-chat-engine';

import './App.css';
// import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="c5480421-5419-43fc-8a6e-727aba1a9402"
            userName="tomisme"
            userSecret="123123"
            // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;