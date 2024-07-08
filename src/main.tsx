import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

// see details at https://github.com/ton-connect/sdk/tree/main/packages/sdk#add-the-tonconnect-manifest
const exampleManifestUrl = 'https://raw.githubusercontent.com/YakovL/ton-example-frontend/master/tonconnect-manifest.json'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl={exampleManifestUrl}>
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>,
)
