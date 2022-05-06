import BaseComponent from "./components/BaseComponent"; 
import WallectConnect from "./components/WalletConnect";
import {condenseString} from "./utils/utils";
import {useState} from 'react';

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const walletConnectHandler = (address) => setCurrentAccount(address);


  
  return (
    <div className="App">
      <BaseComponent/>
      <div className="account_section">
        {!currentAccount && <WallectConnect onWalletConnect={walletConnectHandler}/>}
        {currentAccount && <p>Welcome {condenseString(currentAccount)}</p>}
      </div>
    </div>
  );
}

export default App;
