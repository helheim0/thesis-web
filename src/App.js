import './App.css';
import React, { useState } from 'react';
import { signInUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebaseConfig';
import Navbar from './navigation/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import Store from './pages/Store';
import Profile from './pages/Profile';
import "./styles.css";
import Track from './pages/Track';
import Onboarding from './pages/Onboarding';
import SetGoal from './pages/SetGoal';
import GoalList from './pages/GoalList';
import Login from './pages/Login';
import { AuthProvider } from './Auth';
import { HashRouter  as Router} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router basename={window.location.pathname || ''}>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/onboarding" component={Onboarding} /> 
          <Route exact path="/challenges" component={Challenges} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/setgoal" component={SetGoal} />
          <Route exact path="/goallist" component={GoalList} />
          <Route exact path="/track" component={Track} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
