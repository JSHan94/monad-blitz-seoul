import React, { useState, useEffect } from 'react';
import './EnhancementModule.css';
import fail from '../../assets/character/fail.png';
import level1 from '../../assets/character/level1.png';
import level2 from '../../assets/character/level2.png';
import level3 from '../../assets/character/level3.png';
import level4 from '../../assets/character/level4.png';
import level5 from '../../assets/character/level5.png';
import gambleGif from '../../assets/animation/gamble.gif'; // Import the GIF
import { fetchUser } from '../../api/dataAPI';
import Modal from '../../components/Modal'; // Import the Modal component

interface EnhancementModuleProps {
  isAuthenticated: boolean;
  resetTrigger?: boolean; // New prop
  onEnhancementAttempt: () => void; // New prop
}

const levelImages = [level1, level2, level3, level4, level5];
const failImage = fail; // Using egg.png for failure as fail.png is not found

const EnhancementModule: React.FC<EnhancementModuleProps> = ({ isAuthenticated, resetTrigger, onEnhancementAttempt }) => {
  const [inProgress, setInProgress] = useState(false);
  const [showFailurePopup, setShowFailurePopup] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [userPoints, setUserPoints] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for gamble GIF modal
  const [showResultModal, setShowResultModal] = useState(false); // State for result modal
  const [resultImage, setResultImage] = useState(''); // State for result image
  const [currentEnhancementLevel, setCurrentEnhancementLevel] = useState(0); // 0 for egg, 1-5 for levels

  useEffect(() => {
    if (isAuthenticated) {
      const getPoints = async () => {
        try {
          const userData = await fetchUser();
          setUserPoints(userData.points);
        } catch (error) {
          console.error("Error fetching user points:", error);
        }
      };
      getPoints();
    }
  }, [isAuthenticated]);

  // Effect to reset enhancement level when resetTrigger changes
  useEffect(() => {
    setCurrentEnhancementLevel(0);
  }, [resetTrigger]);

  const handleEnhancement = async (level: number) => {
    if (!isAuthenticated) {
      alert("Please log in to enhance items.");
      return;
    }
    onEnhancementAttempt(); // Call the prop function to deduct points and increment plays
    // Deduct points based on level (example: 100 points per level)
    const cost = level * 100;
    setUserPoints(prevPoints => prevPoints - cost);

    setSelectedLevel(level);
    setInProgress(true);
    setShowFailurePopup(false);
    setAnimate(true); // Start image shaking animation
    setProgress(0); // Reset progress bar
    setIsModalOpen(true); // Open the modal

    const startTime = Date.now();
    const duration = 3000; // 3 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / duration) * 100;
      setProgress(Math.min(currentProgress, 100));

      if (elapsed >= duration) {
        clearInterval(interval);
        setAnimate(false); // Stop image shaking animation
        setIsModalOpen(false); // Close the modal after GIF plays
        // Mock API call
        const successRate = selectedLevel ? selectedLevel / 100 : 1; // Convert percentage to decimal
        const success = Math.random() < successRate; // Determine success based on selectedLevel

        if (success) {
          const newLevel = Math.min(currentEnhancementLevel + 1, 5);
          setCurrentEnhancementLevel(newLevel);
          setResultImage(levelImages[newLevel]); // Set success image
        } else {
          setResultImage(failImage); // Set failure image
          setShowFailurePopup(true); // Keep showing failure popup for now
        }
        setShowResultModal(true); // Show the result modal
        setInProgress(false);
        if (selectedLevel !== null) {
          recordPlayHistory(selectedLevel, success);
        }
      }
    }, 50);
  };

  const handleSwapPoints = () => {
    setUserPoints(10000);
  };

  const enhancementLevels = [10, 30, 70, 99];

  return (
    <div className="enhancement-module">
      <div className="bordered-box">
        {isAuthenticated}
        <img
          src={levelImages[currentEnhancementLevel]} 
          className={`enhancement-image ${animate ? 'shaking' : ''}`}
          alt="enhancement" 
        />
        <h2 className="title">Enhancement</h2>
        <div className="enhancement-buttons-container">
          {enhancementLevels.map((level) => (
            <button
              key={level}
              className={`enhancement-button ${selectedLevel === level ? 'selected' : ''}`}
              onClick={() => handleEnhancement(level)}
              disabled={inProgress}
            >
              {level} %
            </button>
          ))}
        </div>
        {inProgress && (
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        )}
        {showFailurePopup && (
          <div className="popup">
            <p>Failed! Try again.</p>
            <button onClick={() => setShowFailurePopup(false)}>Close</button>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Enhancing...">
        <img src={gambleGif} alt="Enhancement Animation" style={{ width: '100%', height: 'auto' }} />
      </Modal>

      <Modal isOpen={showResultModal} onClose={() => setShowResultModal(false)} title="Enhancement Result">
        <img src={resultImage} alt="Result" style={{ width: '100%', height: 'auto' }} />
      </Modal>
    </div>
  );
};

export default EnhancementModule;


function recordPlayHistory(level: number, success: boolean) {
  // This function would typically send data to your backend
  console.log(`Play recorded: Level ${level}, Success: ${success}`);
}
