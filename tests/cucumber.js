module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/bdd/steps/**/*.ts'],
    publishQuiet: true,
    format: ['progress', 'html:./bdd-report/report.html'],
    paths: ['tests/bdd/features/**/*.feature'],
    parallel: 1,
  },
};
