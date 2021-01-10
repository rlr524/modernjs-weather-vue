module.exports = {
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "ModernJS Course Weather App with Vue";
			return args;
		});
	},
};
