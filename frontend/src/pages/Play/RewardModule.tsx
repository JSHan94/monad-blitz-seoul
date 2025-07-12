"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Star, Sparkles } from "lucide-react"
import { Button } from '../../components/Button';

export default function RewardModule({ playCount }: { playCount: number }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showReward, setShowReward] = useState(false)

  const playsNeeded = 5
  const progress = playCount % playsNeeded
  const isRewardReady = progress === 0 && playCount > 0

  const handleClaimReward = async () => {
    if (!isRewardReady || isAnimating) return

    setIsAnimating(true)

    // Simulate box opening animation duration
    setTimeout(() => {
      setShowReward(true)
    }, 800)

    // Hide reward after showing it
    setTimeout(() => {
      setShowReward(false)
      setIsAnimating(false)
    }, 3000)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
      <div className="text-center space-y-4">

        {/* Progress Display */}
        <div className="space-y-2">
          <div className="text-sm text-gray-600">
            {isRewardReady ? "Reward Ready!" : `${progress}/${playsNeeded} plays`}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(progress / playsNeeded) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Reward Box */}
        <div className="relative">
          <motion.div
            className={`relative w-20 h-20 mx-auto cursor-pointer ${
              isRewardReady ? "cursor-pointer" : "cursor-not-allowed opacity-50"
            }`}
            onClick={handleClaimReward}
            whileHover={isRewardReady ? { scale: 1.05 } : {}}
            whileTap={isRewardReady ? { scale: 0.95 } : {}}
          >
            {/* Gift Box */}
            <motion.div
              className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center"
              animate={
                isAnimating
                  ? {
                      rotateY: [0, 180, 360],
                      scale: [1, 1.2, 1],
                    }
                  : {}
              }
              transition={{ duration: 0.8 }}
            >
              <Gift className="w-8 h-8 text-white" />
            </motion.div>

            {/* Box Opening Effect */}
            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-lg"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [1, 0.8, 0],
                    rotate: [0, 180, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </AnimatePresence>

            {/* Reward Image */}
            <AnimatePresence>
              {showReward && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-12 h-12 text-white fill-current" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sparkle Effects */}
          <AnimatePresence>
            {isRewardReady && !isAnimating && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
