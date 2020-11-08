import React from "react";
import Chat from './components/Chat';
import WebSocketInstance from './websocket';


class App extends React.Component {

  componentDidMount() {
    WebSocketInstance.connect();
  }

  render() {
    return(
        <Chat />
    );
  };
}

export default App;