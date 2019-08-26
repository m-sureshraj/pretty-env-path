exports.getEnvPath = function() {
  const path = process.env.PATH || '';

  return path.split(':');
};
