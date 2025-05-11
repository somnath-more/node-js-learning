const os = require('os');
const { log } = require('console');
const osInfo = {
  platform: os.platform(),
  arch: os.arch(),
  cpuCores: os.cpus().length,
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  homeDir: os.homedir(),
  uptime: os.uptime(),
};
log('OS Information:');
log(`Platform: ${osInfo.platform}`);
log( os.cpus().length)
log(`Architecture: ${osInfo.arch}`);
log(`CPU Cores: ${osInfo.cpuCores}`);
log(`Free Memory: ${osInfo.freeMemory}`);
log(`Total Memory: ${osInfo.totalMemory}`);
log(os.hostname())
log(`Home Directory: ${osInfo.homeDir}`);
log(`Uptime: ${osInfo.uptime} seconds`);
log(os.userInfo())
log(os.type())