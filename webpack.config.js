module.exports = (env) => {
	console.log("env", env);
	return require(`./webpack.${env.NODE_ENV}.config`);
}
