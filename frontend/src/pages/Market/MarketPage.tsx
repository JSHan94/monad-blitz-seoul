import React, { useState, useEffect } from 'react';
import MarketItemCard from '../../components/MarketItemCard';
import './MarketPage.css';
import { fetchMarketItems, registerMarketItem } from '../../api/dataAPI';
import Modal from '../../components/Modal';

export interface MarketItemData {
  id: string
  owner: string
  successCnt: number
  tryCnt: number
  price: number
}
export interface MarketItemListResponse {
  data: MarketItemData[]
}

const MarketPage: React.FC = () => {
  const [marketItems, setMarketItems] = useState<MarketItemData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMarketData = async () => {
      setLoading(true);
      try {
        const res: MarketItemListResponse = await fetchMarketItems();
        const items: MarketItemData[] = res.data 
        
        const formattedData = items.map(item => ({
          id: item.id,
          owner: item.owner,
          successCnt: item.successCnt,
          tryCnt: item.tryCnt,
          price: item.price,
        }));
        setMarketItems(formattedData);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
      setLoading(false);
    };

    getMarketData();
  }, []);

  const [newItemId, setNewItemId] = useState<string>('');
  const [newItemOwner, setNewItemIdOwner] = useState<string>('');
  const [newItemPrice, setNewItemPrice] = useState<string>('');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  if (loading) {
    return <div className="market-loading">Loading market...</div>;
  }

  const handleRegisterItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerMarketItem(Number(newItemId), newItemOwner, Number(newItemPrice));
      alert('Item registered successfully!');
      setNewItemId('');
      setNewItemIdOwner('');
      setNewItemPrice('');
      setIsRegisterModalOpen(false); // Close modal on success
    } catch (error) {
      console.error("Error registering item:", error);
      alert('Failed to register item.');
    }
  };

  return (
    <div className="market-page">
      <h2 className="market-title">Marketplace</h2>
      <button onClick={() => setIsRegisterModalOpen(true)} className="register-item-button">Register New Item</button>
      <div className="market-grid">
        {marketItems.map((item) => (
          <MarketItemCard key={item.id} item={item} />
        ))}
      </div>

      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        title="Register New Market Item"
      >
        <form onSubmit={handleRegisterItem} className="register-item-form">
          <input
            type="number"
            placeholder="Item ID"
            value={newItemId}
            onChange={(e) => setNewItemId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Owner"
            value={newItemOwner}
            onChange={(e) => setNewItemIdOwner(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newItemPrice}
            onChange={(e) => setNewItemPrice(e.target.value)}
            required
          />
          <button type="submit">Register Item</button>
        </form>
      </Modal>
    </div>
  );
};

export default MarketPage;