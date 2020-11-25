let html = document.querySelector("#html"); //qs可以直接跳出这个词
let style = document.querySelector("#style")
// 这里因为内容影响了body样式的，所以对文字进行加了注释，这样就可以执行style内容了
let string=`/*你好，我叫小白
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1{
    background:linear-gradient(90deg,rgba(255,255,255,1)0%,rgba(255,
    255,255,1)50%,rgba(0,0,0,1)50%,rgba(0,0,0,1)100%);
}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background:radial-gradient(circle,rgba(255,255,255,1)0%,rgba(255,255,255,1)25%,
    rgba(0,0,0,1)25%,rgba(0,0,0,1)100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background:radial-gradient(circle,rgba(0,0,0,1)0%,rgba(0,0,0,1)25%,
    rgba(255,255,255,1)25%,rgba(255,255,255,1)100%);
}
`;  //用背景渐变做，搜css gradient background generator
//这里的回车变空格，该如何解决了呢？把所有的回车变成html里面的回车
// string = string.replace(/\n/g,'<br>')  
//replace只会把第一个回车替换成br，所以这里必须用正则表达式：/\n/g 因为网页会出现每一行都有一个<，所以不行，重新思考新的思路
let string2 = " ";
// console.log(string.length);
let n = 0;  //因为把n=n+1挪到后面了，所以这里不需要等于-1，可以直接用0下去算

// demo.innerHTML=string.substring(0,n);

let step = () =>{
    setTimeout(()=>{
        // console.log(n);  //n=10
        // n = n + 1;
        if(string[n] === "\n"){
            //如果是回车，就不要照搬
            string2 += "<br>";    //这是简写，全称是string2 = string2 + "<br>";
        } else if (string[n] === " "){
            string2 += "&nbsp;";  //如果等于空格，就缩进
        } else{
            //如果不是回车，就照搬
            string2 += string[n];   //这是简写，全称是string2 = string2 +string[n];
        }
        html.innerHTML = string2; //string.substring(0,n);
         // length = 55,因为之前n=n+1放前面，所以结束的时候有undefined,第54是最后一为，回车
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,99999);   //使网页自动往下拉动滚动条，原本使(x,y)，x是横向，y是纵向
        html.scrollTo(9,99999);
         if(n < string.length-1){
            // 因为有-1，所以这里最后一个是n=53
            // 如果n不是最后一个，就继续执行
            n += 1; //下一次 n=n+1是54
            step();
        }else{
            // n 是最后一个，就停止执行
        }
    },50);
};
step()