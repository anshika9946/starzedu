import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Course from "../components/Course";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import WeOffer from "../components/WeOffer";

import Timeline from "../components/Timeline";
//import { useGlobalContext } from "./context";

const Courses = () => {
  const tabs = [
    
    { label: 'Australia', content: 'Provides primary, secondary and high secondary education. Primary is from kindergarten to year 6, secondary school from grade 7-10, and senior-secondary or high school is from grade 11-12. Syllabus applicable- Australian Curriculum NSW/Victorian/Queensland Competitive exams Selective, NAPLAN, HAST, SAC, ICAS' },
    { label: 'Canada', content: 'Comprises of 10 provinces, and three territories. Education over there is a province-based system of public education provided, funded and administered by federal, provincial, and local governments. Elementary Schools – Grade 1-6 Secondary Schools: Junior High Schools – Grade 7-9 High School – Grades 10-12 ' },
    { label: 'USA', content: 'The system is broken down into three stages:Elementary school (Grades K–5) Middle school (Grades 6–8)High school (Grades 9–12At the end of high school, pupils are also provided with a Grade Point Average (GPA), which can help to determine their next step either into work or college' },

  ];
  return (
    <>
      {/* <WeOffer/> */}
      
      {/* <GetStarted/> */}
     
      <Timeline tabs={tabs} defaultActiveTab={1}/>
      <Course/>

    </>
  );
};

export default Courses;
