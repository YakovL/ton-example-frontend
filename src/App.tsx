import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useLotteryContract } from './hooks/useLotteryContract'

function App() {
  const { sendBet } = useLotteryContract()

  return (
    <>
      <h1>TON Lottery</h1>
      <div className="card">
        <TonConnectButton style={{ display: 'inline-block' }}/>
      </div>
      <div>
        <button
          className='button'
          onClick={sendBet}
        >bet</button>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
