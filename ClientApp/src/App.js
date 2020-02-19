import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Course from './components/Course';
import Student from './components/Student';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import CounterDetail from './components/CourseDetail';

import './custom.css'



  export default () => (
    <Layout>
        <Route exact path='/' component={Course} />
        <Route exact path='/student' component={Student} />
        <Route path='/counter' component={Counter} />
        <Route path='/courseDetail/:courseId' component={CounterDetail} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);

