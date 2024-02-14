use samplemariadb;
show tables;

create table Customers(
CustomerId int,
name varchar(40) not null,
city varchar(20),
primary key (customerId)
);

create table Orders(
OrderId int,
OrderNo int,
CustomerId int,
primary key (orderid),
Foreign key (CustomerId) references customers(customerId)
);

select * from customers;
select * from orders;

insert into customers values(1,"Thapa","Jrht"),(2,"Asmita","Aus");
insert into orders values(1, 22222,1), (2,5555, 1), (3,7777,2);
insert into orders values(5,99999, 5); -- will not add because it doesn't exist in customer table
insert into orders values (4,999, null);

select * from orders where customerid=1;



--  delete cascade
drop table orders;
drop table customers;

create table Orders(
OrderId int,
OrderNo int,
CustomerId int,
primary key (orderid),
Foreign key (CustomerId) references customers(customerId) on delete cascade
);

delete from customers where customerid = 1; -- this will delete all data of customerid 1 from both table

