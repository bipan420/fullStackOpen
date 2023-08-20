```mermaid
sequenceDiagram
  participant browser
  participant server
  
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  
  Note right of browser: Browser executes JavaScript code that fetches the JSON from the server
  
  Note right of browser: Browser updates the notes without re-rendering the page
  

```
