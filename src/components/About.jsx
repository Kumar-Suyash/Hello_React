import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About page.</p>
        <UserClass name={"First"} location={"Banglore"} />
        <UserClass name={"Second"} location={"Delhi"} />
        <UserClass name={"Third"} location={"Hyderabad"} />
      </div>
    );
  }
}

/**
 * The Output is as follows:
 * Parent Constructor
 * Parent Render
 * Child Constructor
 * Child Render
 * Child Component Did Mount
 * Parent Component Did Mount
 */

/**
 * * REACT COMPONENT LIFECYCLE — MOUNT PHASE
 *
 * * React mounts components in TWO main phases:
 *
 * * 1. RENDER PHASE
 * ?   - Why does React call the parent first?
 *     - Constructors and render() run top-down (parent → children)
 *     - React prepares the UI in memory only
 *     - The browser DOM is NOT updated yet during this phase
 *
 * * 2. COMMIT PHASE
 *     - React applies all DOM updates in a SINGLE BATCH
 *     - componentDidMount() fires bottom-up (children → parent)
 * !   - Parent's componentDidMount() is ALWAYS called LAST
 *
 * ? Why does the output order differ from what you'd expect?
 *   - Constructor/render logs  → Render Phase  (top-down)
 *   - componentDidMount logs   → Commit Phase  (bottom-up)
 *   - DOM is updated ONCE, after the entire render tree is ready
 */

/**
 * * EXPECTED CONSOLE OUTPUT — 3 CHILDREN INSIDE PARENT
 *
 * * ── RENDER PHASE (top → down) ──────────────────────────
 *
 *     Parent Constructor
 *     Parent Render
 *
 *       First Child Constructor
 *       First Child Render
 *
 *       Second Child Constructor
 *       Second Child Render
 *
 *       Third Child Constructor
 *       Third Child Render
 *
 * ! ── DOM UPDATED IN A SINGLE BATCH ─────────────────────
 *
 * * ── COMMIT PHASE (bottom → up) ─────────────────────────
 *
 *       First Child componentDidMount
 *       Second Child componentDidMount
 *       Third Child componentDidMount
 *
 *     Parent componentDidMount
 *
 */

export default About;
