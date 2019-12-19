import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Dashboardorg from '../dashboard/dashboardOrg.js';
// import LandingOrg from '../dashboard/LandingOrg';
import SearchEvents from '../dashboard/SearchEvents';
import SearchVenue from '../dashboard/SearchVenue';
import SearchPeople from '../dashboard/SearchPeople';
import EventInformation from '../dashboard/EventInformation';
import ProfileInformation from '../dashboard/ProfileInformation';
import Resetpass from '../auth/Resetpass';
import Sende from '../auth/Sende';
import Paymentvenues from '../dashboard/Paymentvenues';
import Paymentevent from '../dashboard/Paymentevent';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import Terms from '../layout/termsandpolicy';
import faqs from '../layout/faq'; 
import PrivateRoute from '../routing/PrivateRoute';
import VenuesInformation from '../dashboard/VenuesInformation';
import confirmationpageevent from '../dashboard/Confirmationpageevent';
import confirmationvenues from '../dashboard/Confirmationvenues';
import cancelevent from '../dashboard/cancelevent';
import RegisterEvents from '../dashboard/RegisteredEvent';
import Landingpage from '../dashboard/Landingpage';
import LandingOrg from '../dashboard/LandingOrg.js';
import AddEvent from '../profile-forms/Addevent';
import PaymentWait from '../dashboard/PaymentWait';
import WaitingConfirm from '../dashboard/WaitingConfirm';
import Waitinglistevent from '../dashboard/Waitinglistevent';
import PaymentPages from '../dashboard/PayementPages';

import Dialog from '../chat/Dialog';
import RoomList from '../chat/RoomList';
import ChatSession from '../chat/ChatSession';
import RoomUsers from '../chat/RoomUsers';
import Chatscreen from '../chat/Chatscreen';
import GroupScreen from '../groupchat/GroupScreen';


const Routes = () => {
  return (
    <section >
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path= '/Resetpass/:id' component ={Resetpass} />
        {/* <Route path="/Carousel" component={Carousel} exact /> */}
        <Route exact path= '/Sende' component ={Sende} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/faqs' component={faqs} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/chatscreen' component={Chatscreen} />
        <PrivateRoute exact path='/groupchat' component={GroupScreen} />
        <PrivateRoute exact path='/dialog' component={Dialog} />
        <PrivateRoute exact path='/roomlist' component={RoomList} />
        <PrivateRoute exact path='/chatsession' component={ChatSession} />
        <PrivateRoute exact path='/RoomUser' component={RoomUsers} />
        <PrivateRoute exact path='/landingpage' component={Landingpage} />
        <PrivateRoute exact path='/dashboardOrg' component={Dashboardorg} />
        <PrivateRoute exact path='/landingorg' component={LandingOrg} />
        <PrivateRoute exact path='/Addevent' component={AddEvent} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <PrivateRoute exact path='/SearchVenue' component={SearchVenue} />
        <PrivateRoute exact path = '/SearchEvents' component ={SearchEvents} />
        <PrivateRoute exact path = '/SearchPeople' component ={SearchPeople} />
            <Route path="/edit/:id" component={EventInformation} />
            <Route path="/gotoprofile/:id" component={ProfileInformation} />
            <Route path="/edits/:id" component={VenuesInformation} />
            <Route path="/confi/:id" component={confirmationpageevent} />
            <Route path="/confis/:id" component={confirmationvenues} />
            <Route path="/payment/:id" component={Paymentevent} />
            <Route path="/paymentq" component={PaymentPages} />
            <Route path="/payments/:id" component={Paymentvenues} />
            <Route path="/cancel/:id" component={cancelevent} />
            <Route path="/registerevent/:id" component={RegisterEvents} />
            <Route path="/waitinglistevent/:id" component={Waitinglistevent} />
            <Route path="/paywait/:id" component={PaymentWait} />
            <Route path="/waitconfirm/:id" component={WaitingConfirm} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
