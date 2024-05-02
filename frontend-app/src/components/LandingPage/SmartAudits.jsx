import React, { useState } from 'react';

const SmartAudits = () => {
  const [activeTab, setActiveTab] = useState('Smart Contract'); // Default active tab

  // Sample data for each category
  const categoryData = {
    'Smart Contract': [
      { id: 1, logo:'/Images/icons/icons1.png', title: 'LoopFI', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' },
      { id: 2, logo:'/Images/icons/icons1.png', title: 'Smart Contract Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ],
    'DEFI': [
      { id: 3, logo:'/Images/icons/icons1.png', title: 'DEFI Project 1', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' },
      { id: 4, logo:'/Images/icons/icons1.png', title: 'DEFI Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ],
    'NFTs': [
      { id: 5, logo:'/Images/icons/icons1.png', title: 'NFT Project 1', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' },
      { id: 6, logo:'/Images/icons/icons1.png', title: 'NFT Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ],
    'Ethereum': [
        { id: 1, logo:'/Images/icons/icons1.png', title: 'Smart Contract Project 1', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.'},
        { id: 2, logo:'/Images/icons/icons1.png', title: 'Smart Contract Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ],
    'Solana': [
    { id: 3, logo:'/Images/icons/icons1.png', title: 'DEFI Project 1', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' },
    { id: 4, logo:'/Images/icons/icons1.png', title: 'DEFI Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ],
    'dAPPs': [
    { id: 5, logo:'/Images/icons/icons1.png', title: 'NFT DAPP 1', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' },
    { id: 6, logo:'/Images/icons/icons1.png', title: 'NFT Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ],
    'Avalanche': [
        { id: 3, logo:'/Images/icons/icons1.png', title: 'DEFI Project 1',description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' },
        { id: 4, logo:'/Images/icons/icons1.png', title: 'DEFI Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ],
    'Wallet': [
    { id: 5, logo:'/Images/icons/icons1.png', title: 'NFT DAPP 1', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' },
    { id: 6, logo:'/Images/icons/icons1.png', title: 'NFT Project 2', description: 'A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.' }
    ]
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='bg-gradient-to-b from-black via-gray-800 to-black min-h-screen p-20'>
      <h1 className='text-5xl text-center text-white font-bold mb-16'>Latest Works</h1>
      <div className='flex mb-4 justify-center items-center'>
        {Object.keys(categoryData).map((category) => (
          <button
            key={category}
            onClick={() => changeTab(category)}
            className={`mr-4 px-3 py-1 rounded-2xl text-md font-semibold focus:outline-none ${
              activeTab === category ? 'bg-white bg-opacity-90 text-black' : 'bg-transparent border-2 border-white border-opacity-30 text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='mt-12 space-y-8'>
        {categoryData[activeTab].map((project) => (
          <div key={project.id} className='bg-opacity-10 mx-auto max-w-5xl rounded-xl bg-white bg-blur-md border-2 border-white space-x-8 border-opacity-30 text-white px-8 flex  py-4'>
            <img src={project.logo} className="w-24 rounded-full h-24" />

            <div className='space-y-4 border-r-2 border-white border-opacity-10'>
            <h2 className='text-xl font-semibold'>{project.title}</h2>
            <p className='text-white mx-auto max-w-2xl '>{project.description}</p>
            <button className='-ml-1  bg-transparent border-2 border-white border-opacity-30 px-3 py-1 rounded-2xl text-sm font-semibold text-white'>
                Solidity
            </button>
            <button className='ml-2 bg-transparent border-2 border-white border-opacity-30 px-3 py-1 rounded-2xl text-sm font-semibold text-white'>
                dAPPs
            </button>
            </div>

            <div className='flex items-center justify-center'>
                <button className='bg-transparent border-2 border-white border-opacity-30 px-4 hover:bg-white hover:text-black py-1 rounded-2xl text-md font-semibold text-white'>
                    View Audit
                </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartAudits;
