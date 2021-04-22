import { Link } from 'react-router-dom';

const Nav = ({ dogs }) => {
  return (
    <nav>
      {dogs.map((d) => (
        <Link key={d.name} to={`/dogs/${d.name}`}>
          {d.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
