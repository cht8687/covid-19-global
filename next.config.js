const exposedConfigs = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': {page: '/'},
      '/australia': {page: '/australia'},
      '/usa': {page: '/usa'},
    };
    return paths;
  },
};
const configuration = Object.assign(exposedConfigs);
module.exports = configuration;
