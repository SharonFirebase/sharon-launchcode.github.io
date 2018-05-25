#### https://firebase.google.com/docs/database/web/structure-data

##### Flatten data structures
###### If the data is instead split into separate paths, also called denormalization, it can be efficiently downloaded in separate calls, as it is needed. Consider this flattened structure:

        {
          // Chats contains only meta info about each conversation
          // stored under the chats's unique ID
          "chats": {
            "one": {
              "title": "Historical Tech Pioneers",
              "lastMessage": "ghopper: Relay malfunction found. Cause: moth.",
              "timestamp": 1459361875666
            },
            "two": { ... },
            "three": { ... }
          },

          // Conversation members are easily accessible
          // and stored by chat conversation ID
          "members": {
            // we'll talk about indices like this below
            "one": {
              "ghopper": true,
              "alovelace": true,
              "eclarke": true
            },
            "two": { ... },
            "three": { ... }
          },

          // Messages are separate from data we may want to iterate quickly
          // but still easily paginated and queried, and organized by chat
          // conversation ID
          "messages": {
            "one": {
              "m1": {
                "name": "eclarke",
                "message": "The relay seems to be malfunctioning.",
                "timestamp": 1459361875337
              },
              "m2": { ... },
              "m3": { ... }
            },
            "two": { ... },
            "three": { ... }
          }
        }

###### It's now possible to iterate through the list of rooms by downloading only a few bytes per conversation, quickly fetching metadata for listing or displaying rooms in a UI. Messages can be fetched separately and displayed as they arrive, allowing the UI to stay responsive and fast.
