import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__heading">Ai MasterChief</h2>
      <ul className="sidebar__nav">
        <li className="sidebar__nav__link">
          <a href="#" className="active">
            <span><i className="fa-solid fa-robot"></i></span>
            <span>Ai Assistant</span>
          </a>
        </li>
        <li className="sidebar__nav__link">
          <a href="#">
            <span><i className="fa-solid fa-cookie-bite"></i></span>
            <span>Dishes</span>
          </a>
        </li>
      </ul>
      <div className="sidebar__settings sidebar__nav__link">
        <a href="#">
          <span>
            <i className="fas fa-cog"></i>
          </span>
          <span> Settings </span>
        </a>
      </div>
    </aside>
  );
};

const Main = (props) => {
  return (
    <main className="container">
      <div className="container_parent">
        <div className="container__profile" style={{marginLeft:1050}}>
          <a href="#">
            <span>
              {props.email}
            </span>
          </a>
          <div>
            <img
              src="https://cdn.leonardo.ai/users/7228b8d2-3622-4cbf-8b43-54652cedc123/generations/d5749fe7-c0dc-4c46-b06e-872eee6653a6/Default_Alien_2.jpg?w=512"
              alt="profile "
            />
          </div>
        </div>
      </div>
      
      <div>
           DASHBOARD...
      </div>
    </main>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <Sidebar />
      <Main email={user.email}/>
    </>
  );
};

export default Dashboard;