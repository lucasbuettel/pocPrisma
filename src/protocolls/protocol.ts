export type UserBirth = {
    id: number,
    name: string,
    cpf: string,
    birthMonth: string,
    age:string,
}

export type UserData = Omit<UserBirth, "id">