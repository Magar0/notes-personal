use agile;

select * from customers c ;
select * from orders o ;

select * from customers c inner join orders o
on c.CustomerID =o.CustomerID ;
select c.CustomerID ,c.CustomerName ,o.OrderID  from customers c inner join orders o
on c.CustomerID =o.CustomerID ;

select * from products p ;
select * from categories c; 

select productid,productname, c.CategoryID,c.CategoryName  from products p inner join categories c 
on p.CategoryID =c.CategoryID order by p.ProductID  ;



select cus.CustomerID , productname, c.CategoryID,c.CategoryName  from products p inner join categories c 
on p.CategoryID =c.CategoryID 
inner join customers cus on p.ProductID  =cus.CustomerID order by productid;

select * from customers c left join orders o  on c.CustomerID =o.CustomerID 
union 
select * from customers c2 right join orders o2 on c2.customerid= o2.customerid
order by CustomerName 


select City  from customers
union 
select City  from suppliers