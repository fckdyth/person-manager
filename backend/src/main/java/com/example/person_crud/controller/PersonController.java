package com.example.person_crud.controller;

import com.example.person_crud.model.Person;
import com.example.person_crud.service.PersonService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/person")
public class PersonController {
    private final PersonService service;

    public PersonController(PersonService service) {
        this.service = service;
    }

//    @GetMapping
//    public List<Person> findAll() {
//        return service.findAll();
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> getPerson(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Person createPerson(@RequestBody Person person) {
        return service.save(person);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable Long id, @RequestBody Person updatedPerson) {
        return service.findById(id).map(person -> {
            person.setFirstName(updatedPerson.getFirstName());
            person.setLastName(updatedPerson.getLastName());
            person.setBirthDate(updatedPerson.getBirthDate());
            person.setEmail(updatedPerson.getEmail());
            return ResponseEntity.ok(service.save(person));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public Page<Person> getPersons(
            @RequestParam(required = false, defaultValue = "") String search,
            @PageableDefault(size = 10, sort = "lastName") Pageable pageable) {
        if (search.isBlank()) {
            return service.findAll(pageable);
        }
        return service.search(search, search, search, pageable);
    }
}
