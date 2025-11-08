import { createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint, MINT_SIZE ,TOKEN_PROGRAM_ID} from '@solana/spl-token';
import { Connection, Keypair, Transaction ,SystemProgram} from '@solana/web3.js';
import React, { use, useState } from 'react';
import Input from '../Buttons/Input';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const Launchpad = () => {

    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [initialSupply, setInitialSupply] = useState(0);
    const wallet = useWallet();
    const {connection}=useConnection();


    async function createToken() {
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE, //MINT_SIZE = 82 by default
                lamports,
                programId:TOKEN_PROGRAM_ID,
            }),
            createInitializeMint2Instruction(keypair.publicKey, 6, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID),
        );

        const recentBlockhash = await connection.getLatestBlockhash();
        transaction.recentBlockhash = recentBlockhash.blockhash;
        transaction.feePayer = wallet.publicKey;
        transaction.partialSign(keypair);
        let response=await  wallet.sendTransaction(transaction,connection);

        console.log(response);
        
    }


    return (
        <div className="p-6 w-full  h-[80vh] flex flex-col items-center  justify-center">
            <h3 className="text-4xl font-extrabold mb-4">Solana Token Launchpad</h3>

            <div className="flex flex-col gap-4   p-6 rounded-lg  items-center">
                <Input value={name} onChange={(e) => setName(e.target.value)} text="Token Name" />
                <Input value={symbol} onChange={(e) => setSymbol(e.target.value)} text="Token Symbol" />
                <Input value={imageURL} onChange={(e) => setImageURL(e.target.value)} text="Image URL" />
                <Input value={initialSupply} onChange={(e) => setInitialSupply(e.target.value)} text="Initial Supply" />

                <button onClick={createToken} className="border border-gray-200 bg-white hover:bg-gray-100 py-2 rounded-md font-medium w-72">
                    Create Token
                </button>
            </div>
        </div>
    );
};

export default Launchpad;
