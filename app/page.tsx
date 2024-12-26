"use client"

import { useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { Search, Play } from 'lucide-react'
import Link from "next/link"

import { songs as initialSongs } from "@/data/songs"
import { Player } from "@/components/player"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [songs, setSongs] = useState(initialSongs)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(songs)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setSongs(items)
  }

  const playNext = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    const nextSong = songs[(currentIndex + 1) % songs.length]
    setCurrentSong(nextSong)
  }

  const playPrevious = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    const previousSong = songs[(currentIndex - 1 + songs.length) % songs.length]
    setCurrentSong(previousSong)
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-neutral-900 to-neutral-800">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <Input
                placeholder="Search songs..."
                className="pl-9 bg-neutral-800 border-neutral-700 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <nav className="flex gap-4">
              {["Music", "Podcast", "Live", "Radio"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-neutral-400 hover:text-white hover:bg-neutral-800"
                  asChild
                >
                  <Link href={`/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>

          <div 
            className="mt-8 rounded-xl p-8 relative overflow-hidden"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1621891334726-08f5bf7d1d71?auto=format&fit=crop&w=1920&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-neutral-900/70"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                      ✓
                    </div>
                    <div className="text-sm text-blue-500">Verified Artist</div>
                  </div>
                  <h1 className="text-5xl font-bold text-white mb-2">Michael Jackson</h1>
                  <p className="text-neutral-300 mb-4">27,852,501 monthly listeners</p>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                    <Play className="mr-2 h-4 w-4" /> Play
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">Popular</h2>
              <Button variant="link" className="text-neutral-400 hover:text-white">
                See All
              </Button>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="songs">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-2"
                  >
                    {filteredSongs.map((song, index) => (
                      <Draggable
                        key={song.id}
                        draggableId={song.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`group flex items-center gap-4 rounded-lg p-2 hover:bg-white/10 transition-colors ${
                              currentSong.id === song.id
                                ? "bg-red-500/20 text-red-500"
                                : "text-neutral-300"
                            }`}
                            onClick={() => setCurrentSong(song)}
                          >
                            <div className="w-8 text-center">{index + 1}</div>
                            <img
                              src={song.cover}
                              alt={song.title}
                              className="h-12 w-12 rounded object-cover"
                            />
                            <div className="flex-1">
                              <div className="font-medium group-hover:text-white transition-colors">
                                {song.title}
                              </div>
                              <div className="text-sm text-neutral-400">{song.artist}</div>
                            </div>
                            <div className="hidden text-sm group-hover:block text-neutral-400">
                              {song.plays}
                            </div>
                            <div className="w-16 text-right text-sm text-neutral-400">
                              {song.duration}
                            </div>
                            <div className="w-32 truncate text-sm text-neutral-400">
                              {song.album}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </main>
      <Player
        song={currentSong}
        onNext={playNext}
        onPrevious={playPrevious}
      />
    </div>
  )
}

