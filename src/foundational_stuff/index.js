import '../App.css';


function FoundationalStuff() {
  const links = [
    { name: 'Dropout, L1/L2 Regularization, Model Analysis Methodologies, Jan 11, 2023', url: 'https://docs.google.com/document/d/1hOqRChZKo6oWp3jIoUlLXE-W0Beyk6qP4sm7Zl8xh4A/edit?usp=drive_link' },
    { name: 'Gradient Descent, Stochastic GD, Momentum, RMS Prop, Adam, Jan 12, 2023', url: 'https://docs.google.com/document/d/1krirdocXaozYZdvFLcBoJm0oRFgX3NfnEsHJBOYmlNk/edit?tab=t.0' },
    { name: 'CNN Architectures, Jan 18, 2023', url: 'https://docs.google.com/document/d/1k4-0BrtMwzmgq8fCL1Z-GPsapT0ZEFTMUDVcvlR3rYk/edit?usp=drive_link' },
    { name: 'Object Detection Approaches, Jan 20, 2023', url: 'https://docs.google.com/document/d/1w9xYimJXeC0nZYEyP9xtmNHzWpcg4N2piTGG7yqaxQ8/edit?tab=t.0' },
    { name: 'Different Attention Mechanisms, Jan 21, 2023', url: 'https://docs.google.com/document/d/14IdWU5kkjRGaFJ5JDg39JR5jcevmIjUfMZ2THtMg2q0/edit?usp=drive_link' },
    { name: 'Specific Intuitions, March 2, 2023', url: 'https://docs.google.com/document/d/1yi4whBDAtVW1m9LM_nuHFCeJwZ22SYe2obN95Qm2LuM/edit?usp=drive_link' },
  ];

  return (
      <div className="Home" class="w-2/3 flex items-stretch p-auto m-auto my-20">
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

export default FoundationalStuff;