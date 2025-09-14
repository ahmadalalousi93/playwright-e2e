export default {
  default: {
    import: ['ts-node/register', 'tests/bdd/steps/**/*.ts'],
    paths: ['tests/bdd/features/**/*.feature'],
    format: ['progress', 'html:./bdd-report/report.html'],
    publishQuiet: true,
    parallel: 1,
  },
};
