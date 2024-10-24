# Family Quiz - A Quiz Application

![WIP project screenshot](./public/images/app-screenshot.png "WIP project screenshot")

You can open this project with Visual Studio Code & hit "re-open with Dev Container". 

Memo:
docker compose up --build -d
docker-compose exec app npm run prisma:generate
docker-compose exec app npm run prisma:migrate
docker-compose exec app npm run prisma:studio

---

TODO:
- Accounts
- Persistence (sessions, scores...)
- Manage quiz data (themes, difficulty...)
- Amazing animations
- ...

---

Note: as a quiz sample, i used data from https://www.openquizzdb.org/