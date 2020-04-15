module.exports = {
  mode: 'development',

  devServer: {

    // Tell webpack-dev-server to trigger full reload
    // when files in contentBase changes (as opposed
    // to only when JS dependency are modified).
    watchContentBase: true,
    
    // Serve static files from here. Note that
    // the normal webpack output will *not* show
    // up in dist as they are held in a virtual dir
    // during this time.
    contentBase: './dist',
    
  },

  module: {
    rules: [
      
      {
        test: /\.html/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index.[ext]'
            }
          }
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        ]
      }
    ]
  }

}