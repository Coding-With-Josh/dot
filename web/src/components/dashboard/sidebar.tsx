"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, LayoutDashboard, BarChart3, MessagesSquare, Users, Settings, Plus, Menu } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
    onToggle?: () => void;
}

export function Sidebar({ className, isOpen, onToggle }: SidebarProps) {
    return (
        <div className={cn(
            "flex h-screen flex-col items-center border-r border-dao-border bg-zinc-900 py-4 transition-all duration-300",
            isOpen ? "w-[240px]" : "w-[72px]",
            className
        )}>
            <div className="flex w-full items-center justify-between px-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    <div className="h-3 w-3 rounded-full bg-white" />
                </div>
                <Button variant="ghost" size="icon" onClick={onToggle} className="md:hidden">
                    <Menu className="h-5 w-5 text-dao-text" />
                </Button>
            </div>

            {/* Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="my-4 h-8 w-8 rounded-lg bg-dao-input p-0">
                        <ChevronDown className="h-4 w-4 text-white" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Option 1</DropdownMenuItem>
                    <DropdownMenuItem>Option 2</DropdownMenuItem>
                    <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col items-center justify-center space-y-3">
                <Link href="/dashboard">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-xl bg-dao-input text-white hover:bg-dao-input/80"
                    >
                        {/* <LayoutDashboard className="h-5 w-5" /> */}
                        <Home/>
                        <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Dashboard</span>
                    </Button>
                </Link>
                <Link href="/analytics">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
                    >
                        <BarChart3 className="h-5 w-5" />
                        <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Analytics</span>
                    </Button>
                </Link>
                <Link href="/messages">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
                    >
                        <MessagesSquare className="h-5 w-5" />
                        <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Messages</span>
                    </Button>
                </Link>
                <Link href="/team">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
                    >
                        <Users className="h-5 w-5" />
                        <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Team</span>
                    </Button>
                </Link>
            </nav>

            {/* Bottom Actions */}
            <div className="flex flex-col items-center space-y-3 py-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
                >
                    <Settings className="h-5 w-5" />
                    <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Settings</span>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-xl bg-dao-purple text-white hover:bg-dao-purple/90"
                >
                    <Plus className="h-5 w-5" />
                    <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Add New</span>
                </Button>
            </div>

            {/* User Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-12 w-full rounded-full p-0">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>User Menu</span>
                        <ChevronDown className="ml-auto h-4 w-4 text-dao-text" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <Link href="/">
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </Dr