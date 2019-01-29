module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	            ? '/karl/'
	            : '/',
	outputDir: 'docs'
};
