declare module "@clerk/nextjs/server" {
  export function auth(): any;
  export function currentUser(): Promise<any>;
}

declare module "@clerk/nextjs" {
  import { ComponentType } from "react";
  
  export const ClerkLoaded: ComponentType<{ children: React.ReactNode }>;
  export const SignedIn: ComponentType<{ children: React.ReactNode }>;
  export const UserButton: ComponentType<any>;
}