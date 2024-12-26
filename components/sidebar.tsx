"use client"

import { Home, TrendingUp, Library, Compass, Settings, LogOut } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Trends", href: "/trends", icon: TrendingUp },
    { name: "Library", href: "/library", icon: Library },
    { name: "Discover", href: "/discover", icon: Compass },
  ]

  return (
    <div className="flex h-screen w-64 flex-col bg-black p-4">
      <div className="flex items-center gap-2 pb-8">
        <div className="text-red-500">♪</div>
        <h1 className="text-xl font-bold">
          <span className="text-red-500">Dream</span>
          <span className="text-white">Music</span>
        </h1>
      </div>
      
      <div className="flex flex-1 flex-col gap-1">
        <div className="pb-4">
          <p className="pb-2 text-xs font-semibold uppercase text-neutral-600">Menu</p>
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive 
                      ? "bg-red-500/10 text-red-500" 
                      : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="pb-2 text-xs font-semibold uppercase text-neutral-600">General</p>
        <Button 
          variant="ghost" 
          className="justify-start gap-3 px-3 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          onClick={() => router.push('/settings')}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <Button 
          variant="ghost" 
          className="justify-start gap-3 px-3 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          onClick={() => {
            localStorage.removeItem('session')
            router.push('/login')
          }}
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}

