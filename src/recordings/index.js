import '../App.css';


function Recordings() {
  const links = [
    { name: 'CNN Overview, Jan 18, 2023', url: 'https://drive.google.com/file/d/1XyUjesqDPRZStSj3k2BoWtTpHDLojtqT/view?usp=drive_link' },
    { name: 'VAE Overview, Jan 19, 2023', url: 'https://drive.google.com/file/d/14Fo8htLionXmZrx5525z6cWROFXOe6xo/view?usp=drive_link' },
    { name: 'Object Detection Approaches, Jan 20, 2023', url: 'https://drive.google.com/file/d/1eAN6DSlqH1xGjNOLWMdoYvgW3pA3f6gT/view?usp=drive_link' },
  ];

  return (
      <div className="Home" class="w-2/3 items-stretch p-auto m-auto my-20">
        <a href="https://docs.google.com/document/d/1ExV5n3XxYS4lN2pWsi9wqBwblw0_rwt0gs2RTGbVXBs/edit?usp=drive_link" target="_blank" rel="noopener noreferrer" class="underline">Corrections</a>
        <h1 class="text-2xl my-5">Recordings</h1>
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

export default Recordings;