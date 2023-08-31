import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowCase from '../component/ShowCase';
import Community from './Community';
import Blogs from './Blogs';
import AIChatbot from './AIChatbot';
import ProfilePage from './ProfilePage';
import RunningCases from './ExpertPages/RunningCases';
import RecentCases from './ExpertPages/RecentCases';
import TotalCases from './ExpertPages/TotalCases';
import ExpertSchedule from './ExpertPages/ExpertSchedule';
import ExpertPings from './ExpertPages/ExpertPings';
import ExpertPosts from './ExpertPages/ExpertPosts';
import ClientsFeedback from './ExpertPages/ClientsFeedback';
import ClientCertificate from './ClientPages/ClientCertificates';
import CientExercises from './ClientPages/ClientExercises';
import ClientMessages from './ClientPages/ClientMessages';
import ClientPerformance from './ClientPages/ClientPerformance';
import ClientSchedules from './ClientPages/ClientSchedules';
import SearchExperts from './ClientPages/SearchExperts';
import ClientMain from './ClientPages/ClientMain';
import CreateExpert from './ExpertPages/ExpertMain';
import Feedback from './Feedback';

export default function HomeDisplay({ user, role }) {
  return (
    <div className='p-2 md:p-5'>
      <Routes>
        {/* General Routes */}
        <Route path='/' element={<ShowCase user={user} />} />

        <Route path='/:userId/profile' element={<ProfilePage user={user} />} />

        <Route path='/blog' element={<Blogs user={user} />} />

        <Route path='/ai-chatbot' element={<AIChatbot user={user} />} />

        <Route path='/community' element={<Community user={user} />} />

        <Route path='/feedback' element={<Feedback />} />

        {/* Expert Routes */}
        <Route path='/:userId/create-expert' element={<CreateExpert />} />

        <Route path='/expert/:userId/active-cases' element={<RunningCases user={user} />} />

        <Route path='/expert/:userId/schedules' element={<ExpertSchedule user={user} />} />

        <Route path='/expert/:userId/posts' element={<ExpertPosts user={user} />} />

        <Route path='/expert/:userId/feedback' element={<ClientsFeedback user={user} />} />

        <Route path='/expert/:userId/recent-cases' element={<RecentCases user={user} />} />

        <Route path='/expert/:userId/total-cases' element={<TotalCases user={user} />} />

        <Route path='/expert/:userId/pings' element={<ExpertPings user={user} />} />

        {/* Client Routes */}
        <Route path='/:userId/create-client' element={<ClientMain />} />

        <Route path='/client/:userId/certificates' element={<ClientCertificate user={user} />} />

        <Route path='/client/:userId/messages' element={<ClientMessages user={user} />} />

        <Route path='/client/:userId/exercises' element={<CientExercises user={user} />} />

        <Route path='/client/:userId/performance' element={<ClientPerformance user={user} />} />

        <Route path='/client/:userId/schedules' element={<ClientSchedules user={user} />} />

        <Route path='/client/:userId/search-experts' element={<SearchExperts user={user} />} />
      </Routes>
    </div>
  )
}
