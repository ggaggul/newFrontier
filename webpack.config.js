const path = require('path');

// Webpack and its plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');


/*
var MODULE_BUILD_DIR = path.resolve(__dirname, 'web/assets/build');
var MODULE_BUILD_CSS_DIR = path.resolve(__dirname, 'web/assets/css');
var MODULE_APP_DIR = path.resolve(__dirname, 'client/');
*/


const metadata = {
	MODE : process.env.MODE || 'development',
	HOST : process.env.HOST || '0.0.0.0',
	PORT : process.env.PORT || 8080
};

const config = {
	entry : {
		'frontier' : './src/frontier',
		'vendor' : './src/vendor'
	},
	resolve : {
		extensions : ['.ts', '.js']
	},
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : '[name].bundle.js'
	},
	module : {
		loaders : [
			{ test : /\.(woff$|woff2)$/, loader : 'url-loader?limit=10000&mimetype=application/font-woff' },
			{ test : /\.ttf$/, loader : 'url-loader?limit=10000&mimetype=application/octet-stream' },
			{ test : /\.svg$/, loader : 'url-loader?limit=10000&mimetype=image/svg+xml' },
			{ test : /\.eot$/, loader : 'file-loader' },
			{ test: /\.(gif|png|jpe?g)$/, loader : 'url-loader?name=images/[name].[ext]&mimeType=image/[ext]&limit=100000'}
		]
	},
	plugins : [
		new DefinePlugin({ 'webpack' : { 'MODE' : JSON.stringify(metadata.MODE) }, 'require.specified': 'require.resolve' }),
		new ProvidePlugin({ jQuery : 'jquery', $ : 'jquery', 'window.jQuery' : 'jquery' })
	],
	devtool : 'source-map'
};

switch (metadata.MODE) {
	case 'development':
		config.module.loaders.push(

			//main.ts(frontier.ts)���� require �Ǵ� import�� �����ϰ� ���� ���
			/*{ test : /\.css$/, loader : 'style-loader!css-loader', exclude : /node_modules/ },*/
            { test : /\.scss$/, loader : 'style-loader!css-loader!sass-loader', exclude : /node_modules/ },

            //�� component�� css�� loading�ؼ� styles ������Ƽ�ȿ� ��Ʈ������ ��ȯ�Ͽ� ����
            //{ test : /\.css$/, loader : 'to-string-loader!css-loader', exclude : /node_modules/ },

            { test : /\.css$/, loader : 'style-loader!css-loader', exclude : /src/ },

			{ test : /\.html$/, loader : 'raw-loader' },
			{ test : /\.ts$/, loader : 'awesome-typescript-loader', query : { compilerOptions : { noEmit : false } } }


			/*���忡�� css ����� ����Ұ�..
			{ test : /\.scss/, loader : ExtractTextPlugin.extract({
			 fallback: 'style-loader',
			 use: ['css-loader', 'sass-loader']
			 }), exclude : /node_modules/ },*/
			/*{ test : /\.css$/, loader : 'style-loader!css-loader?', exclude : /src/ },*/
		);

		config.plugins.push(
			new CommonsChunkPlugin({ name : 'vendor', filename : 'vendor.bundle.js', minChunks : Infinity })/*,
			new ExtractTextPlugin({filename : 'frontier.css', disable: false, allChunks: true })*/
		);

		config.devServer = {
			contentBase : '.',
			historyApiFallback : true,
			host : metadata.HOST,
			port : metadata.PORT,

            disableHostCheck: true,

            stats : {
				maxModules : 0,
				warnings : false
			}
		};
		break;

	case 'production':
		config.module.loaders.push(
            { test : /\.scss$/, loader : 'style-loader!css-loader!sass-loader', exclude : /node_modules/ },
			{ test : /\.css$/, loader : 'style-loader!css-loader', exclude : /src/ },
			{ test : /\.html$/, loader : 'html-loader?caseSensitive=true' },
			{ test : /\.ts$/, loader : 'awesome-typescript-loader', query : { compilerOptions : { noEmit : false } } }
		);

		config.plugins.push(
			new CommonsChunkPlugin({ name : 'vendor', filename : 'vendor.bundle.js', minChunks : Infinity }),
			new CompressionPlugin({ regExp : /\.css$|\.html$|\.js$|\.map$/ }),
			new CopyWebpackPlugin([{ from : './index.html', to : 'index.html' }]),
			new OccurrenceOrderPlugin(true),
			new UglifyJsPlugin({
				compress : { screw_ie8 : true },
				mangle : { screw_ie8 : true }
			})
		);

		config.stats = {
			maxModules : 0,
			warnings : false
		};
		break;

	case 'test':
		config.module.loaders.push(
			{ test : /\.css$/, loader : 'raw-loader', exclude : /node_modules/ },
			{ test : /\.css$/, loader : 'style-loader!css-loader?-minimize', exclude : /app/ },
			{ test : /\.html$/, loader : 'raw-loader' },
			{ test : /\.ts$/, loader : 'awesome-typescript-loader', query : { compilerOptions : { noEmit : false } } }
		);

		config.stats = {
			maxModules : 0,
			warnings : false
		};
		break;
}

module.exports = config;