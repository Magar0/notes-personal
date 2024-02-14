show databases;
use samplemariadb;
 
 show tables;
 
 -- creating table....................
 
 create table workbench(
 ID int primary key auto_increment,
 name varchar(50) not null,
 age smallint,
 emailId varchar(50),
 date date default current_timestamp(),
 check (age>18)
 )

select * from workbench;

insert into workbench(name,age,emailId) value("Thapa",25,"Thapa@gmail.com");
insert into workbench(name,age,emailId) value("Xiang Lee",20,null);
insert into workbench(name,age,emailId,date) value("Anuska",15,NULL,default);



-- UPDATE 
update workbench
set age=null where id=3;

-- DELETE
delete from workbench
where id=4

-- Changing table structure..................

alter table workbench
add mobile varchar(15);

-- modifying constraints................

alter table workbench
modify column age tinyint not null;

alter table workbench
rename column age to newAge;

alter table workbench
drop constraint Constraint_1;

alter table workbench
add constraint ageConstraint
check (age>18);

drop table workbench;