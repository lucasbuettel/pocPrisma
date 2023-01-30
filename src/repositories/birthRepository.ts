import { QueryResult } from "pg";
import prisma from "../database/db.js";
import { UserBirth, UserData } from "../protocolls/protocol.js";


async function postBirth(userBirth: UserData) {
try{
    await prisma.users.create({
        data: {
            name: userBirth.name,
            cpf: userBirth.cpf,
            birthMonth: userBirth.birthMonth,
            age: userBirth.age
        },
    });
} catch(err){
    console.log(err);
}
    


}

async function getBirth() {
    const data = await prisma.users.findMany();
    console.log(data);
    return data;

}

/*

async function getBirthById(id:number) :Promise<QueryResult<UserData>>{
    return connectionDB.query(`SELECT * FROM users WHERE id = $1`, [id])
}

async function deleteBirth(id:number):Promise<QueryResult<UserData>> {

    return connectionDB.query(`
    DELETE FROM "users" WHERE id = $1`, [id]
    )
}

async function  updateMonth(id:number) {

    const todayBirth = await connectionDB.query(`
    SELECT * FROM users WHERE id = $1`, [id]);

    console.log(todayBirth.rows[0].age)

    const birthToday =  connectionDB.query(`
    UPDATE "users" SET "age" = $1 WHERE id = $2;
    `, [todayBirth.rows[0].age +1, id])
}

async function personPerMonth(month:string):Promise<QueryResult<UserData>> {

    return connectionDB.query(`
    SELECT COUNT ("birth-month") AS "birthdays per month" FROM users WHERE "birth-month" = $1`,
    [month]);
}



 */
export const birthRepository = {
    getBirth,
    postBirth,
    /*deleteBirth,
    getBirthById,
    updateMonth,
    personPerMonth */
}