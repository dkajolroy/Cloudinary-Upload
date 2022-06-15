const cloudinary = require("cloudinary").v2

const cloudinaryConnect = () => {
    cloudinary.config({
        cloud_name: 'kajolroy',
        api_key: '861481572713445',
        api_secret: 'fJUJpkYwnt4CabWTosQB6LJ9bZQ'
    });
}


module.exports = cloudinaryConnect