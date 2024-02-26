"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id == "new" ? false : true;
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to update ticket.");
      }
    } else {
      const res = await fetch("/api/Tickets/", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to create ticket.");
      }
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    status: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Software Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 style={{ color: "#090C08" }}>
          {EDITMODE ? "Update your Ticket" : "Create Your Ticket"}
        </h3>
        <label style={{ color: "#090C08", fontWeight: "bold" }}>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
          style={{ color: "#FFFBDB" }}
        />
        <label style={{ color: "#090C08", fontWeight: "bold" }}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          style={{ color: "#FFFBDB" }}
          rows="5"
        />

        <label style={{ fontWeight: "bold" }}>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{ color: "#FFFBDB" }}
        >
          <option value="Software Problem" style={{ color: "#FFFBDB" }}>
            Software Problem
          </option>
          <option value="Hardware Problem" style={{ color: "#FFFBDB" }}>
            Hardware Problem
          </option>
          <option value="Project" style={{ color: "#FFFBDB" }}>
            Project
          </option>
        </select>

        <label style={{ fontWeight: "bold" }}>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label style={{ fontWeight: "bold" }}>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label style={{ fontWeight: "bold" }}>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label style={{ fontWeight: "bold" }}>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label style={{ fontWeight: "bold" }}>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label style={{ fontWeight: "bold" }}>5</label>
        </div>
        <label style={{ color: "#090C08", fontWeight: "bold" }}>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label style={{ fontWeight: "bold" }}>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{ color: "#FFFBDB" }}
        >
          <option value="not started" style={{ color: "#FFFBDB" }}>
            {" "}
            Not Started{" "}
          </option>
          <option value="started" style={{ color: "#FFFBDB" }}>
            {" "}
            Started{" "}
          </option>
          <option value="done" style={{ color: "#FFFBDB" }}>
            {" "}
            Done{" "}
          </option>
        </select>
        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
          style={{ color: "#FFFBDB", backgroundColor: "#090C08" }}
        />
      </form>
    </div>
  );
};

export default TicketForm;
