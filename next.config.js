const exposedConfigs = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': {page: '/'},
      '/australia': {page: '/australia'},
      '/usa': {page: '/usa'},
      '/about-us': {page: '/about-us'},
    };
    return paths;
  },
};
const configuration = Object.assign(exposedConfigs);
module.exports = configuration;
