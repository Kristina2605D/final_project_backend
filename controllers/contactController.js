import Contact from '../schema/contactSchema.js';


export const postContact = async (req, res) => {
    try {
        const contact = new Contact({
            fullname:req.body.fullname,
            email:req.body.email,
            text:req.body.text
            
             
        })
        await contact.save()
        res.json(contact)
    } catch(error) {
        res.json({
            message:"something went wrong"
        })


    }
}