import Furniture from '../schema/productSchema.js';


export const getFurnitures = async (req, res) => {
    try {
        const furniture = await Furniture.find()
        res.json(furniture)
    } catch (error) {
        res.json({
            message:'something went wrong'
        })
    }
}

export const postFurniture = async (req, res) => {
    try {
        // const id = req.params.id
        const furniture = new Furniture({
            title:req.body.title,
            price:req.body.price,
            imgUrl:req.body.imgUrl,
            categories:req.body.categories
             
        })
        await furniture.save()
        res.send(furniture)
    } catch(error) {
        res.json({
            message:'something went wrong'
        })
    }
}