var posts=[
    {id:1,title:'daily JS news'},
    {id:2,title:'daily Python News'},
    {id:3,title:'daily C# news'},
    {id:4,title:'daily Java news'},
];

    const tableBody = document.querySelector("#studentTable tbody");     
    posts.forEach(post => {         
        const row = document.createElement("tr");         
        row.innerHTML = `<td>${posts.id}</td>             
        <td>${posts.name}</td> `;         
        tableBody.appendChild(row); });  


