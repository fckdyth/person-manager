"use client";

import {personService} from "@/app/api/personService";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {PersonCreate} from "@/app/types/Person";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default function UpdatePage(props: Props) {
    const {id} = React.use(props.params);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const response = await personService.getById(id);
                const person = response.data;
                setFirstName(person.firstName);
                setLastName(person.lastName);
                setBirthDate(person.birthDate);
                setEmail(person.email);
            } catch (error) {
                console.error("Error fetching person: ", error);
            }
        };

        fetchPerson()
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const updatedPerson: PersonCreate = {firstName, lastName, email, birthDate};
            await personService.update(id, updatedPerson);
            router.push("/");
        } catch (error) {
            console.error("Error updating person: ", error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold my-8">
                Edit Person
            </h2>

            <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" required
                       className="py-1 px-4 border rounded-md" value={firstName}
                       onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" name="lastName" placeholder="Last Name" required
                       className="py-1 px-4 border rounded-md" value={lastName}
                       onChange={(e) => setLastName(e.target.value)} />
                <input type="text" name="email" placeholder="Email" required
                       className="py-1 px-4 border rounded-md" value={email}
                       onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="birthDate" placeholder="Birth Date" required
                       className="py-1 px-4 border rounded-md" value={birthDate}
                       onChange={(e) => setBirthDate(e.target.value)} />

                <button className="bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer" type="submit">
                    Update Person</button>
            </form>
        </div>
    )
}