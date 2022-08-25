<p align="center">
  
</p>


<p align="center">
</p>

## 🔖 Layout

You can view the project layout through the link below:

- [Feedback Widget - Figma](https://www.figma.com/community/file/1102912516166573468)

<a>
<img src="https://user-images.githubusercontent.com/89225210/186669267-7aa78dc0-10ca-472f-8d26-62e028ba1b7c.jpg">
</a>

Remembering that you need to have a [Figma](http://figma.com/) account to access it.


✨ Desenvolvido com as seguintes tecnologias:
- <img src="https://user-images.githubusercontent.com/89225210/154761002-389268dc-1404-4e8e-96ed-6f83916ae9ef.png" height="15px"/>[React](https://reactjs.org)
- <img src="https://user-images.githubusercontent.com/89225210/169611439-0b610544-c401-4bf1-814d-3ce12774c37d.png" height="15px"/>[Tailwind CSS](https://tailwindcss.com/)
- <img src="https://user-images.githubusercontent.com/89225210/154760385-8c7a5ab6-c15e-4dee-b285-d0ca77952d29.png"  height="15px"/>[TypeScript](https://www.typescriptlang.org/)
- <img src="https://user-images.githubusercontent.com/89225210/169612090-a7f2cf9c-4ad7-47de-bb6a-5b02a08e3037.png"  height="15px"/>[React Native](https://reactnative.dev/)
- <img src="https://user-images.githubusercontent.com/89225210/169613173-3cf9520e-f2b7-46de-be7a-8516a7b3939f.png"  height="15px"/>[Expo](https://expo.io/)
- <img src="https://vitejs.dev/logo.svg" height="15px"/>[Vitejs](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/package/npm)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli)


**Follow the steps below**

### Server

```bash
# From the project root folder access the 'server' folder
$ cd server
# Install the dependencies
$ npm install
# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env
# With a PostgreSQL running, run the migrations
$ npx prisma migrate dev
# Start the server
$ npm run dev
```

### Web

**Make sure to have the server running**

```bash
# From the project root folder access the 'web' folder
$ cd web
# Install the dependencies
$ npm install
# Make a copy of '.env.local.example' to '.env.local'
$ cp .env.local.example .env.local
# Start the application
$ npm run dev
```



