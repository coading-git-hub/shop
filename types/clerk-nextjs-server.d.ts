declare module "@clerk/nextjs/server" {
  import { AuthObject } from "@clerk/backend";
  
  export function auth(): AuthObject;
  export function currentUser(): Promise<any>;
}