import Mock from 'mockjs';
import data from './data.json';
import list from './list.json';
import news from "./new.json"
Mock.mock("/api/list",list)
Mock.mock("/api/data", data)
Mock.mock("/api/news", news)