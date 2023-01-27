import { app } from "./app"
import { setupDb } from '../../database/setupDb'

app.listen(3000, async () => {
  await setupDb()
  
  console.log('Server started on port 3000')
})
