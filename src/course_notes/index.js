import '../App.css';


function CourseNotes() {
  const links = [
    { name: 'EECS16A Review (Designing Information Devices and Systems I), Sept 15, 2023', url: 'https://docs.google.com/document/d/1L8XRMyON7qk0lwwRTGsyNH3-J5eEgKTELauyw5XywSw/edit?usp=drive_link' },
    { name: 'CS61C Review (Great Ideas in Computer Architecture), October 3, 2023', url: 'https://docs.google.com/document/d/1-o6MzOdxKjnlFwOK1zK5wwpdfP9grnLFI2dJjQrUKtE/edit?usp=drive_link' },
    { name: 'EECS16B Review (Designing Information Devices and Systems II), Oct 15, 2023', url: 'https://docs.google.com/document/d/16XpvEvB746tzGeKeoB2KVI10-UrO3FoldryeR17ou84/edit?usp=drive_link' },
    { name: 'CS61B Review (Data Structures and Algorithms), Jan 2, 2024', url: 'https://docs.google.com/document/d/1eAwc4wDgjGo0CDu2o-THT-SLFT1WaeAf2DYqGvw8meg/edit?usp=drive_link' },
    { name: 'EE105 Review (Microelectronic Devices and Circuits), Sept 28, 2023', url: 'https://docs.google.com/document/d/1qNKF9D_pVXLCv_pisIRxIJ9ttaN21G1DGGN_g1FZ0nI/edit?usp=drive_link' },
    { name: 'CS70 Review (Discrete Math), Sept 28, 2023', url: 'https://docs.google.com/document/d/18MZN51LogQds9tHeLemPkw4YPWA3Fg1SvnrrcmTV_Cw/edit?usp=drive_link' },
    { name: 'EE143 Review (Microfabrication Technology), Jan 16, 2024', url: 'https://docs.google.com/document/d/19PK3p4qwcyNG4pkLQcpYpznACdxapLqNy5LW_LB31Pw/edit?usp=drive_link' },
    { name: 'EE120 Review (Signals and Systems), Jan 17, 2024', url: 'https://docs.google.com/document/d/1O9N-JwBLr4_y939BNkVT6NDEyM8X6BwlbWG1eqiWt-Q/edit?usp=drive_link' },
    { name: 'CS161 Review (Computer Security), Dec 15, 2024', url: 'https://docs.google.com/document/d/1uTZ2pvo8ZuvvJezrtaAL7Mp_KCLFUVFzLjE5Mq2615M/edit?usp=drive_link' },
    { name: 'Physics E&M Review (E&M), Dec 25, 2023', url: 'https://docs.google.com/document/d/1DEmwwBW-LB05APz83Vqi9WySZ0Y8bN6vThRGrNBT50Q/edit?usp=drive_link' },
    { name: 'EE120 Review (Signals and Systems), Jan 17, 2024', url: 'https://docs.google.com/document/d/1O9N-JwBLr4_y939BNkVT6NDEyM8X6BwlbWG1eqiWt-Q/edit?usp=drive_link' },
    { name: 'CS170 Review (Efficient Algorithms and Intractable Problems), Aug 30, 2024', url: 'https://docs.google.com/document/d/1rI7SRVqhcyS87XDOUnIpYatrPa6O08v0YG4asBSTTFk/edit?usp=drive_link' },
    { name: 'Coursera Financial Markets, Nov 20, 2024', url: 'https://docs.google.com/document/d/1lvj6EmczLwKRV5lZYNc527Bm23OPzIfE5YyTTZTi1_8/edit?usp=drive_link' },
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

export default CourseNotes;