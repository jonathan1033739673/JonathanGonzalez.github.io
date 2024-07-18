import React, {Component} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import '../styles/_variables.scss';
import Home from '../pages/home/Home';
import Education from "../pages/education/Education";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notFound/NotFound";

export default class Main extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/education" element={<Education/>}/>
                    <Route exact path="/experience" element={<Experience/>}/>
                    <Route exact path="/projects" element={<Projects/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
};
