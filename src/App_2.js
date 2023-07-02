import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { ethers } from "ethers";

import { useState, useEffect } from "react";

import Counter from "./counter.json";
  import { writeContract, getWalletClient, readContract, getAccount, getNetwork } from 'wagmi/actions'

function App() {
  const [count, setCount] = useState(0);
  const [address, setaddress] = useState('');

  const CONTRACT_ADDRESS = "0x4CE4DACdae188ab957c9f572040d10949654110E";

  async function initialize() {
    const walletClient = await getWalletClient()

    const data = await readContract({
      address: CONTRACT_ADDRESS,
      abi: Counter,
      functionName: 'getCount',
      // args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
    })

    setCount(Number(data));

    const account = getAccount();
    console.log(account);
    const addresss = account?.address;
    setaddress(addresss);

    const { chain } = getNetwork()
    console.log(chain);

  }


  useEffect(() => {
    initialize();
  }, []);

  const handleIncrement = async () => {
    console.log("increment initiated");

    const { hash } = await writeContract({
      address: CONTRACT_ADDRESS,
      abi: Counter,
      functionName: 'increaseCount',
      // args: [69],
    })

    console.log(hash);
  };


  return (
    <>
      <div className="App">
        <ConnectButton />
        <br />
      </div>

      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold"> Counter App</h1>
        <p className="py-3">Count: {count}</p>
        <button
          className="text-white mr-2 bg-blue-600 rounded-lg
 px-4 py-3"
          onClick={handleIncrement}
        >
          Increment
        </button>
     
       
      </div>
      <div>
      Address : {address}
      </div>
      
       

    </>
  );
}

export default App;




// get chain id