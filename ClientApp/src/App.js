import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Course from './components/Course';
import Student from './components/Student';
import Author from './components/Author';
import CounterDetail from './components/CourseDetail';
import './custom.css'

export default () => (
  <Layout>
    <Route exact path='/' component={Course} />
    <Route exact path='/student' component={Student} />
    <Route exact path='/author' component={Author} />
    <Route path='/courseDetail/:courseId' component={CounterDetail} />
  </Layout>
);