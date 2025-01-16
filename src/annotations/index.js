import '../App.css';


function Annotations() {
  const links = [
    { name: 'Seq2Seq, October 30, 2022', url: 'https://docs.google.com/document/d/1_hXM6zMk7iK_z3cAAiAaZHUsjdYWDbsDMToTuVGHnxU/edit?tab=t.0' },
    { name: 'Contrastive Learning for Mesh Segmentation, November 3 + 4, 2022', url: 'https://docs.google.com/document/d/1KWj8VPnS8h-gfJG_UXBH08WTAEJGdinxqSbKckuMFHM/edit?tab=t.0' },
    { name: 'NeRFs, November 8 + 9, 2022', url: 'https://docs.google.com/document/d/1KxV70loIc7NmahoOZHdGmGLJcHRnnf_9u7A9StjUIro/edit?usp=drive_link' },
    { name: 'GPT-2 Interpretability, November 17 + 18, 2022', url: 'https://docs.google.com/document/d/1hr_C1jCVX7ptUxxuFsVjkqKw_h4vlwhbqft5TzeCkQ0/edit?usp=drive_link' },
    { name: 'Diffusion Models, December, 2022', url: 'https://docs.google.com/document/d/1JH2iNVWXStrdCLb4pguOeTLCo5qmvJ2dT93JA9XMvs0/edit?tab=t.0' },
    { name: 'Typing w/ EEG, Jan 12, 2023', url: 'https://docs.google.com/document/d/162BBRF11Ipc2o3wh7O30ZYYxx2Qqp1ouiFMgqrbFsHA/edit?tab=t.0' },
    { name: 'fNIRS Breakdown, Feb 12, 2023', url: 'https://docs.google.com/document/d/1PcTxM2ejGgwOqp_orSi_F7mh0JvXfpoaxBS0ZmgoWRc/edit?tab=t.0' },
    { name: 'Photoacoustics for Hemoglobin and Temperature Imaging, April 10, 2023', url: 'https://docs.google.com/document/d/1yREH2bd0PuOKxWIvYVR6fe9C5mWQ6ZH0T-qyp7AWrtA/edit?tab=t.0' },
    { name: 'fNIRS Literature Review, April 24-27, 2023', url: 'https://docs.google.com/document/d/1OtBg11HX2XbzRE2GwS21W6dCtxdxTXazN5yweg7T86I/edit?tab=t.0' },
    { name: 'LoRA, May 11 + 12, 2023', url: 'https://docs.google.com/document/d/1gMo4fmjOT4eFWlvjlJkYyD34diTMdAroS7ibu9Qf5js/edit?tab=t.0' },
    { name: 'Marijuana Effects, May 13, 2023', url: 'https://docs.google.com/document/d/1uvzFZctdULP3C3BRAH95mhhXPaCUxhOFJL9RBVSK0h0/edit?tab=t.0' },
    { name: '3D Multi-Site Access Photostimulation, May 18, 2023', url: 'https://docs.google.com/document/d/1FpZwBE-ezDOBTO2bJgQg_JU8Yfjk8T3ZKstcdAiOC4w/edit?tab=t.0' },
    { name: 'NN-Based Bidirectional Forced Alignment, July 29 + 31, 2023', url: 'https://docs.google.com/document/d/1y9kw4UnRX_sATn4OxhQUckANdOjtTYDywggkPq1Vs9s/edit?tab=t.0' },
    { name: 'Conditional VAEs for TTS, Aug 6, 2023', url: 'https://docs.google.com/document/d/13-L5U6gg0VyCbPrjI3-0F9Yaf8olGr8zGIi_b3ufE8U/edit?tab=t.0' },
    { name: 'Biology Notes, December 3, 2023', url: 'https://docs.google.com/document/d/15y-T7XNzCKxq9hdVnHrZP-_jNg6xkWHfHNebfrzPRB8/edit?tab=t.0' },
    { name: 'Neuron Notes, December 5, 2023', url: 'https://docs.google.com/document/d/1ZsPRsMvZ-Q8upjk3O_mqBRJ35f5oGnULMUTkjPWgcRg/edit?usp=drive_link' },
    { name: 'Microscope Notes, December 6, 2023', url: 'https://docs.google.com/document/d/1kEBragt6nuNYkJBq-Xi9xXMZL66GDOncu0DNeTkNwS8/edit?tab=t.0' },
    { name: 'Recurrent Circuits Crucial for Ventral Stream Object Recognition, Jan 5, 2024', url: 'https://docs.google.com/document/d/1Yih2Z2mg5BtNowAWnMnPW6bkaTRGjQUlkLXCYt0_JRw/edit?tab=t.0' },
    { name: 'Ventral Stream Representation Learning, Jan 5, 2024', url: 'https://docs.google.com/document/d/1UKhAlY36TE9TjW8ER07iUD5xJD7Y4eiFd-gjc029MTo/edit?tab=t.0' },
    { name: 'Connectome-Constrained Neural Activity Prediction (Incomplete), May 26, 2024', url: 'https://docs.google.com/document/d/1Vp1cXmn_eHss280Y15Kjg3Ayj0z8yqgtS6oi-MIUt7I/edit?tab=t.0' },
    { name: 'Reverse Translation of Peptides into DNA for Sequencing (Incomplete), October 24, 2024', url: 'https://docs.google.com/document/d/1bnVCF0LyG2w_E9pdnmGL91F3bAevp7pZyy_EZMe_SGs/edit?tab=t.0' },
    { name: 'Peptide-GPCR Interactions (Incomplete), October 25, 2024', url: 'https://docs.google.com/document/d/1l7VfS1OOFp7TRvhciHzVy_xfb3YYZdJDeO_hvMBfwkQ/edit?tab=t.0' },
    { name: 'Edman Degredation (Incomplete), October 25, 2024', url: 'https://docs.google.com/document/d/1PLnggeEKX2-D4b-a88R_x7jcl1lKHsg2AbqmvpBFG2o/edit?tab=t.0' },
    { name: 'FPGA + VHDL Notes (Incomplete), November 27, 2024', url: 'https://docs.google.com/document/d/1kX_lnIs8fy8SumhHlyT_bCR3iF99Oj6bsZ8NFGN5bn4/edit?tab=t.0' },
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

export default Annotations;