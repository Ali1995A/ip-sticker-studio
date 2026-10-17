const { textField, imageField } = require('./ai-guard.cjs');
const policy = { scope: 'sticker-generate', perMinute: 8, perDay: 100, concurrent: 2, maxBodyBytes: 4 * 1024 * 1024,
  validate(body) { imageField(body, 'image', true); textField(body, 'theme', 80); }
};
module.exports = { policy };
