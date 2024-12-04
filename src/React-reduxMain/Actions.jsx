export function deposit(amount)
{
    return{type:'deposit',payload:amount}
}
export function withdraw(amount)
{
    return{type:'withdraw',payload:amount}
}
export function updatename(fullname)
{
    return{type:'updatename',payload:fullname}
}
export function updateMobile(mobile)
{
    return{type:'updateMobile',payload:mobile}
}
export function reset()
{
    return{type:'reset'}
}