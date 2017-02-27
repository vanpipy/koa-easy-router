'use strict';

const methods = [
    'HEAD',
    'OPTIONS',
    'GET',
    'PUT',
    'PATCH',
    'POST',
    'DELETE'
];

function Router () {
    return this;
}

Router.prototype.route = () => {

    return (ctx, next) => {

    };
};

//TODO: nested route.

module.exports = Router;
