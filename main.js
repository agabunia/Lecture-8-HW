//Task 1
function expo(num, deg, callback){
    if(deg === 0){
        callback(1)
    }else{
        expo(num, deg - 1, (result) => {
            callback(result * num)
        })
    }
}

// expo(5, 3, (result) => {
//     console.log(result)
// })


//Task 2
const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")

fetchData
    .then((response => response.json()))
    .then((posts) => {
        const postContainer = document.getElementById("container")

        posts.forEach(post => {
            const postElement = document.createElement('div')
            postElement.innerHTML = 
                `<h2>${post.title}</h2>
                <p>${post.body}</p>`

            postContainer.appendChild(postElement)
        });
    })
    .catch(error => {
        console.log(error)
    })


//Task 3-4
function deepCopyObject(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== "object" || obj === null) {
            reject(new Error("Argument is not an object"))
        }else{
            try {
                const copy = JSON.parse(JSON.stringify(obj));
                resolve(copy)
            }catch(error) {
                reject(error)
            }
        }
    });
}
  
const originalObj = { name: "John", age: 30, hobbies: ["reading", "coding"] };
  
// deepCopyObject(originalObj)
//     .then((copiedObj) => {
//         console.log("Original Object:", originalObj);
//         console.log("Copied Object:", copiedObj);
//     })
//     .catch((error) => {
//         console.error("Error:", error.message);
//     });