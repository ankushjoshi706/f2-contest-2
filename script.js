let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    arr.forEach((employee)=>{
        if (employee.profession=='developer'){
        console.log(employee)
    };
});

  }
  
  function addData() {
    //Write your code here, just console.log
    let temp_name = prompt("enter name");
    let temp_age = prompt("enter age");
    let temp_profession = prompt("enter profession");
    arr.push(
        {
            name:temp_name,
            age:parseInt(temp_age),
            profession:temp_profession,
        }
    )
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log;
    let updatedarr = arr.filter((employee)=>employee.profession != "admin");
    console.log(updatedarr);
    arr=updatedarr;

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let extra_arr=[
        { id: 1, name: 'ram', age: 18, profession: 'developer' },
        { id: 2, name: 'ahmed', age: 20, profession: 'developer' },
        { id: 3, name: 'karen', age: 19, profession: 'admin' },
      ];
      
     let joined_arr=arr.concat(extra_arr);
     console.log(arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }
  
