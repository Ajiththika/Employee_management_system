import Employee from "./../Models/employeeModel.js";

// Get All Employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create New Employee
export const createEmployee = async (req, res) => {
  try {
    const { name, course, roll_no } = req.body;
    
    if (!name || !course || !roll_no) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    const employee = await Employee.create({ name, course, roll_no });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Employee (PUT - Full Update)
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, course, roll_no } = req.body;
    
    if (!name || !course || !roll_no) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    const employee = await Employee.findByIdAndUpdate(
      id,
      { name, course, roll_no },
      { new: true, runValidators: true }
    );
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Partial Update Employee (PATCH)
export const patchEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const employee = await Employee.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};