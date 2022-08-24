const mongoose = require('mongoose')


const Favorite = new mongoose.Schema(
    {
      favoriteList: {type: Array, required: true}
    },
    { collection: "user-favorite" }
  );
  
  const model = mongoose.model('UserFavorite', Favorite)
  
  module.exports = model    