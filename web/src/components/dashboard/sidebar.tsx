"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, LayoutDashboard, BarChart3, MessagesSquare, Users, Settings, Plus, Menu, Wallet, Store, AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { HomeDuoToneWhite } from "@/assets/icons"
import { NavUser } from "../nav-user"
import { TeamSwitcher } from "../team-switcher"
import { SidebarProvider } from "../ui/sidebar"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
    onToggle?: () => void;
}

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
}

export function Sidebar({ className, isOpen, onToggle }: SidebarProps) {
    return (

            <div className={cn(
                "flex h-screen flex-col items-center border-r border-dao-border bg-zinc-900 py-4 transition-all duration-300",
                isOpen ? "w-[240px]" : "w-[85px]",
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


                {/* Navigation */}
                <nav className="flex flex-1 flex-col items-center justify-center space-y-3">
                <TeamSwitcher teams={data.teams} />
                    <Link href="/dashboard">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-xl bg-dao-input text-white hover:bg-dao-input/80"
                        >
                            <LayoutDashboard className="h-5 w-5" />
                            {/* <HomeDuoToneWhite/> */}
                            <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Dashboard</span>
                        </Button>
                    </Link>
                    <Link href="/wallet">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
                        >
                            {/* <BarChart3 className="h-5 w-5" /> */}
                            <Wallet />
                            <span className={cn("ml-2", isOpen ? "inline-block" : "hidden")}>Wallet</span>
                        </Button>
                    </Link>
                    <Link href="/messages">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
                        >
                            {/* <MessagesSquare className="h-5 w-5" /> */}
                            <Store />
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
                <NavUser user={data.user} />
            </div>
    )
}

