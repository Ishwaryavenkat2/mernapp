const Employee = require("./Models");
  
  //Create a user
  exports.create = (req, res) => {
      console.log("reqq",req.body)
    const employee = new Employee({
      employeeId: req.body.employeeId,
      name: req.body.name,
      role: req.body.role,
      salary: req.body.salary
    });
  
    employee.save()
    .then((data) => {
        console.log("Data",data);
      res.send(data);
    })
    .catch((err) => {
        res.status(500).send(err);
      });
   }

   exports.findAll = (req, res) => {
    Employee.find()
      .then((employees) => {
        res.status(200).send(employees);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

  exports.findOne = (req, res) => {
    Employee.findById(req.params.id)
      .then((employee) => {
        res.status(200).send(employee);
        console.log(employee);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

  exports.UpdateUser = (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((emp) => {
        res.status(200).send(emp);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

  exports.delete = (req, res) => {
    Employee.findByIdAndRemove(req.params.id)
      .then((user) => {
        res.send({ message: "User deleted successfully!" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


