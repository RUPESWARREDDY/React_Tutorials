import React from 'react'

function Demo1() {
    let obj=[{
        name:'eswar',
        age:24,
        depat:'engineering',
    },
    {
        name:'sandhya',
        age:24,
        depat:'react',
    },
    {
        name:'venu',
        age:25,
        depat:'angular',
    },
    {
        name:'pavan',
        age:23,
        depat:'vue',
    },
]
//  let arr1=[1,2,3,4,5,6,1,2,3]
//  let res=Math.max(...arr1)
//  console.log(res)

// let str='react is a javascript library'.split('')
// str.forEach((a,i)=>{
//     if(a==='a'||a==='e'||a==='i'||a==='o'||a==='u')
//     {
//     delete str[i]
//     }
// })
// console.log(str);

// let arr2=[2,1,3,4,2,1,3,5,6,7,8,3,6,9,0]
// let arr=[]
// for(let i=0;i<arr2.length;i++)
// {
// let a=arr2[i];
// let b=true;
// if(a<=1)
// {
//     continue;
// }
// for(let j=2;j<a;j++)
// {
//     if(a%j===0)
//     {
//         b=false;
//         break;
//     }
// }
// if(b)
// {
//     arr.push(a)
// }
// }
// console.log(arr);

// let str1='eswar is react developers'.split(' ')
// str1.forEach(a=>{
//     if(a.length>5)
//     {
//         console.log(a);
//     }
// })
// // console.log(str1);
let str2='react developer'.split('')
let res=str2.reverse()
// let arr2=[]
// for(let i=str2.length-1;i>=0;i--)
// {
//   arr2.push(str2[i])
// }
console.log(res.join(' '));

  return (
    <div style={{alignItems:'center'}}>
      <table style={{border:'3px solid pink',background:'red',fontFamily:'sans-serif'}}>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>depart</th>
        </tr>
       
         {obj.map((a)=>{
return(
    <tr>
        <td>{a.name}</td>
        <td>{a.age}</td>
        <td>{a.depat}</td>
    </tr>
)
         })}
     
      </table>
    </div>
  )
}

export default Demo1
