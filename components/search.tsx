'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CommandDialogDemo } from './command'

export default function GoogleSearchRedirect() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`
      window.location.href = googleSearchUrl
    }
  }

  return (
    <div className="max-w-md p-4 mx-auto mt-64">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Cari?</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Mau cari apa?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow"
                required
              />
              <Button type="submit">Cari</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <CommandDialogDemo/>
    </div>
  )
}