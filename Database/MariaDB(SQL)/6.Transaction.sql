create database transactions;
use transactions;

create table employees(
id int primary key,
name varchar(50) not null,
age int,
city varchar(50),
income int
);

select * from employees ;

drop table employees ;


insert into employees values(0,"initial",20,"heaven",0000);

-- start transaction


insert into employees values(1,"Thapa",25,"jrht",20000);
savepoint my_savepoint1;
insert into employees(id, name, age, city) values(2,"Asmita",20,"Aus"),(3,"Anuska",null,"KTM");
savepoint my_savepoint2;

update employees 
set income=10000 where name= "Asmita";
update  employees 
set age= 15 where id=3 ;
savepoint updated_savepoint;


insert into employees  values(4,"dummy",null,"ghy",null);

rollback to savepoint updated_savepoint;
rollback to savepoint my_savepoint1;

commit;


alter table employees 
add constraint ageConstraint
check (age>=15);   // adding constraint will commit the transaction