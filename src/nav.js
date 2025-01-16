import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div class="flex font-ebGaramond">
        <nav class="p-5 md:p-10 mx-auto">
            <ul>
                <li class="">
                <Link to="" class="">Home</Link>
                </li>
                <li>
                <Link to="annotations" class="">Annotations</Link>
                </li>
                <li>
                <Link to="ideas" class="">Ideas</Link>
                </li>
                <li>
                <Link to="random-thoughts" class="">Random Thoughts</Link>
                </li>
                <li>
                <Link to="rabbitholes" class="">Rabbitholes</Link>
                </li>
                <li>
                <Link to="course-notes" class="">Course Notes</Link>
                </li>
                <li>
                <Link to="foundational-stuff" class="">Foundational Stuff</Link>
                </li>
                <li>
                <Link to="recordings" class="">Recordings</Link>
                </li>
                <li>
                <Link to="" class="text-gray-400">Music</Link>
                </li>
                <li>
                <Link to="" class="text-gray-400">Cooking</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  );
}

export default Navbar;