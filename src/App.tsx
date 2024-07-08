import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  return (
    <>
      <h1>TON Lottery</h1>
      <div className="card">
        <TonConnectButton style={{ display: 'inline-block' }}/>
      </div>
      <p className="read-the-docs">
        TODO: sending bet
      </p>
    </>
  )
}

export default App
