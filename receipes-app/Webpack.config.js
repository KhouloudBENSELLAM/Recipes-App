const path = require('path');

module.exports = {
  entry: './src/index.js', // Fichier d'entrée
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
};
