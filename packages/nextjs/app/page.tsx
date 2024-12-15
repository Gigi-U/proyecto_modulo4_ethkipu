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
          <h1 className="text-3xl font-bold text-left margin-left px-10 ">TOKEN ACTIONS</h1>
          <div className="flex justify-center items-center gap-8 flex-wrap sm:flex-nowrap">
            {/* Primer DIV */}
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl h-full min-h-[250px]">
              <p>SWAP</p>
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>

            {/* Segundo DIV */}
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl h-full min-h-[250px]">
              <p>MANAGE LIQUIDITY</p>
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>

            {/* Tercer DIV */}
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl flex-1 min-h-[250px]">
              <p>GET PRICE</p>
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
                Get
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
