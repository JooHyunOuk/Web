Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', {
    name: 'home',
    template: 'home'
});
Router.route('/search', {
    name: 'search',
    template: 'search'
});
Router.route('/list', {
    name: 'list',
    template: 'list'
});