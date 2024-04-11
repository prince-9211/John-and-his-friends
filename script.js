let employees=[
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2,name:"jack",age:"20",profession:"developer"},
    {id:3,name:"karen",age:"19",profession:"admin"}
];
function PrintDeveloperbyMap() {
    const developers=employees.filter(employee => employee.profession ==="developer");
    const developerNames=developers.map(developer =>developer.name);
    console.log(developerNames);
}

function PrintDeveloperbyForEach() {
    const developerNames=[];
    employees.forEach(employee =>{
        if(employee.profession === "developer"){
            developerNames.push(employee.name);
        }
    });
    console.log(developerNames);
}

function addData(){
    const newEmployee={id:4,name:"susan",age:"20",profession:"intern"};
    employees.push(newEmployee);
    console.log(newEmployee);
}

function removeData() {
    const upadteEmployee=employees.filter(employee => employee.profession !== "admin");
    console.log(upadteEmployee);
}

function concatenateArray() {
  const newArray=[
    {id:5,name:"Alice",age:"24",profession:"designer"},
    {id:6,name:"prince",age:"25",profession:"manager"},
    {id:7,name:"butu",age:"22",profession:"analyst"}
  ];
  const concatenateArray=employees.concat(newArray);
  console.log(concatenateArray);
}