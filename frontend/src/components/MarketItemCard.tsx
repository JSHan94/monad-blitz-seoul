import React, { useState } from 'react';
import './MarketItemCard.css';
import Modal from './Modal';
import { MarketItemData } from '../pages/Market/MarketPage';

import level1 from "../assets/character/level1.png"
import level2 from "../assets/character/level2.png"
import level3 from "../assets/character/level3.png"
import level4 from "../assets/character/level4.png"
import level5 from "../assets/character/level5.png"


interface MarketItemCardProps {
  item: MarketItemData
}

const MarketItemCard: React.FC<MarketItemCardProps> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'buy' | 'sell' | null>(null);

  const getCharacterImage = (successCount: number) => {
    if (successCount === 0) {
      return level1;
    } else if (successCount === 1) {
      return level2;
    } else if (successCount === 2) {
      return level3;
    } else if (successCount === 3) {
      return level4;
    } else if (successCount >= 4) {
      return level5;
    }
    return level1; // Default fallback
  };

  const itemImage = getCharacterImage(item.successCnt);


  const openModal = (type: 'buy' | 'sell') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleConfirm = () => {
    if (modalType === 'buy') {
      alert(`Successfully bought Item ${item.id} for ${item.price} coins.`);
    } else if (modalType === 'sell') {
      alert(`Successfully sold ${item.id} for ${item.price} coins.`);
    }
    closeModal();
  };

  return (
    <div className="market-item-card">
      <img 
        src={itemImage}
        loading="lazy"
        className="item-thumbnail"
      />
      <p className="item-price">Price: {item.price}</p>
      <p className="item-price">Left Try: {5- item.tryCnt}</p>
      <div className="item-actions">
        <button onClick={() => openModal('buy')} aria-label={`Buy Item ${item.id}`} className="buy-button">Buy</button>
        <button onClick={() => openModal('sell')} aria-label={`Sell Item ${item.id}`} className="sell-button">Sell</button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      >
        <p>Are you sure you want to {modalType} Item {item.id} for {item.price} coins?</p>
        <div className="modal-buttons">
          <button onClick={handleConfirm} className="confirm-button">Confirm</button>
          <button onClick={closeModal} className="cancel-button">Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default MarketItemCard;
