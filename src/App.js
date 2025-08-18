import React, { useState, useEffect } from 'react';
import { Wallet, Plus, ShoppingCart, Eye, Users, TrendingUp, Star, Filter, Search } from 'lucide-react';

const PiNFTMarketplace = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [user, setUser] = useState(null);
  const [piSDKLoaded, setPiSDKLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('marketplace');
  const [isConnecting, setIsConnecting] = useState(false);
  const [userNFTs, setUserNFTs] = useState([]);
  const [marketplaceNFTs, setMarketplaceNFTs] = useState([
    {
      id: 1,
      title: "Pi Digital Art #001",
      price: "50 Pi",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop",
      creator: "0x1234...5678",
      likes: 12,
      views: 156
    },
    {
      id: 2,
      title: "Cosmic Pi Collection", 
      price: "25 Pi",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=300&h=300&fit=crop",
      creator: "0x9876...5432",
      likes: 8,
      views: 89
    },
    {
      id: 3,
      title: "Pi Network Genesis",
      price: "100 Pi", 
      image: "https://images.unsplash.com/photo-1635776062043-223faf322554?w=300&h=300&fit=crop",
      creator: "0xabcd...efgh",
      likes: 24,
      views: 234
    }
  ]);

  const connectWallet = async () => {
    alert('Pi SDK integration coming soon!');
    setIsConnected(true);
    setUser({ username: 'demo_user', uid: 'demo123' });
    setWalletAddress('demo123');
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    setUser(null);
    setUserNFTs([]);
  };

  const buyNFT = (nftId) => {
    alert('Purchase feature coming soon with Pi Network integration!');
  };

  const NFTCard = ({ nft, showBuyButton = false, showStats = false }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={nft.image} alt={nft.title} className="w-full h-48 object-cover" />
        {showStats && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
            <Eye size={12} />
            {nft.views}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{nft.title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-orange-600">{nft.price}</span>
          {showStats && (
            <div className="flex items-center gap-1 text-gray-500">
              <Star size={14} fill="currentColor" />
              {nft.likes}
            </div>
          )}
        </div>
        {nft.creator && (
          <p className="text-xs text-gray-500 mb-3">by {nft.creator}</p>
        )}
        {showBuyButton && (
          <button
            onClick={() => buyNFT(nft.id)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Buy Now
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">π</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Pi NFT Bay</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {!isConnected ? (
                <button
                  onClick={connectWallet}
                  className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Wallet size={20} />
                  <span>Connect Pi Wallet</span>
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-700">
                      {user?.username ? `@${user.username}` : 'Connected'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {walletAddress.slice(0, 8)}...{walletAddress.slice(-4)}
                    </p>
                  </div>
                  <button
                    onClick={disconnectWallet}
                    className="p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Wallet size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Discover NFTs</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search NFTs..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter size={16} />
                <span>Filter</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marketplaceNFTs.map(nft => (
              <NFTCard key={nft.id} nft={nft} showBuyButton={isConnected} showStats={true} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PiNFTMarketplace;