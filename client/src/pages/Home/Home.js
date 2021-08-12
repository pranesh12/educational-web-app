import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEducationalData, getTeachers } from "../../actions/education";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import BestTeachers from "../../components/BestTeachers/BestTeachers";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Infromation";
import Navbar from "../../components/Navbar/Navbar";
import ImportTantCourse from "../Courses/ImportTantCourse";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationalData());
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <div>
      <Banner />
      <About />
      <ImportTantCourse />
      <BestTeachers />
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
