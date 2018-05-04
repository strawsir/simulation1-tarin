update products set productname = $2 where productid = $1;
update products set imageurl = $3 where productid = $1;
update products set price = $4 where productid = $1;
