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
import ChallengeDetail from './pages/ChallengeDetail';
import GoalDetailCard from './components/GoalDetailCard';
import GoalDetail from './pages/GoalDetail';
import RecipeCard from './components/RecipeCard';

const App = () => {
  return (
    <AuthProvider>
      <Router basename={window.location.pathname || ''}>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/onboarding" component={Onboarding} /> 
          <PrivateRoute exact path="/challenges" component={Challenges} />
          <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          <PrivateRoute exact path="/store" component={Store} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/setgoal" component={SetGoal} />
          <PrivateRoute exact path="/goallist" component={GoalList} />
          <PrivateRoute exact path="/track" component={Track} />
          <PrivateRoute exact path="/challengedetail/:id" component={ChallengeDetail} />
          <Route exact path="/goaldetail/:id" component={GoalDetail} />
          <PrivateRoute exact path="/recipes/:id" component={RecipeCard} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
