"use client";

import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount, useReadContract } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const [selectedToken, setSelectedToken] = useState("tokenA");
  const [actionType, setActionType] = useState("swap"); // Nuevo estado para saber si es swap, add, or withdraw
  const [value, setValue] = useState(""); // Para almacenar el valor del input
  const [price, setPrice] = useState<string>("");
  const [priceFetched, setPriceFetched] = useState<boolean>(false);

  const tokenAAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const tokenBAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const { data: priceData, refetch: fetchPrice } = useReadContract({
    address: selectedToken === "tokenA" ? tokenAAddress : tokenBAddress,
    abi: [
      {
        inputs: [],
        name: "getPrice",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "getPrice",
  });

  const handleGetPrice = async () => {
    if (connectedAddress) {
      try {
        const result = await fetchPrice();
        setPriceFetched(true);
        if (result?.data) {
          const priceValue = BigInt(result.data).toString();
          setPrice(priceValue);
        } else {
          setPrice("Error retrieving price");
        }
      } catch (error) {
        setPrice("Error retrieving price");
      }
    }
  };

  const handleAction = () => {
    // Lógica para manejar el SWAP, ADD, WITHDRAW
    if (actionType === "swap") {
      console.log(`Swapping ${value} of ${selectedToken}`);
    } else if (actionType === "add" || actionType === "withdraw") {
      console.log(`Liquidity action: ${actionType} ${value}`);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Swappme-DEX</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <h1 className="text-3xl font-bold text-left margin-left px-20">TOKEN ACTIONS</h1>
          <p className="font-bold text-center text-red-500"> 🚧 FEATURES UNDER CONSTRUCTION🚧 </p>
          <div className="flex justify-center items-stretch gap-8 flex-wrap sm:flex-nowrap">
            {/* Primer DIV */}
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl w-[30%] min-h-full">
              <p className="font-bold">SWAP</p>
              {/* Menú Desplegable para seleccionar Token */}
              <div className="my-4">
                <select
                  className="select select-primary w-48 max-w-xs"
                  value={selectedToken}
                  onChange={e => setSelectedToken(e.target.value)}
                >
                  <option value="tokenA">From Token A to Token B</option>
                  <option value="tokenB">From Token B to Token A</option>
                </select>
              </div>
              {/* Input para ingresar el valor */}
              <div className="my-4">
                <input
                  type="number"
                  className="input input-bordered w-48"
                  placeholder="Enter value"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              </div>
              {/* Botón para realizar el swap */}
              <button className="btn btn-primary w-48 py-4" onClick={handleAction}>
                SWAP
              </button>
            </div>

            {/* Segundo DIV */}
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl w-[30%] min-h-full">
              <p className="font-bold">MANAGE LIQUIDITY</p>
              {/* Menú Desplegable para seleccionar Add o Withdraw */}
              <div className="my-4">
                <select
                  className="select select-primary w-48 max-w-xs"
                  value={actionType}
                  onChange={e => setActionType(e.target.value)}
                >
                  <option value="add">Add Liquidity</option>
                  <option value="withdraw">Withdraw Liquidity</option>
                </select>
              </div>
              {/* Input para ingresar el valor */}
              <div className="my-4">
                <input
                  type="number"
                  className="input input-bordered w-48"
                  placeholder="Enter value"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              </div>
              {/* Botón para realizar la acción de liquidez */}
              <button className="btn btn-primary w-48 py-4" onClick={handleAction}>
                {actionType === "add" ? "Add" : "WITHDRAW"}
              </button>
            </div>

            {/* Tercer DIV */}
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl w-[30%] min-h-full">
              <p className="font-bold">GET PRICE</p>
              {/* Dropdown para seleccionar token */}
              <div className="my-4">
                <select
                  className="select select-primary w-48 max-w-xs"
                  value={selectedToken}
                  onChange={e => setSelectedToken(e.target.value)}
                >
                  <option value="tokenA">Token A</option>
                  <option value="tokenB">Token B</option>
                </select>
              </div>
              {/* Botón para obtener precio */}
              <button className="btn btn-primary w-48 py-4" onClick={handleGetPrice}>
                GET
              </button>
              {/* Mostrar precio o mensaje */}
              {priceFetched && price ? (
                <p className={`my-4 ${price === "Error retrieving price" ? "text-red-500" : "text-green-500"}`}>
                  {price === "Error retrieving price" ? "Unable to retrieve price." : `Price: ${price}`}
                </p>
              ) : (
                priceFetched && <p className="my-4 text-red-500">No price available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
