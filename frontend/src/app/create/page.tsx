"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {personService} from "@/app/api/personService";
import {PersonCreate} from "@/app/types/Person";
import axios from "axios";

export default function CreatePage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newPerson: PersonCreate = { firstName, lastName, birthDate, email };
        try {
            await personService.create(newPerson);
            router.push("/");
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error("Axios error:", err.response?.data);
                alert("Invalid data. Please check the entered values.")
            } else {
                console.error("Unexpected error: ", err);
            }
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold my-8">
                Add New Person
            </h2>

            <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" required
                       className="py-1 px-4 border rounded-md"
                       onChange={(e) => setFirstName(e.target.value)}
                       value={firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" required
                       className="py-1 px-4 border rounded-md"
                       onChange={(e) => setLastName(e.target.value)}
                       value={lastName} />
                <input type="text" name="email" placeholder="Email" required
                       className="py-1 px-4 border rounded-md"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}/>
                <input type="text" name="birthDate" placeholder="Birth Date" required
                       className="py-1 px-4 border rounded-md"
                       onChange={(e) => setBirthDate(e.target.value)}
                       value={birthDate}/>

                <button className="bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer" type="submit">Add Person</button>
            </form>
        </div>
    )
}