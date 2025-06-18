import React from "react";
import Home from "./Home";
import Blogs from "./Blog";
import Contact from "./Contact";
import About from "./About";
export default function Aa1()
{
    return (
        <BrowserRouter>
            <Routes>
                <Rout path="/" element={<Layout/>}>
                    <Rout index element={<Home/>}/>
                    <Rout path="blogs" element={<Blogs/>}/>
                    <Rout path="contact" element={<Contact/>}/>
                    <Rout path="about" element={<About/>}/>
                </Rout>
            </Routes>
        </BrowserRouter>
    );
}