import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const filteredCategories = categories.filter(category => category !== "All");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: taskText,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask);
    setTaskText("");
    setTaskCategory(filteredCategories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {filteredCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input
        type="submit"
        value="Add task"
      />
    </form>
  );
}

export default NewTaskForm;