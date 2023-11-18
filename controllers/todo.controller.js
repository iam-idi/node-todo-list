let data = [{item: 'Buy Milk'}, {item: 'Walk Dog'}, {item: 'Write Code'}];

module.exports = function(app){

    app.get('/todo', (req, res)=>{
        res.render('todo', {todos: data});
    });

    app.post('/todo', (req, res)=>{
        data.push(req.body);
        res.render('todo', {todos: data});
    });

    app.delete('/todo/:item', (req, res)=>{
        data = data.filter((todo)=>{
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.redirect('/todo');
    });
}