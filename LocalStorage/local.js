let data = [
    { id: 1, Name: "sathishkukmar", email: "sathk406@gmauil.com" },
    { id: 2, Name: "arunkumar", email: "sathniuhu60@gmail.com" }
]

function readall() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table")


    var object = localStorage.getItem('object')
    var objectdata = JSON.parse(object);
    var elements = "";


    objectdata.map(record => (
        elements += `<tr>
        <td>${record.Name}</td>
        <td>${record.email}</td>
        <td>
        <button class="edit" onclick={edit(${record.id})}>Edit</button>
        <button class="delete" onclick={delet(${record.id})}>Delete</button>
        </td> `
    ))

    tabledata.innerHTML = elements;

}


function Create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add").style.display = "none";
}


function add() {
    var Name = document.querySelector(".names").value;
    var email = document.querySelector(".emails").value;

    var newobj = { id: 3, Name: Name, email: email };
    data.push(newobj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add").style.display = "block";

    readall();
}



function edit(id) {
    document.querySelector(".update_form").style.display = "block";

    var obj = data.find(rec => rec.id === id);
    document.querySelector('.uname').value = obj.Name;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.id').value = obj.id;

}



function update() {
    var id = parseInt(document.querySelector(".id").value);
    var Name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;

    document.querySelector(".update_form").style.display = "none";

    var index = data.findIndex(rec => rec.id === id);
    data[index] = { id, Name, email };
    readall();
}


function delet(id) {
    data = data.filter(rec => rec.id !== id);
    //   data.splice(id,1);
    readall();
}