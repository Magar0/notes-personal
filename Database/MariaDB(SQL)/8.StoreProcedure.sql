use agile;

select * from employees;

delimiter $$
create procedure get_employee(in empid int)
begin
select * from employees where employeeId =empid;
end $$
delimiter ;

call get_employee(5);

-- to see birthdate 
delimiter $$ 
create procedure get_employee_birthday(in fname char(30),out birth date)
begin
select birthdate into birth from employees 
where firstname= fname;
end $$
delimiter ;

call get_employee_birthday('Robert',@birthdate);
select @birthdate;

-- drop procedure get_employee_birthday