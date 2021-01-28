const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const mongoose = require('mongoose');

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
    branding: {
        logo: false,
        companyName: 'Stowarzyszenie Sądecki Elektryk',
    },
})

const ADMIN = {
    email: process.env.ADMIN_COOKIE_EMAIL,
    password: process.env.ADMIN_COOKIE_PASSWORD,
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    cookiePassword: process.env.ADMIN_COOKIE_PASSWORD || 'password',
    authenticate: async (email, password) => {
        if(email === ADMIN.email && password === ADMIN.password){
            return ADMIN;
        }
        return null;
    }
});

module.exports = router;