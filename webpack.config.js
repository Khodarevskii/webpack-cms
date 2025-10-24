const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: './src/scripts/index.js',       
    'content': './src/scripts/content.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '',
  },
  devtool: false,
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 8080,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
            minified: false,
            comments: false,
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
    ],
  },
  optimization: {
    minimize: true,
    
    runtimeChunk: 'single', 
    
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 20,
          enforce: true,
        },
        common: {
          minChunks: 2,
          name: 'common',
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    },
    
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: false,       
          mangle: false,         
          keep_classnames: true,
          keep_fnames: true,
          format: {
            comments: false,    
            beautify: true,
            indent_level: 2,
            preserve_annotations: true,
          },
        },
        extractComments: false,  
      }),

      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {

              jpeg: {
                quality: 85,
                progressive: true,
              },

              png: {
                quality: 85,
                compressionLevel: 9,
              },

              webp: {
                quality: 85,
              },

              avif: {
                quality: 80,
              },
            },
          },
        },

        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              encodeOptions: {
                webp: {
                  quality: 85,
                },
              },
            },
          },
        ],
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
