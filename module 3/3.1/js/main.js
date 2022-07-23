
    const obj = Object.create({
        a:55, 
        b:105
    },
    {   name:{
             value:"John",
    },
        age:{
            value:30,
        }
    });

    delete obj.name;

console.log(obj);
