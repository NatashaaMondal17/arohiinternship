import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="App-screenshot" />
      <header className="App-header">
         <h1>AROHI SOFTWARE INTERN</h1>

      </header>
      <p>Hello folks! I'm Natasha Mondal, a passionate Data Analysis enthusiast with a keen interest in extracting valuable insights from data. Currently, I'm pursuing my studies in Computer Science and Design, where I am honing my skills in data analytics, statistical modeling, and data visualization. With a strong foundation in programming languages like Python, R, and SQL, I aim to leverage data to solve real-world problems. I am continuously exploring new techniques and tools to deepen my understanding of data analysis and contribute to innovative projects. My goal is to transform complex datasets into actionable insights that drive decision-making and improve business outcomes.</p>
      <div className="App - body">
      <p><i class="fas fa-user"></i> <strong>Name:</strong> Natasha Mondal</p>
<p><i class="fas fa-graduation-cap"></i> <strong>Skills:</strong> Fast learner, knowledge about languages like Python, SQL, Java, C, C++, HTML, CSS</p>
<p><i class="fas fa-building"></i> <strong>Company:</strong> Arohi Software</p>
<p><i class="fas fa-briefcase"></i> <strong>Post:</strong> Data Analyst Intern</p>

<footer class="App-footer">
  © 2024 Natasha Mondal | 
  <a href="mailto: natashajmondal@gmail.com" target="_blank">Contact Me</a>
</footer>



      </div>
      

    </div>
  );
}

export default App;
