
const express = require('express');
const { userCollection, menuCollection } = require('../model/usersModel');

express.json()

const getUser = async (req, res) => {
  const result = await userCollection.find({}).toArray();
  res.send(result)
}

const manu = async (req, res) => {
  const result = await menuCollection.find({}).toArray();
  res.send(result);
}


module.exports = {
  getUser,
  manu
};