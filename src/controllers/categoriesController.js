const database = require('../config/database');
const Category = require('../models/category');


exports.findOne = async (req, res) => {
    try{
        const { category } = await Category.findOne({
            _id: req.params.id
        });
        return res.status(200).send({category});
    } catch (error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    let limit = parseInt(req.query.limit);

    try{
        const category = await Category.find({
        }).limit(limit).sort({date: 'desc'});
        return res.status(200).send(category);
    } catch (error){
        console.log(error);
    }
};


/* const createCategory = async (data) =>{
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
    name: 'test',
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
