import PropTypes from "prop-types";
import React from "react";

import "./HallOfFame.css";

const HallOfFame = ({entries}) => (
  <table className="hallOfFame">
    <tbody>
      {entries.map(({date, pts, id, player}) => (
        <tr key={id}>
          <td className="date">{date}</td>
          <td className="pts">{pts}</td>
          <td className="player">{player}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

HallOfFame.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    pts: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    player: PropTypes.string.isRequired
  })).isRequired
};

export default HallOfFame;

// == Internal helpers ==============================================

export const FAKE_HOF = [
  {id: 3, pts: 18, date: "10/10/2017", player: "JANE"},
  {id: 2, pts: 23, date: "11/10/2017", player: "KEVIN"}
];

const HOF_KEY = "::colorhunt::HallofFame";
const HOF_MAX_SIZE = 12;

export function saveHOFEntry(entry, onStored){
  entry.date = new Date().toLocaleDateString();
  entry.id = Date.now();

  const entries = JSON.parse(localStorage.getItem(HOF_KEY) || "[]");
  const insertionPoint = entries.findIndex(({pts}) => pts >= entry.pts);

  if (insertionPoint === -1){
    entries.push(entry);
  } else {
    entries.splice(insertionPoint, 0, entry);
  }
  if (entries.length > HOF_MAX_SIZE){
    entries.sort((a, b) => {
      return a.pts - b.pts;
    });
    entries.splice(0, 1);
  }

  localStorage.setItem(HOF_KEY, JSON.stringify(entries));
  onStored(entries);
}