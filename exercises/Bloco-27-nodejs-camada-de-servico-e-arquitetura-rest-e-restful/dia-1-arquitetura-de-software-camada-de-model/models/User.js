const e = require('express');
const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async ({firstName, lastName, email, password}) => {
    const db = await connection();
    const newUser = await db.collection('users').insertOne({firstName, lastName, email, password});
    return { id: newUser.insertedId, firstName, lastName, email, password };
}

const getAll = async () => {
    const db = await connection();
    const listUsers = await db.collection('users').find().toArray();
    return listUsers;
}

const getById = async (id) => (
    ObjectId.isValid(id)
    ? (await connection()).collection('users').findOne(ObjectId(id))
    : null
)

const updateById = async ({id, firstName, lastName, email, password}) => {
    if (!ObjectId.isValid(id)) return null;
    const db = await connection();
    const newData = {firstName, lastName, email, password};
    const update = await db.collection('users').updateOne(
        {_id: ObjectId(id)},
        {$set: newData},
    )
    if(update.acknowledged) {
        return {id, firstName, lastName, email, password};
    }
    return null
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
}
