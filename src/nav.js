import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div class="flex font-ebGaramond">
        <nav class="p-10 mx-auto absolute">
            <ul>
                <li>
                <Link to="" class="">Home</Link>
                </li>
                <li>
                <Link to="" class="text-gray-300">Annotations</Link>
                </li>
                <li>
                <Link to="" class="text-gray-300">Ideas</Link>
                </li>
                <li>
                <Link to="" class="text-gray-300">Random Thoughts</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  );
}

export default Navbar;