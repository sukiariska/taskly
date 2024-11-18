import {db} from '../libs/dbConnect.js';

const collection = await db.collection('users');

export const test = async (req, yes)=>{
    let result = await collection.find({}).toArray();
    res.status(200).json(results);
}