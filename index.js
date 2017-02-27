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

function Router() {
    let _Router = this;

    this.stacks = [];
    this.methods = methods;

    methods.map((method) => {
        _Router[method.toLowerCase()] = registerGenerator(method, _Router);
    });

    return this;
}

Router.prototype.route = function () {
    const _Router = this;

    const dispatch = (ctx, next) => {
        let i = _Router.stacks.length;
        while (i--) {
            const stack = _Router.stacks[i];

            if (stack.method === ctx.req.method && stack.path === ctx.req.url) {
                return next().then(stack.func(ctx, next));
            }
        }
    };

    return dispatch;
};

function registerGenerator (method, Router) {
    return (path, func) => (Router.stacks.push({ path, method, func }));
}

//TODO: nested route.

module.exports = Router;
