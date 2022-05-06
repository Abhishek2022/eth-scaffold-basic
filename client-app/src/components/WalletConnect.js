import "./WalletConnect.css";
import { useState } from "react";

function WallectConnect(props) {
    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }
        
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
            props.onWalletConnect(currentAccount);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button className="connect-button" onClick={connectWallet}> Connect </button> 
    );
}

export default WallectConnect;