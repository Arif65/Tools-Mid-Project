let cnt=0;
let ttl=0;

function delivery(price)
{
    let d_r=100;
    price-=500;
    if(price>0)d_r+=parseInt(((price+499)/500))*50;
    return d_r;
}

function shipping(price)
{
    let s_r=100;
    price-=500;
    if(price>0)s_r+=parseInt(((price+499)/500))*200;
    return s_r;
}

function tocart(price)
{
    cnt++;
    ttl+=price;
    document.getElementById("total-products").innerText=cnt;
    document.getElementById("price").innerText=ttl;
    let dcost=delivery(ttl);
    let scost=shipping(ttl);
    document.getElementById("delivery-charge").innerText=dcost;
    document.getElementById("shipping-charge").innerText=scost;
    let cur=ttl+dcost+scost;
    document.getElementById("total").innerText=cur;
    let tx=cur*0.15;
    document.getElementById("tax").innerText=tx.toFixed(2);
    cur+=tx;
    document.getElementById("intotal").innerText=cur.toFixed(2);
}

function blank()
{
    cnt=0;
    ttl=0;
    document.getElementById("total-products").innerText=0;
    document.getElementById("price").innerText=0;
    document.getElementById("delivery-charge").innerText=0;
    document.getElementById("shipping-charge").innerText=0;
    document.getElementById("total").innerText=0;
    document.getElementById("tax").innerText=0;
    document.getElementById("intotal").innerText=0;
}
