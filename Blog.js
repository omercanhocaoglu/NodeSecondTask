const blog = [
    { blogText: 'heey its my new post on this blog!', userID: 1 },
    { blogText: 'This is second post hot it is going??', userID: 2 },
    { blogText: 'There are so many post here! ', userID: 3 }
];
// console.log(blog);

const listBlogMessages = () => {
    blog.map( message => console.log(`Message: ${message.blogText}  userID: ${message.userID}`) )
}; 

const addBlogMessages = (item) => {
    return new Promise( ( resolve, reject ) => {
        blog.push(item);
        resolve(blog);
        // reject('The messages are not received now!');
    } )
};

async function getAllBlogMessages () {
    try {
        await addBlogMessages({blogText: 'heey it has added as a new post by me now!', userID: 4});
        console.log('Messages:');
        listBlogMessages();
    } catch (error) {
        console.log(error)
    };
};
getAllBlogMessages();

