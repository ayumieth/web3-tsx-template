import React from 'react'
import { Button } from '@mui/material';
import { ethers } from 'ethers';


import WalletButton from '../../components/WalletConnect/WalletButton';
import useTheme from '../../hook/useTheme';
import { getContract } from '../../utils/contractHelpers';
import config from '../../Config/config.json';
import ERC721 from '../../contract/ERC721.json';
import useActiveWeb3React from '../../hook/useActiveWeb3React';

interface Props{
  switchTheme: (event:any) => void;
}

const Home = (props: Props) => {
  const { switchTheme } = props;
  const { library } = useActiveWeb3React();
  const handleMint = () => {
    let mintContract = new ethers.Contract(config.nobugen3d_contract, ERC721, library?.getSigner());

    console.log("mintContract:::", mintContract);
    
  }

  return(
    <>
      <div><WalletButton>Connect</WalletButton></div>
      <div style={{backgroundColor: 'var(--primary)'}}>dfdfdf</div>
      <button onClick={switchTheme}>theme</button>
      <Button onClick={() => handleMint() }>Mint</Button>
    </>
  );
}


export default Home;