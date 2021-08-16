import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs,setblogs]=useState([
        {title:'My First Blog',body:'lorem0...............................',author:'faiaz',key:1},
        {title:'eksho din e react shikhun',body:'lorem0...............................',author:'mursalin',key:2},
        {title:'crash course of jibon, hoye jan smart',body:'lorem0...............................',author:'faiaz',key:3}
    ]);
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog)=>{
                return blog.author==='faiaz';

            })} title="faiaz's Blogs!" />
        </div>
    );
}
 
export default Home;