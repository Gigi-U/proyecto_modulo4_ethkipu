# Swappme-Dex: Decentralized Exchange Front-End 🚀

Welcome to *Swappme-Dex*, a user-friendly front-end application designed to interact seamlessly with three smart contracts: **SimpleDEX**, **TokenA**, and **TokenB**. These contracts were developed by [@Gigi-U](https://www.github.com/Gigi-U) as part of my learning journey at **Eth Kipu**, an institution focused on blockchain education. This platform allows you to easily manage liquidity and perform token swaps on the Ethereum blockchain. Built with Scaffold-ETH and designed for ease of use, Swappme-Dex provides the tools to exchange tokens and manage liquidity with a clean and responsive UI.


---

## 🚧 Home Page: Under Construction 🚧

The **Home Page** is currently under development. It will soon display key information, such as:  
- Token prices  
- User liquidity stats  
- An overview of available features  

In the meantime, all the features are fully functional and accessible on the **Debug Contracts Page**.  

---

## Features ✨

- **Add Liquidity**: Deposit your tokens into the liquidity pool to earn rewards!  
- **Withdraw Liquidity**: Remove your tokens from the liquidity pool when you wish.  
- **Swap Tokens**: Effortlessly swap **Token A ↔ Token B**.  
- **Get Token Price**: Retrieve the current price of tokens in the pool.  
- **Ethereum Blockchain Integration**: Fully compatible with Ethereum and decentralized exchanges.  

---

## Requirements 📝

This project implements the requirements set for the **SimpleDEX** front-end:

- Interact with the **SimpleDEX contract** (deployed in Module 3).
- Allow the user to **add liquidity**, **withdraw liquidity**, and **swap tokens** between **Token A** and **Token B**.
- Provide a feature to **fetch token prices**.
- Implement any instructor recommendations provided during the review of **Module 3**.

---

## Technologies Used 💻

- **React.js**: Fast and modern front-end framework for building interactive UIs.  
- **Scaffold-ETH**: The ultimate tool to rapidly deploy Ethereum DApps and smart contracts.  
- **Web3.js**: Library for interacting with the Ethereum blockchain.  
- **Solidity**: Ethereum smart contract language (SimpleDEX contract).  
- **Tailwind CSS**: Styling framework for a clean, responsive layout.

---

## How to Use the Application 💡

1. **Connect your Wallet**: Use **MetaMask** or any Ethereum-compatible wallet to interact with the application.  
2. **Add Liquidity**: Choose the tokens you want to deposit and confirm the transaction.  
3. **Withdraw Liquidity**: Select the amount you want to remove and confirm the withdrawal.  
4. **Swap Tokens**: Select the tokens you want to exchange, enter the amount, and execute the swap.  
5. **Get Token Price**: Get the current price of a token from the liquidity pool with a simple click.  

---

## Getting Started 🔧

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/swappme-dex.git
    ```

2. **Install Dependencies**:

    ```bash
    cd swappme-dex
    npm install
    ```

3. **Start the App**:

    ```bash
    npm start
    ```

4. **Access the Application**:  
Go to [http://localhost:3000](http://localhost:3000) in your browser and start interacting with the DEX! 🌐

---

## Screenshots 📸

Here are some screenshots of the interface:

![Swappme-Dex Home](./screenshots/home.png)
<img width="951" alt="swappmeHOME" src="https://github.com/user-attachments/assets/6d3cb705-8145-4976-bbaf-2e33813c80ee" />

<img width="955" alt="DebugContractsPage" src="https://github.com/user-attachments/assets/9e42f642-990e-4aa2-b6e1-f3b55944ff98" />

---

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments 💖

- **Scaffold-ETH** for providing an amazing framework to build DApps.
- The **Ethereum** community for pushing the boundaries of decentralized finance (DeFi).
- Special thanks to the **Eth Kipu** course for providing an excellent foundation for this project. 

---

## To deploy to Sepolia Network:
### VIDEO INSTRUCTIONS -> https://medium.com/@sibkatya/building-dapps-with-scaffold-eth-2-from-hardhat-to-testnet-8babb40b6617
### bash command:
        ```bash
    yarn deploy --network sepolia
    ```
### at .env file
ALCHEMY_API_KEY=your-alchemy-api-key
DEPLOYER_PRIVATE_KEY=your-deployer-private-key
ETHERSCAN_API_KEY=your-etherscan-api-key


### if you change your mind

    ```bash
    yarn deploy --network hardhat
    ```
---

About the Developer 👩‍💻
Swappme-Dex was developed by Gisela Urriza. [@Gigi-U](https://www.github.com/Gigi-U)
Feel free to reach out if you have questions, suggestions, or ideas to improve the project!
