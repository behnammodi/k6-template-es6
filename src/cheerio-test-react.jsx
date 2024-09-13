import React from 'react';
import { Page } from 'react-k6-kit'
import http from 'k6/http';
import { check } from 'k6';
import cheerio from 'cheerio';

export default function () {

  const checkPage = (res) => {
    const $ = cheerio.load(res.body);

    const title = $('head title').text();

    console.log(title);

    return {
      'has correct title': () => title == 'Load Impact is now k6',
    }
  }

  return <Page url='https://loadimpact.com/' onCheck={checkPage}></Page>
}