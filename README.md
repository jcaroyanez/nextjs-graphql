## Correr el proyecto

Primero cambiar la url para la conexión de su BD, en el archivo .env la variable DATABASE_URL

Segundo correr la migración de la DB con
```bash
npx prisma db push
```

Como ultimo levantar el server del proyecto con:

```bash
npm run dev
# or
yarn dev
```