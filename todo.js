function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 let cnt=1;
 var da;
function add() {
    var task = new Date();
    task+='<td>';
    da = document.getElementById('task').value;
    
    task+=da;
    task+='</td>';
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<table class="table table-striped table-bordered table-hover">';
    html+='<tr><th>S.No</th><th>Date & Time </th><th>Saved Work ToDo</th><th>Done</th></tr>';


    
    for(var i=0; i<todos.length; i++) {
        var x=i+1;
        html += '<tr><td>'+x+'</td><td>' + todos[i] +" " + '</td><td><button class="close" data-dismiss="alert" id="' + i  + '">X</button></td></tr>';
    };
    html += '</table>';
 
    document.getElementById('todos').innerHTML = html;
    document.getElementById('tr').innerHTML = i ;
 
    var buttons = document.getElementsByClassName('close');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

}
 
document.getElementById('add').addEventListener('click', add);
show();

