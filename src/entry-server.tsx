/**
 * source https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-react/src/entry-server.jsx
 */

import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * @param {string} _url
 */
export function render(_url: string) {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  return { html }
}
