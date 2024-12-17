import "next-auth"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role?: string // Optional role field
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role?: string // Optional role field
  }
}

// Extend the default JWT interface
declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role?: string
  }
}