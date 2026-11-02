/// <reference types="vite/client" />
import type { ThreeElements } from '@react-three/fiber';

// @types/react 19 moved JSX under React.JSX; expose react-three-fiber's elements there too.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
