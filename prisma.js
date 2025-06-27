const { PrismaClient } = require("./generated/prisma")
const prisma = new PrismaClient()

async function prismaAddExpenses(userDescription, userAmount) {
    try {
        await prisma.expenses.create({
            data: {
                description: userDescription,
                amount: userAmount
            }
        })
    } catch (error) {
        console.log("error while adding expenses, ", error)
    } finally {
        await prisma.$disconnect()
    }
}

async function prismaGetExpenses() {
    try {
        const userAllExpenses = await prisma.expenses.findMany()
        return userAllExpenses
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
}

async function prismaDeleteExpenses(userId) {
    try {
        await prisma.expenses.delete({
            where: {
                id: userId,
            },
          })
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
}

module.exports = { prismaAddExpenses, prismaGetExpenses, prismaDeleteExpenses }