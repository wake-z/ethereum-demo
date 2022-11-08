import "./App.css";
import { initializeProvider } from '@metamask/providers';
import { WindowPostMessageStream } from '@metamask/post-message-stream';

const metamaskStream = new WindowPostMessageStream({
  name: 'inpage',
  target: 'contentscript',
});

// this will initialize the provider and set it as window.ethereum
initializeProvider({
  connectionStream: metamaskStream,
});

const { ethereum } = window;

console.log('ethereum', ethereum)
console.log('web', window.web3)

function App() {

  return (
    <div className="app">
      metamask
    </div>
  );
}

export default App;
