import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Lauchpad from './Components/Launchpad'
// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {

  return (

    <div className=' h-screen w-screen bg-[#D3C0B2]'>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className='flex justify-between p-5'>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>

            <Lauchpad />

          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
