import { useState } from "react";
import ReactDOM from 'react-dom'

const styles = {};

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: "#000"
};

styles.panel = {
  padding: 10
};

function Tabs({ data }) {
  return (
    <div className="Tabs">
      <div className="Tab" style={styles.activeTab}>
      Football
      </div>
      <div className="Tab" style={styles.tab}>
      Baseball
      </div>
      <div className="Tab" style={styles.tab}>
      Tennis
      </div>
      <div className="TabPanel" style={styles.panel}>
        Panel
      </div>
    </div>
  );
  
}

function App({ sports }) {
  return (
    <div>
      <h1>Sports</h1>
      <Tabs data={sports} />
    </div>
  );
}

const DATA = [
  {
    id: 1,
    name: "Football",
    description:
      "Association football, more commonly known as football or soccer, is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport."
  },
  {
    id: 2,
    name: "Baseball",
    description:
      "Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat."
  },
  {
    id: 3,
    name: "Tennis",
    description:
      "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court."
  }
];

ReactDOM.render(<App sports={DATA} />, document.getElementById('root'))