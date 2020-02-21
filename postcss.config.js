module.exports = {
    plugins: [
      'postcss-easy-import', 'autoprefixer', 'cssnano', 'tailwindcss'
      // [ '@fullhuman/postcss-purgecss', {
      //   content: [
      //     './pages/*/*.js', 
      //     './src/*.js',
      //     './src/components/*/*.js', 
      //     './pages/*.js', 
      //     './src/components/*.js'
      //   ],
      //   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      // }]  
    ],
  }