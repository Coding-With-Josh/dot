"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown, Mic, Search } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"

export function Header() {
  const [open, setOpen] = React.useState(false)
  const [showVoicePopup, setShowVoicePopup] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <header className="flex h-16 items-center justify-between border-b border-dao-border bg-dao-bg px-4 md:px-6">
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-dao-text" />
          <Input
            type="search"
            placeholder="Search..."
            className="h-10 w-[280px] rounded-full bg-dao-input pl-10 pr-12 text-sm text-white placeholder-dao-text focus-visible:ring-1 focus-visible:ring-dao-purple lg:w-[420px]"
            onClick={() => setOpen(true)}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 transform rounded-full bg-dao-input text-dao-text hover:bg-dao-input hover:text-white"
            onClick={() => setShowVoicePopup(true)}
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-dao-input text-dao-text hover:bg-dao-input hover:text-white md:hidden"
          onClick={() => setOpen(true)}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-dao-text hover:bg-dao-input hover:text-white">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="relative">
          <Avatar className="h-9 w-9 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="@user1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar className="absolute -bottom-1 -right-1 h-6 w-6 border-2 border-dao-bg">
            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
        </div>
        <Button variant="ghost" className="hidden h-10 space-x-2 rounded-full bg-dao-input px-4 text-sm font-normal text-white hover:bg-dao-input/80 md:inline-flex">
          <span>0x735...13E7</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <Dialog open={showVoicePopup} onOpenChange={setShowVoicePopup}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <Mic className="h-16 w-16 text-dao-purple" />
            <p className="text-lg font-semibold">Listening...</p>
            <p className="text-sm text-dao-text">Speak now to record your voice</p>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}

