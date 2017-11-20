import React from "react";
import * as moment from 'moment';

export const Header = ({title = "Ming Day"}) => (
  <header className="Header">
    <h1 className="Header-title">{title}</h1>
    <h3 className="Header-date">{moment().format("dddd, MMM Do YYYY")}</h3>
  </header>
);