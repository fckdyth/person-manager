export type PersonCreate = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string
}

export type Person = PersonCreate & {
    id: string
}