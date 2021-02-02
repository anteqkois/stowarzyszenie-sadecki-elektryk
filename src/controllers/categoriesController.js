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

exports.searchName = async (req, res) => {
    try{
        const category = await Category.findOne({
            _id: req.data.category
        });
        req.data.category = category;
        const { data } = req;
        return res.status(200).send({data: data});
    } catch (error){
        console.log(error);
    }
};

exports.searchNameAll = (req, res) => {
    try {
        const { data } = req;
    
        const asyncForEach = async () =>{
            for await (const element of data){
                const category = await Category.findOne({
                    _id: element.category
                });
                element.category = category;
            }

            const projects = Object.keys(data).map(key =>{
                return data[key];
            });
            return res.status(200).send(projects);
            //return res.status(200).send({...data});
        }
        asyncForEach()
    } catch (error) {
        console.log(error);
    }
    
/*     await req.data.forEach(async(element) =>{
        try{
            const category = await Category.findOne({
                _id: element.category
            });
            console.log(category);
            element.category = category;
            //console.log(req.data.category);
        } catch (error){
            console.log(error);
        }
        
    }) ; */
    //const { data } = req;
    /*     try{
        const category = await Category.find({
        }).limit(limit).sort({date: 'desc'});
        req.data.category = category;
        console.log(req.data.category);
        const { data } = req;
        return res.status(200).send({data: data.category});
    } catch (error){
        console.log(error);
    } */
};

/* exports.searchName = async (req, res) => {
    try{
        const nameCategory = await Category.findOne({
            _id: req.data.category
        });
        req.data.category = nameCategory;
        const { data } = req;
        return res.status(200).send({data: data, category: nameCategory});
    } catch (error){
        console.log(error);
    }
}; */

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
