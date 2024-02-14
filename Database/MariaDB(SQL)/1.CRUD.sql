use samplemariadb;
show tables;

create table classroom(
RollNo INT primary key auto_increment,
name char(255) not null,
Class int,
sec varchar(1),
city varchar(50),
Gender varchar(10)
);
insert into classroom values(1, "thapa",null,"B", "jorhat", "male" );
insert into classroom values(2,"Xiang Lee",13,"B","Tokyo", "female");
select * from classroom ;
select name from classroom c;

insert into classroom(Name,City,sec,RollNo,Class) values ("Asmita","Aus","C",3,13);
insert into classroom (Name,City,RollNo) values ("Anuska","KTM",4);
insert into classroom values(5, "thapa",null,"B", "jorhat", "male" );

update classroom 
set Class=15
where Name = 'thapa' and RollNo=1 ;

update classroom 
set Class =14, sec="A"
where Name='Xiang Lee' and  RollNo =2 ;

update classroom
set class=9 where name="Anuska";

select * from classroom 
where Class=9 and Name ='Anuska' and RollNo ="4" ;

delete from classroom where RollNo=5

-- This is comment
show tables;
drop table classroom ;
drop database sampleMariaDB;