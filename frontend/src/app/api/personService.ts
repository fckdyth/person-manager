import axios from "axios";
import {PersonCreate} from "@/app/types/Person";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/person',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const personService = {
    getAll: async (params: {search: string, page: number, size: number, sort: string}) => {
        const {search, page, size, sort} = params;
        return await api.get('', {
            params: {
                search,
                page,
                size,
                sort,
            },
        });
    },

    getById: (id: string) => api.get(`/${id}`),
    create: (person: PersonCreate) => api.post('', person),
    update: (id: string, person: PersonCreate) => api.put(`/${id}`, person),
    delete: (id: string) => api.delete(`/${id}`),
}