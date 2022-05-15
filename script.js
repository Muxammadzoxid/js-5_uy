for(let i = 1; i < 10; i++) {

    let name = prompt('Ismingizni kiriting!')
    let age = +prompt('yowingizni kiriting!')
    
    const user = {
       users:'Foydanaluvci',
       name:name,
       age:age,
       
    }
    

    console.info(`Foydanalanuvci ${i}\nIsmi: ${name}\nYowi: ${age}`,user.users)
}