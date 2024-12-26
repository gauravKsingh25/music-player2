"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your login logic here
    console.log('Login attempted with:', email, password)
    // For demo purposes, we'll just redirect to home
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-neutral-800 rounded-xl">
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-300">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>
      </div>
    </div>
  )
}

