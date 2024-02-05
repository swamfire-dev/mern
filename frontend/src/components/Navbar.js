import React from "react";
import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div>
//       <header>
//         <Link to="/">
//           <h1>Workout Buddy</h1>
//         </Link>
//       </header>
//     </div>
//   );
// }

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;