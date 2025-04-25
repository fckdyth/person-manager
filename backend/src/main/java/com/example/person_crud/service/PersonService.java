package com.example.person_crud.service;

import com.example.person_crud.model.Person;
import com.example.person_crud.repository.PersonRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository repository;

    public PersonService(PersonRepository repository) {
        this.repository = repository;
    }

    public Page<Person> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Person save(Person person) {
        return repository.save(person);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Optional<Person> findById(Long id) {
        return repository.findById(id);
    }

    public Page<Person> search(String firstName, String lastName, String email, Pageable pageable) {
        return repository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
                firstName, lastName, email, pageable);
    }
}