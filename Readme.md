# POC #01 - React Node Setup

## System Architecture

1. High Level Design (HLD)
```mermaid
  sequenceDiagram
    actor User
    participant Frontend
    participant Backend

    User -->> Frontend : ui request
    Frontend -->> Backend : api request
    Backend --> Frontend : api response
    Frontend --> User : ui response
```

2. Low Level Design (LLD)
```mermaid
  flowchart LR
    User(("User"))
    
    subgraph Testing["Testing"]
      subgraph Frontend["Frontend"]
        React["React"]
      end

      subgraph Backend["Backend"]
        Express["Express"]
      end
    end

    User --> Frontend
    Frontend --> Backend
```

## Servers & DNS

- Backend
  - Development
    - Local: [http://localhost:8001](http://localhost:8001)
    - Live: []()

  - Testing
    - Local: []()
    - Live: []()

  - Staging
    - Local: []()
    - Live: []()

  - Production
    - Local: []()
    - Live: []()

- Frontend
  - Development
    - Local: [http://localhost:5173](http://localhost:5173)
    - Live: []()

  - Testing
    - Local: []()
    - Live: []()

  - Staging
    - Local: []()
    - Live: []()

  - Production
    - Local: []()
    - Live: []()

## Timeline History

- Sprint #001
  - Started: 17th Sept - 11:00
  - Ended: 
  - Total: 
