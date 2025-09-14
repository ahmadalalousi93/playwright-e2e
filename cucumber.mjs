export default {
  default: {
    import: ['tests/bdd/steps/**/*.mjs'],
    paths: ['tests/bdd/features/**/*.feature'],
    format: ['progress', 'html:./bdd-report/report.html'],
    publishQuiet: true,
    parallel: 1,
  },
};
