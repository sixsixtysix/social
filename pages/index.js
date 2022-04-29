import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React,{useState,useEffect,useRef} from 'react';
import Web3Modal from "web3modal";
import {Contract,providers,utils} from "ethers";
 import {abi,NFT_CONTRACT_ADDRESS} from "../constants";

export default function Home() {

  const [tokenIdsMinted , setTokenIdsMinted] = useState("0");
  const [walletconnected , setWalletConnected] = useState(false);
  const [loading ,setLoading] = useState(false);
  const web3ModalRef = useRef();

  // required signer since it will write the transaction
  const publicMint = async() =>
  {
     try {
       console.log("Public Mint");
    
       const signer = await getProviderOrSigner(true);

       const nftContract = new Contract(NFT_CONTRACT_ADDRESS , abi , signer);

       const tx = await nftContract.mint({
        
         value: utils.parseEther("0.01"),
       });

     setLoading(true);
     
     await tx.wait();

     setLoading(false);

     window.alert("You succesfully minted CryptoPunk Token");


     }catch(err){
       console.log(err);
     }
  }


 const getProviderOrSigner = async(needSigner = false) => {
  
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new providers.Web3Provider(provider);

  const {chainId} = await web3Provider.getNetwork();

  if(chainId !== 80001)
  {
    window.alert("Change the network to Mumbai");
    throw new Error("Change network to Mumbai");
  }

  if(needSigner === true)
  {
    const signer = await web3Provider.getSigner();
    return signer;
  }
 
   return web3Provider;

 } 

 // for this provider is enough that is in our case it is metamask
 const getTokenIdsMinted = async () =>
 {
    try{

     const provider = await getProviderOrSigner(false);
     
     const nftContract = new Contract(NFT_CONTRACT_ADDRESS,abi,provider);

     const Token_Ids = await nftContract.tokenIds();

     console.log("Token Ids are :",Token_Ids);

     setTokenIdsMinted(Token_Ids.toString());

    }catch(error){
      console.log(error);
    }

 }

 const connectWallet = async() =>
 {
   try{
    await getProviderOrSigner();
    setWalletConnected(true);
   }catch(err){
     console.log(err);
   }
 }

 // whenever the state of the walletconnected changes useeffect reacts as a side effect

  useEffect(()=>{
 
    if(walletconnected === false)
    {
      web3ModalRef.current = new Web3Modal({
        network: "mumbai", 
        providerOptions:{},
        disableInjectedProvider:false,
      });
      
      connectWallet();

      getTokenIdsMinted();

      setInterval( async function() {
         await getTokenIdsMinted();
      },5*1000);
    }

  },[walletconnected])



  const renderButton = () =>
  {
      if(walletconnected === false)
      {
        return (
   
          <button onClick={connectWallet} className={styles.button}>
             Connect to the Wallet  
          </button>

        ) 
      }   

      if(loading === true)
      {
        return(
          <button className={styles.button}>
            Loading......🚀🚀🚀
          </button>
        )
      }

      return(
        <button className={styles.button} onClick={publicMint}>
           Public Mint 🚀
          </button>
      )


  }

  return (
    <div>
      <Head>
        <title>CRYPTOPUNKS</title>
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Punks Website</h1>
          <div className={styles.description}>
              NFT Collection for CryptoPunks
          </div>
          <div className={styles.description}>
            {tokenIdsMinted}/3 have been minted
            </div>
            {renderButton()}
        </div>
        <div>
          <img className={styles.image} src="./picture.png"/>
        </div>
        </div>
      <footer className={styles.footer}>
          Made with &#10084; by CryptoPunks
      </footer>
    </div>
  )
}
