function showTable(){
  fetch("./lib/examples/students.json")
    .then(response => response.json())
    .then(data => createTable(data));
}

function createTable(data) {
    var table = "<table border=1>";
    // add a row for name and marks
    table += `<tr>
                <th>Name</th>
                <th colspan="4">Marks</th>
              </tr>`;
    // now add another row to show subject
    table += `<tr>
                <th></th>
                <th>Math</th>
                <th>English</th>
                <th>Chemistry</th>
                <th>Physics</th>
              </tr>`;
    // now loop through students
    // show their name and marks
    var tr = "";
    for(let i = 0; i < data.result.length; i++) {
      tr += "<tr>";
      tr += `<td>${data.result[i].name}</td>`;
      for (var key in data.result[i].marks) {
        tr += `<td>${data.result[i].marks[key]}</td>`;
      }
      tr += "</tr>"
    }
    table += tr + "</table>";
    
      // append table to body
      document.body.innerHTML += table;
    }