CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    birth_date DATE,
    email VARCHAR(255)
);

INSERT INTO person (first_name, last_name, birth_date, email) VALUES
    ('John',   'Smith',      '1990-05-15', 'john.smith@example.com'),
    ('Jane',   'Doe',        '1985-08-10', 'jane.doe@example.com'),
    ('Alice',  'Johnson',    '1992-03-22', 'alice.johnson@example.com'),
    ('Bob',    'Williams',   '1978-11-05', 'bob.williams@example.com'),
    ('Carol',  'Brown',      '1988-07-19', 'carol.brown@example.com'),
    ('David',  'Jones',      '1995-12-30', 'david.jones@example.com'),
    ('Emily',  'Miller',     '1991-04-14', 'emily.miller@example.com'),
    ('Frank',  'Davis',      '1975-09-27', 'frank.davis@example.com'),
    ('Grace',  'Garcia',     '1982-06-18', 'grace.garcia@example.com'),
    ('Henry',  'Martinez',   '1983-10-09', 'henry.martinez@example.com'),
    ('Isabel', 'Rodriguez',  '1994-02-28', 'isabel.rodriguez@example.com'),
    ('Jack',   'Wilson',     '1979-01-07', 'jack.wilson@example.com'),
    ('Karen',  'Anderson',   '1986-05-25', 'karen.anderson@example.com'),
    ('Larry',  'Thomas',     '1993-08-12', 'larry.thomas@example.com'),
    ('Monica', 'Taylor',     '1989-12-01', 'monica.taylor@example.com'),
    ('Nathan', 'Moore',      '1977-04-03', 'nathan.moore@example.com'),
    ('Olivia', 'Jackson',    '1996-11-21', 'olivia.jackson@example.com'),
    ('Patrick','White',      '1981-02-11', 'patrick.white@example.com'),
    ('Quinn',  'Harris',     '1984-07-04', 'quinn.harris@example.com'),
    ('Rachel', 'Martin',     '1990-09-17', 'rachel.martin@example.com'),
    ('Steven', 'Thompson',   '1976-03-08', 'steven.thompson@example.com'),
    ('Teresa', 'Garcia',     '1987-06-30', 'teresa.garcia@example.com'),
    ('Uma',    'Clark',      '1992-10-23', 'uma.clark@example.com'),
    ('Victor', 'Rodriguez',  '1985-01-15', 'victor.rodriguez@example.com'),
    ('Wendy',  'Lewis',      '1993-05-05', 'wendy.lewis@example.com');