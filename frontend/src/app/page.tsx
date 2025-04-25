"use client";

import Link from "next/link";
import {personService} from "@/app/api/personService";
import {Person} from "@/app/types/Person";
import DeleteButton from "@/app/components/DeleteButton";
import React, {useCallback, useEffect, useState} from "react";
import Pagination from "@/app/components/Pagination";

export default function Home() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('lastName,asc');

    const fetchData = useCallback(async () => {
        try {
            const response = await personService.getAll({
                search,
                page: currentPage,
                size: 10,
                sort,
            });
            setPersons(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching persons:", error);
        }
    }, [search, currentPage, sort]);


    useEffect(() => {
        fetchData();
    }, [currentPage, fetchData, search, sort]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [currentPage]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setCurrentPage(0);
    };

    const handleSortChange = (field: string) => {
        setSort(field);
        setCurrentPage(0);
    };

    const handleDelete = async (personId: string) => {
        try {
            await personService.delete(personId);
            console.log("Successfully deleted");

            await fetchData();  // Refresh list from server after delete

        } catch (error) {
            console.error("Error deleting person:", error);
        }
    };

  return (
      <div>
          <div className="flex flex-wrap gap-4 mb-6">
              <input
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search by name or email"
                  className="border p-2 rounded-md flex-1 min-w-[200px]"
              />

              <select
                  value={sort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="border p-2 rounded-md"
              >
                  <option value="firstName,asc">First Name ↑</option>
                  <option value="firstName,desc">First Name ↓</option>
                  <option value="lastName,asc">Last Name ↑</option>
                  <option value="lastName,desc">Last Name ↓</option>
                  <option value="birthDate,asc">Birth Date ↑</option>
                  <option value="birthDate,desc">Birth Date ↓</option>
              </select>
          </div>
          <div>
              {persons.map((person) => (
                  <div key={person.id} className="p-4 my-2 rounded-md border-b leading-9">
                      <div className="font-bold">
                          {person.firstName} {person.lastName}
                      </div>
                      <div>E-mail: {person.email}</div>
                      <div>Birth Date: {person.birthDate}</div>

                      <div className="flex gap-4 mt-4 justify-end">
                          <Link
                              href={`/update/${person.id}`}
                              className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest"
                          >
                              Edit
                          </Link>
                          <DeleteButton personId={person.id} onDelete={handleDelete} />
                      </div>
                  </div>
              ))}
          </div>

          <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
          />
      </div>
  );
}
