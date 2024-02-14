show databases;
use Agile;

show tables

-- selecting data in different ways

select * from customers
select * from products

select distinct city from customers
select * from customers order by contactName desc
select * from customers c order by city,CustomerName 
select * from  customers c order by city limit 10

select * from  customers limit 10 offset 0
select * from  customers limit 10 offset 20

-- aggregrate function
select count(distinct city) from customers 
select sum(price) from products ;
select max(price) from products ;
select avg(price) from products where CategoryID =2;

-- grouping aggregrate function
select categoryId, sum(Price)  from products group by CategoryID ;
select count(CustomerID),Country  from customers group by Country ;
select count(*),customerid from orders group by CustomerID ; 


-- wild card
select * from customers where ContactName like '%ann%';
select * from customers where Country like '_an%';
select * from customers where Country like '%_an%';
select * from customers where ContactName  like '[A]%';

-- selecting multiple, range
select * from customers where CustomerID in (1,3,4,5,6,88);
select * from customers where CustomerID between 50 and 80;











