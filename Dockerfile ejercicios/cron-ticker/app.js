
import cron from 'node-cron'




cron.schedule('1-59/5 * * * * *', () => {
  times++
  console.log('tick cada 5 segundos', times)
});

console.log('Hola Mundo')
