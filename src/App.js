import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    if (window.ethereum) {
      console.log("Detelect");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("error Connecting");
      }
    } else {
      console.log("No detect");
    }
  }
  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();
      const provider =new ethers.providers.Web3Provider(window.ethereum);
      return  console.log(provider);

    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>Connect Account</button>
        <button onClick={connectWallet}>connectWallet</button>
        <h1>Account Connect Address:{walletAddress}</h1>
      </header>
    </div>
  );
}

export default App;
