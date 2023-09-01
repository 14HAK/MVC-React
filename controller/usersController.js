
const express = require('express');
const { userCollection, manuCollection } = require('../model/usersModel');

express.json()

const getUser = async (req, res) => {
  const result = await userCollection.find({}).toArray();
  res.send(result)
}

const menu = async (req, res) => {
  const result = await manuCollection.find({}).toArray();
  res.send(result);
}


module.exports = {
  getUser,
  menu
};