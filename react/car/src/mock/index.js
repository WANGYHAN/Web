import Mock from 'mockjs'
import city from './data.json';

let arr = [...new Set(city.data.map(item => item.Spelling.substr(0, 1)))]
let data = {}
arr.forEach(item => {
    data[item] = city.data.filter(txt => txt.Spelling.substr(0, 1) == item)
})
Mock.mock("/api/city", data)
Mock.mock("/api/login",({body})=>{
let {name,pwd}=JSON.parse(body)
if(name=="wang"&&pwd=="123"){
    return{
        code:1,msg:"ok"
    }
}else{
    return{
        code:0,msg:"false"
    }
}
})