// api url


//fetch('https://jsonplaceholder.typicode.com/posts')

async function logMovies() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{method:"get"});
    const data = await response.json();
    console.log(data);
    show(data);
  }
  ;
  logMovies();



// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		``;

	// Loop to access all rows
	for (let r of data) {
		tab += `
        ${"\n"}
        ${"\n"}

user ${r.id}:
<ul> 
<li>user id : ${r.userId} </li>
<li>id : ${r.id} </li>
<li>title : ${r.title} </li>
<li>body : ${r.body} </li></ul>



		`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
