create schema if not exists store;

create table if not exists store.category (
    id serial primary key,
    name text not null
);

create table if not exists store.product (
    id serial primary key,
    name text not null,
    description text not null,
    price float not null,
    category_id integer not null references store.category(id)
);