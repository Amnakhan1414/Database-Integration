const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Course = require("./models/Course");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// HOME
app.get("/", (req, res) => {
  res.json({
    message: "LearnSpace API is running successfully!",
  });
});

// CREATE - Add a new course
app.post("/api/courses", async (req, res) => {
  try {
    const { title, lessons } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Course title is required and must be a valid text.",
      });
    }

    if (
      lessons === undefined ||
      typeof lessons !== "number" ||
      lessons <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Lessons must be a number greater than 0.",
      });
    }

    const course = new Course({
      title: title.trim(),
      lessons,
    });

    const savedCourse = await course.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully!",
      course: savedCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    });
  }
});

// READ - Get all courses
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
      error: error.message,
    });
  }
});

// UPDATE - Update a course
app.put("/api/courses/:id", async (req, res) => {
  try {
    const { title, lessons } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Course title is required and must be a valid text.",
      });
    }

    if (
      lessons === undefined ||
      typeof lessons !== "number" ||
      lessons <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Lessons must be a number greater than 0.",
      });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title: title.trim(),
        lessons,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully!",
      course: updatedCourse,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update course",
      error: error.message,
    });
  }
});

// DELETE - Delete a course
app.delete("/api/courses/:id", async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully!",
      course: deletedCourse,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete course",
      error: error.message,
    });
  }
});

// CONNECT MONGODB AND START SERVER
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`LearnSpace API is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

startServer();