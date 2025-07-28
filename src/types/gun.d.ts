import type { IGunInstance } from 'gun';

declare module 'gun' {
  interface IGunInstance {
    clear(): void;
    lookup(key: string, id: string): Promise<any>;
  }
  
  interface IGunChain {
    then(): Promise<any>;
  }
}