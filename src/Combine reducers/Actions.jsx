export function deposit(amount)
{
    return {type:'deposit',payload:amount};
}
export function withdraw(amount)
{
    return {type:'withdraw',payload:amount};
}
export function updatename(fullname)
{
    return {type:'fullnameupdate',payload:fullname};
}
export function updateMobile(mobile)
{
    return {type:'mobileupdate',payload:mobile};
}
export function reset()
{
    return {type:'reset'};
}
export function Add(id,amount)
{
    return {type:'ADD',
        payload:{
            id:id,
            amount:amount,
            date:new Date().toLocaleString(),
            type:'credit'
        }
    };
}
export function debit(id,amount)
{
    return {type:'debit',
        payload:{
            id:id,
            amount:amount,
            date:new Date().toLocaleString(),
            type:'debit'
        }
    };
}