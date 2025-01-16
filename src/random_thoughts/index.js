import '../App.css';


function RandomThoughts() {
  const links = [
    { name: 'Thoughts on True Love', url: 'https://docs.google.com/document/d/1RTNYnwyOZyVJs3KghdhzcI488XJeSSs-iG2LxHkHbkw/edit?usp=drive_link' },
    { name: '(Public) On Religion, Consciousness, The Collective, Souls, etc.', url: 'https://docs.google.com/document/d/1y3iqkC6PTFG61851wPOe4dp73FMN9-FzvDJ0gan3wkA/edit?usp=drive_link' },
    { name: 'Dedollarisation', url: 'https://docs.google.com/document/d/1J93J2XXAofmYT1izjbP5JHq89p6ZxGHAUe1X0i2VDZg/edit?tab=t.0' },
  ];

  return (
      <div className="Home" class="w-2/3 items-stretch p-auto m-auto my-20">
        <ul>
          {links.map(link => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" class="underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default RandomThoughts;