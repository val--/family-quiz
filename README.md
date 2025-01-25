# Family Quiz - A Quiz Application

![WIP project screenshot](./public/images/app-screenshot.png "WIP project screenshot")

## Run the project locally using dev containers

You can open this project with Visual Studio Code & hit "re-open with Dev Container".  This will automatically create and seed a local database with some fixtures.

## Run the project locally using docker

- `docker compose up -d`
- `docker exec -it family-quiz-front-1 sh -c "npx prisma migrate dev --name init && npx prisma db seed"`


The application will be available through `localhost:3000`.

---

TODO:
- Accounts
- Persistence (sessions, scores...)
- Manage quiz data (themes, difficulty...)
- Amazing animations
- ... a lot more