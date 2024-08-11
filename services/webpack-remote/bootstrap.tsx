import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './src/app';

const root = document.getElementById('root');

if(!root) {
  throw new Error('#root not found')
}

const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)