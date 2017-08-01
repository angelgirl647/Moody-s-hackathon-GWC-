var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};

function addEvent(){
var answer=document.getElementById("todo-text").value;
var list=document.getElementById("yukilist")
var e = document.createElement("li")
e.innerHTML=answer;
e.className="list-group-item";
list.appendChild(e);
}

(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });



    };

    var removeElement = function (id) {

    };

    todo.add = function () {
        var todotext = $('#todo-text').val();

    };


})(todo, data, jQuery);
