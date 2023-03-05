/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

// import Medicine from '../../../Models/medicine';

import { Model } from 'mongoose';
import medicineSchema from '../../../Models/medicine';
import User from '../../../Models/user';
import connectMongo from '../../../utils/connectMongo';
import fetch from './fetch';

export default async function add(req, res) {

    try {
        // try to connect database
        await connectMongo();

        // fetch data
        const { uid, name, quantity, price, expiryDate, uploadOn } = req.body;
        // console.log(req.body);

        // find appropiate user for the addition
        User.findByIdAndUpdate(
            uid,
            {
                "$push": {
                    "stock": {
                        name,
                        quantity,
                        price,
                        expiryDate,
                        uploadOn
                    }
                }
            },
            { "new": true, "upsert": true },
            function (err, managerparent) {
                if (err) throw err;
                // console.log(managerparent);
                res.send({ msg: 'Medicine Successfully added' })
            })
    } catch (error) {
        console.log(error);
        res.send({ msg: error });
    }
}
// TODO : date problem 12-10-2031 ...... check