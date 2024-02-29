import chalk from 'chalk'
import { Elysia } from 'elysia'

import { authenticateFromLink } from './routes/authenticate-from-link'
import { registerRestaurant } from './routes/register-restaurant'
import { sendAuthLink } from './routes/send-auth-link'

const app = new Elysia()
  .use(registerRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)

app.listen(3333, () => {
  console.log(chalk.bgRed.black('🔥 HTTP Server running on port 3333'))
})
