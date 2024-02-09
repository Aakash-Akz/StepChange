const express = require("express");
const Form1 = require("../Models/form1");
const Form2 = require("../Models/form2");
const Form3 = require("../Models/form3");

const createData1 = async (req, res) => {
  try {
    const form1Data = req.body;
    const form1 = new Form1(form1Data);
    await form1.save();
    res.status(200).json({ message: "Form1 data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving form1 data" });
  }
};

const createData2 = async (req, res) => {
  try {
    const form2Data = req.body;
    const form2 = new Form2(form2Data);
    await form2.save();
    res.status(200).json({ message: "Form2 data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving form2 data" });
  }
};

const createData3 = async (req, res) => {
  try {
    const form3Data = req.body;
    const form3 = new Form3(form3Data);
    await form3.save();
    res.status(200).json({ message: "Form3 data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving form3 data" });
  }
};

module.exports = {createData1, createData2, createData3}