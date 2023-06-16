import React from 'react';

const TokenomicsSection: React.FC = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100">Tokenomics</h2>
          <p className="mt-4 text-lg text-white">The MHUB token distribution strategy is designed to ensure the project's longevity and continuous growth.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Tokenomics items */}
          <div className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 shadow-lg rounded-lg px-6 py-8">
            <h3 className="text-2xl font-semibold text-black">Token Supply</h3>
            <p className="mt-4 text-black">Total Supply: 1,000,000,000</p>
            <p className="mt-2 text-black">Circulating Supply: 500,000,000</p>
          </div>
          <div className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 shadow-lg rounded-lg px-6 py-8">
            <h3 className="text-2xl font-semibold text-gray-900">Token Distribution</h3>
            <p className="mt-4 text-black">Game: 10%</p>
            <p className="mt-2 text-black">DAO: 10%</p>
            <p className="mt-2 text-black">IDO: 10%</p>
            <p className="mt-2 text-black">Team: 10%</p>
            <p className="mt-2 text-black">Bridge: 20%</p>
            <p className="mt-2 text-black">LP: 40%</p>
          </div>
          <div className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 shadow-lg rounded-lg px-6 py-8">
            <h3 className="text-2xl font-semibold text-gray-900">Token Utility</h3>
            <p className="mt-4 text-black">Staking Rewards: 5% APR</p>
            <p className="mt-2 text-black">Governance Voting: Yes</p>
            <p className="mt-2 text-black">Utility in Platform: Yes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
