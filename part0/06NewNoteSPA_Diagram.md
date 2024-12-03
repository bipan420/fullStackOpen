```mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server->>browser: Returns the json containing new note [{"content": "Hello world", "date": 2024-12-02}]
```
