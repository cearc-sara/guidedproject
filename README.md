Migration records changes to the database structure over time, just like git commits record changes to code

configure knex connections
- npm i -g knex
- knex init

commonly used migration commands:
- npx knex migrate:make name...<-- creates a new migration file

- npx knex migrate:latest <-- run pending migrations to update the database

- knex migrate:rollback <-- undo changes from the last migration

Track Food -- AKA Menu Items

menu_items table
- id: primary key, unsigned (not negative numbers) integer.
- name: string, required (NOT NULL), unique, make searching by name fast!
- price: floating point, not required.
- available: boolean, default to false.



clients table
- id: pk, uuid, string
- email: string, unique, indexed
- name: string, indexed

-- every change to the database schema(structure) should be done with a new migration

- npx knex migrate:make clients //creates a new migration
- npx knex migrate:latest //runs pending migrations
- knex migrate:rollback //run the down function 