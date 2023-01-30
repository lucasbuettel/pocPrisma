import prisma from "../src/database/db.js";

async function main() {
    await prisma.users.createMany({
                data: [{
                    "id": 1,
                    "name": "lucas",
                    "cpf": "22222222222",
                    "birthMonth": "março",
                   "age": "24"
                },

                {
                    "id": 2,
                    "name": "Maicon",
                    "cpf": "12345678911",
                    "birthMonth": "janeiro",
                   "age": "20"
                },

                {
                    "id": 3,
                    "name": "Felipe",
                    "cpf": "22222222225",
                    "birthMonth": "março",
                   "age": "18"
                }
            
            ]
            })
        }

        main()
            .then(()=> {
                console.log("Registro Feito com sucesso!")
            }).catch(e=> {
                console.error(e);
                process.exit(1);
            })
            .finally(async()=>{{
                await prisma.$disconnect();
            }})