function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}


 
function add() {
    var task = document.getElementById('task').value;
    task+='<td>';
    var d=new Date();    //date and time will be added by this object
    var date=d.toLocaleDateString();
    task+=date;
    task+='</td>';


    task+='<td>';
    var time=d.toLocaleTimeString();
    task+=time;
    task+='</td>';

    

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
// I want to disabled the add function when i don't write any thing in task
  function Empty(){
            var h='<button class="btn btn-primary" id="add" disabled="disabled" style="width:100%;">Add</button>';
            var x='<button class="btn btn-primary" id="add" style="width:100%;">Add</button>'
  
            var text=document.getElementById('task').value; //taking the stored value
            if(text=="")
            {
                document.getElementById("add").innerHTML=h;//adding the value of h into of id add
            }
            else
            {
                document.getElementById("add").innerHTML=x;
            }

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
    
    var html = '<table class="table table-striped">';
        html+='<tr> <th> Number </th>  <th>Task</th>  <th>Date</th> <th>Time</th> <th>Check</th></tr>';
    for(var i=0; i<todos.length; i++) {
        html += '<tr> <td>'+ (i+1) + " " + '</td> <td>'  + todos[i] + " "+ '</td><td> <input type="checkbox"  class="checkbox"  ></td> <td><button  class="remove" id="' + i  + '">&times;</button></td></tr> ';
    };
    html += '</table>';

    html+='<span>';
        document.getElementById('demo').innerHTML=i;
        if(i>=3)
        {
         document.getElementById('total').innerHTML= '<button class="btn btn-danger " type="button"  style="padding:15px;" >Task Remaining <span class="badge" id="demo" >'+i+'</span></button>'   
        }
        else
        {
          document.getElementById('total').innerHTML= '<button class="btn btn-primary " type="button" style="padding:15px;" >Task Remaining <span class="badge" id="demo" >'+i+'</span></button>'  
        }
    html+='</span>';    
 
    

    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();

