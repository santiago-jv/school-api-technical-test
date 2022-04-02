const SchoolRepository = require("../repositories/schoolRepository")

const SchoolController = {}

SchoolController.createSchool = async (request,response) => {
    const {name} = request.body
    try {
        const school= await SchoolRepository.createSchool(name)
        return response.status(201).json({
            message:'School created successfully',
            school
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


module.exports = SchoolController