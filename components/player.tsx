"use client"

import { useEffect, useRef, useState } from "react"
import { Howl } from "howler"
import { Pause, Play, RotateCcw, SkipBack, SkipForward, Volume2 } from 'lucide-react'

import { Song } from "@/data/songs"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface PlayerProps {
  song: Song | null
  onNext: () => void
  onPrevious: () => void
}

export function Player({ song, onNext, onPrevious }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const soundRef = useRef<Howl | null>(null)

  useEffect(() => {
    if (song) {
      if (soundRef.current) {
        soundRef.current.unload()
      }
      
      soundRef.current = new Howl({
        src: [song.audio],
        html5: true,
        volume: volume,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
        onend: onNext,
      })
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [song, onNext, volume])

  useEffect(() => {
    const interval = setInterval(() => {
      if (soundRef.current && isPlaying) {
        const seek = soundRef.current.seek()
        const duration = soundRef.current.duration()
        setProgress((seek / duration) * 100)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying])

  const togglePlay = () => {
    if (!soundRef.current) return
    
    if (isPlaying) {
      soundRef.current.pause()
    } else {
      soundRef.current.play()
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    if (soundRef.current) {
      soundRef.current.volume(volumeValue)
    }
  }

  if (!song) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            src={song.cover}
            alt={song.title}
            className="h-14 w-14 rounded object-cover"
          />
          <div>
            <h3 className="font-semibold text-white">{song.title}</h3>
            <p className="text-sm text-neutral-400">{song.artist}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white"
              onClick={onPrevious}
            >
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-10 w-10 bg-white text-black hover:bg-neutral-200"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white"
              onClick={onNext}
            >
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="w-full [&_[role=slider]]:h-3 [&_[role=slider]]:w-3"
          />
        </div>
        <div className="flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-neutral-400" />
          <Slider
            value={[volume]}
            max={1}
            min={0}
            step={0.01}
            onValueChange={handleVolumeChange}
            className="w-24 [&_[role=slider]]:h-3 [&_[role=slider]]:w-3"
          />
        </div>
      </div>
    </div>
  )
}

