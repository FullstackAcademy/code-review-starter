const { join } = require('path');
const webpack = require('webpack');
const XMLHttpRequest = require('fake-xml-http-request');
const fs = require('fs');
module.exports = storePath => {
  return new Promise(function(resolve, reject) {
    const storeDir = join(storePath, '..');
    const newFilePath = join(storeDir, 'out.js');

    global.window = {};
    global.XMLHttpRequest = XMLHttpRequest;
    const compiler = webpack({
      entry: storePath,
      output: {
        path: storeDir,
        filename: './out.js',
        library: 'store',
        libraryTarget: 'umd',
      },
      context: storeDir,
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /jsx?$/,
            plugins: [
              new webpack.ProvidePlugin({
                  window: {}
              })
            ],
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015', 'stage-2']
            }
          }
        ]
      }
    })


    compiler.run((err, stats) => {
      if(err) {
        return reject(err);
      }
      resolve(JSON.stringify(
        require(newFilePath).default.getState(),
        null,
        2
      ));
    });

  });

  
}