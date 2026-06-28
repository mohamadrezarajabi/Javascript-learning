let search = prompt("Search: ").toLocaleLowerCase().trim()

const articles = [
  {id: 1,title: "javascript",description: "a programming language used to build interactive websites.",  },
  {id: 2, title: "python",    description: "a simple and powerful programming language for many purposes.",  },
  {id: 3, title: "html",    description: "the standard markup language used to create web pages.",  },
  {id: 4, title: "css",    description: "a stylesheet language used to design and style web pages.",  },
  {id: 5, title: "react",    description: "a javascript library for building user interfaces.",  },
  {id: 6, title: "node.js",    description: "a javascript runtime that runs oide the browser.",  },
  {id: 7, title: "git",    description: "a version control system for tracking code changes.",  },
  {id: 8, title: "github",    description: "a platform for hosting and collaborating on git repositories.",  },
  {id: 9, title: "mongodb",    description: "a nosql database that stores data as documents.",  },
  {id: 10, title: "docker",    description: "a tool for creating and running applications in containers.",  },
    
];


let found = articles.filter(function (article){
  return article.title.includes(search) || article.description.includes(search)
})

if (found.length === 0){
  console.log("article not found");
} else{
  for (let i = 0 ; i < found.length; i++){
    console.log(i+1 + ". "+ found[i].title + ": " + found[i].description);
  }
}
