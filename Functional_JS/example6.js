const Person = ({name, age, job}) => {
  let _name = name;
  let _age = age;
  let _job = job;

  return {
    getName: () => _name,
    setName: (newName) => _name = newName,

    getAge: () => _age,
    setAge: (newAge) => _age = newAge,

    getJob: () => _job,
    setJob: (newJob) => _job = newJob
  };
}

const me = Person({name: "Joe", age: 42, job: "dev"});

console.log(me.getName());
me.setName("Harry");
me.

console.log(me.getName());


console.log(me.getAge());
