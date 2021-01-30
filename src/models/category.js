const mongoose = require('mongoose');

const Category = mongoose.Schema({
    category: String,
})

module.exports = mongoose.model('Category', Category);


/* 
const createCategory = async (data) =>{
    try{
        const category = new Category(data)
        await category.save()

        console.log(category);
    } catch(error){
        console.log(error);
    }
}


createCategory({
    category: 'mechanics',
}) 
createCategory({
    category: 'culture',
}) 
createCategory({
    category: 'learn',
}) 
createCategory({
    category: 'nature',
}) 
createCategory({
    category: 'programing',
})  */
