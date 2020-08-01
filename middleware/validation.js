const Joi = require('@hapi/joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    })

    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    })

    return schema.validate(data)
}

const taskValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(6).max(255).required(),
    })

    return schema.validate(data)
}

const bookValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(6).max(255).required(),
        bookPath: Joi.string().max(500).required(),
        coverPath: Joi.string().max(500).required(),
        category: Joi.string().max(50).required(),
        marks: Joi.string().max(5000),
        review: Joi.string().max(10000),
        allPages: Joi.number().required(),
    })

    return schema.validate(data)
}

const categoryBooksValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
    })

    return schema.validate(data)
}

module.exports = {
    registerValidation,
    loginValidation,
    taskValidation,
    bookValidation,
    categoryBooksValidation,
}
