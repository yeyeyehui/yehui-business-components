const cliProgress = require("cli-progress");

const { greenBright } = require("../chalk");

const progress = new cliProgress.MultiBar({
  format: greenBright(`{bar} / {percentage}%`),
  stopOnComplete: true,
  clearOnComplete: true,
});

module.exports = {
  start: () => {
    const pro = progress.create(100, 0);

    const interval = setInterval(() => {
      pro.update(pro.value + 1);

      if (pro.value >= pro.getTotal() - 1) clearInterval(interval);
    }, 100);

    return { pro, interval };
  },
  stop: ({ pro, interval }) => {
    pro.update(100);
    clearInterval(interval);
    pro.stop();
  },
};
