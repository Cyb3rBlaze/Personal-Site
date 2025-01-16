import '../App.css';


function Rabbitholes() {
  const links = [
    { name: 'Rabbithole: Jan 18, 2023', url: 'https://docs.google.com/document/d/12vnGgjcWYZutoiiPyO01hZoD3WIi6R7_aVlGQD25qmk/edit?tab=t.0' },
    { name: 'Rabbithole: Feb 14 + 20, 2023', url: 'https://docs.google.com/document/d/10efRzSKLCjRXRbGUIUTlnWY4DdvIJwKI42-kt07lJVw/edit?tab=t.0' },
    { name: 'Rabbithole: March 15 + 17, 2023', url: 'https://docs.google.com/document/d/1ZWv_fuD3G0UvaRunBIR_mubN95QDh0dJhTxW-Ac1yH4/edit?tab=t.0' },
    { name: 'Rabbithole: July 31, 2023', url: 'https://docs.google.com/document/d/1Dhr-zcpKykb6Cw2auobn9BObyxmCTNX2EDXtefCwtP8/edit?tab=t.0' },
    { name: 'Rabbithole: Sept 15, 2023', url: 'https://docs.google.com/document/d/1gMMHr5ICz013MbhvmR9A5QjE3RsIGBOq0sgwvXqmYpc/edit?tab=t.0' },
    { name: 'Rabbithole: Nov 7, 2023', url: 'https://docs.google.com/document/d/1e_pbYkDKLrRF-Q-9Q6nhE92KTjmStl35ZpzZEoCnBJI/edit?tab=t.0' },
    { name: 'Rabbithole: Nov 8, 2023', url: 'https://docs.google.com/document/d/1c4iItb2V6X2jlgC3JlItdsErL1v7zqrm-sWB6cZaM2w/edit?tab=t.0' },
    { name: 'Rabbithole: Nov 14, 2023', url: 'https://docs.google.com/document/d/1oqjwMGQPBFz-IdM7T84sGRwLrURIWoQx8MfRixIzL-c/edit?tab=t.0' },
    { name: 'EE Prep, Feb 27, 2024', url: 'https://docs.google.com/document/d/1p2J_x1ZiUbJExy8aSjj67tvMCiZ-Jt6pjlUeaYCtPoY/edit?tab=t.0' },
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

export default Rabbitholes;