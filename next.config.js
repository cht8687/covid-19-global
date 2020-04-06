const exposedConfigs = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': {page: '/'},
      '/australia': {page: '/australia'},
      '/usa': {page: '/usa'},
      '/canada': {page: '/canada'},
      '/france': {page: '/france'},
      '/about-us': {page: '/about-us'},
    };
    return paths;
  },
};
const configuration = Object.assign(exposedConfigs);
module.exports = configuration;
