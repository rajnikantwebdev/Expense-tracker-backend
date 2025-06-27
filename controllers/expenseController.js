const express = require("express")
const app = express()
const { prismaGetExpenses, prismaAddExpenses, prismaDeleteExpenses } = require("../prisma")

const getUserExpenses = (async (req, res) => {
    try {
        const userExpenses = await prismaGetExpenses()
        res.status(200).json({message: "success", data: userExpenses})
    } catch (error) {
        console.log("error while fetching data ", error)
        res.status(500).json({message: "failure"})
    }
})

const addUserExpenses = (async(req, res) => {
  try {
    const {description, amount} = req.body
    await prismaAddExpenses(description, amount)
    res.status(201).json({message:"Expense added successfully"})
  } catch (error) {
    console.log("error while adding data ", error)
    res.status(500).json({message:"Expense is not added, please try again later"})
  }  
})

const deleteUserExpenses = (async (req, res) => {
    try {
        const userId = parseInt(req.params.id)
        await prismaDeleteExpenses(userId)
        res.status(200).json({message:"Expense deleted successfully"})
    } catch (error) {
        console.log("error while delteing data ", error)
        res.status(500).json({message:"Expense is not deleted, please try again later"})
    }
})

module.exports = { getUserExpenses, addUserExpenses, deleteUserExpenses }