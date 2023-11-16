const user ={
    name:'norhen',
    age:26
}

function About (){
    return (
<div>
<h1  style={{color:'red', fontSize:'15px'}}>{user.name}</h1>
<p>{user.age}</p>
</div>
    )
}
export default About