# newsletter

That is the architecture to build. The goals it's learn gRPC, HTTP 2.0, Kafka and API gateway architecture.

![image](https://user-images.githubusercontent.com/58860863/186171883-bd41d0ef-396a-408a-b362-5c86e87654f6.png)

# Features

[] Subscribe

- POST /subscribe
  - request (username, email)
  - response (success message: you are subscribed to newsletter)
    - email confirmation (kafka + email server)
