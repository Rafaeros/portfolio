
```mermaid
---
title: User Database
---

erDiagram
    User {
        int id PK
        text name
        text email
        text password

    }

    User ||--o{ Projects: contains
    User ||--o{ Certificates: contains
```
