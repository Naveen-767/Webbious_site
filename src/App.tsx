import React from "react";
import Header from "./components/Navbar";
import Hero from "./components/hero";
import Ca from "./components/c";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import ContactUs from "./components/contact";
import ProjectsSection from "./components/Projects";
import Team from "./components/team";
import Page from "./components/anmation";




function App() {
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        <Header />
      </main>
<div className="pb-16">
      <Hero /></div>
      {/* <Ca /> */}
      <div className="pb-16" >     <Card1 /></div>

      <Page /> 
      <Card2 />
      <ProjectsSection />
      <Team />
      <ContactUs />

    

    </div>
  );
}

export default App;
