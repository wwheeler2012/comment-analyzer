export default () => ({
  environment: process.env.ENVIRONMENT || 'develop',
  report_metrics: process.env.REPORT_METRICS || {
    SHORTER_THAN_8: 8,
    SHORTER_THAN_15: 15,
    MOVER_MENTIONS: 'Mover',
    SHAKER_MENTIONS: 'Shaker',
    QUESTIONS: '?',
    SPAM: 'http',
  },
});
