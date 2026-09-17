# POC #01 - React Node Setup

## System Architecture

### 1. High Level Design (HLD)
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

### 2. Low Level Design (LLD)

#### 2.1. Project LLD
```mermaid
  flowchart LR
    User(("User"))

    subgraph Testing["Testing (Playwright)"]
      subgraph Frontend["Frontend (develop)"]
        React["React"]
      end

      subgraph Backend["Backend (develop)"]
        Express["Express"]
      end
    end

    User --> Frontend
    Frontend --> Backend
```

#### 2.2. Environment LLD
```mermaid
  flowchart LR
    Site["Frontend / Backend / Testing"]
  
    subgraph Environment["Environment"]
      Project
      Development["Development"]
      Testing["Testing"]
      Staging["Staging"]
      Production["Production"]
      Initialize["Initialize"]
    end

    Site --> Project
      Project --> Development
      Project --> Testing
      Project --> Staging
      Project --> Production
      Development --> Initialize
    Testing --> Initialize
    Staging --> Initialize
    Production --> Initialize

```

## Servers & DNS

- Backend
  - Development
    - Local: [http://localhost:8001](http://localhost:8001)
    - Live: []()

  - Testing
    - Local: [http://localhost:8002](http://localhost:8002)
    - Live: []()

  - Staging
    - Local: [http://localhost:8003](http://localhost:8001)
    - Live: []()

  - Production
    - Local: [http://localhost:8004](http://localhost:8001)
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

- Testing
  - Local Report: [http://localhost:9323/](http://localhost:9323/)
  - Live Report: 

## Timeline History

- Sprint #001
  - Started: 17th Sept - 11:00
  - Ended: 
  - Total: 
