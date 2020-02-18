import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Course from './components/Course';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'



  export default () => (
    <Layout>
        <Route exact path='/' component={Course} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);

