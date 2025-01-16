import '../App.css';


function Ideas() {
  const links = [
    { name: 'Canine fNIRS Design', url: 'https://docs.google.com/document/d/1EqZsP07UJHUMo1tOBuE7tnfscIsEDliz8Xq9GwO84iU/edit?usp=drive_link' },
    { name: 'Kernel Flow Plan', url: 'https://docs.google.com/document/d/1FA6mEmrhtOamWMuOFqxLZB53hDNSgaWS57ZGqoAsN0Y/edit?usp=drive_link' },
    { name: 'PCB Tips + Tricks', url: 'https://docs.google.com/document/d/1Qcx2DeTBSd1nT2Sh8M4J6ToadNyaw5E9HUZaJeuxAY0/edit?usp=drive_link' },
    { name: 'AI Scientist', url: 'https://docs.google.com/document/d/1iNWXmFpdJP_et4IK70VbqwgcvkOGz-J4q0BBO2xPLew/edit?usp=drive_link' },
    { name: 'Neuralink Notes', url: 'https://docs.google.com/document/d/1xMibrtYBd-7V2KDy96pFGfkDyw5FN8hPm5U58QOq1GQ/edit?usp=drive_link' },
    { name: 'Neuralink Overview', url: 'https://docs.google.com/presentation/d/1HM2K24oiRNoc4m68bNbXka91ZC5udF2cRbyidFYFcd4/edit?usp=drive_link' },
    { name: 'Neurotech System Ideas', url: 'https://docs.google.com/document/d/13PT-mBJ7f6g0g4Lg2YQr7Zd8pM4_niHpUx0ioXGTRdM/edit?usp=drive_link' },
    { name: 'Entity Prediction', url: 'https://drive.google.com/file/d/1oWA8yiQqY1OkSNeqWksA8iHeOLNZQdfw/view?usp=drive_link' },
    { name: 'Pretrained Model Inutitions', url: 'https://docs.google.com/document/d/1zSVsedBb1DYQTxWxU3gEZp2ovFgfTY02WbCQU40JkhI/edit?usp=drive_link' },
    { name: 'Full Body Avatar + Real-Time Speech Decoding', url: 'https://docs.google.com/document/d/1xuB6WDSfQ_4tuAlGlOedM_p-VkTZL5Jv4CabNQ7179w/edit?usp=drive_link' },
    { name: 'BRAVO w/ Context', url: 'https://docs.google.com/document/d/1Vi1yIJy6BQFdRbsaYu4mLz5In9FFTqzWid45uRy_kEQ/edit?usp=drive_link' },
    { name: 'Thought -> Text', url: 'https://docs.google.com/document/d/17c7-HQwHyG9oVN_C8vbXdxNfuIaUpcUnZyZyWbc2ARg/edit?usp=drive_link' },
    { name: 'PPA Architecture', url: 'https://drive.google.com/file/d/1p6o4md-yQS-QhHX8W1xRBbO_tUqns2qh/view?usp=drive_link' },
    { name: 'Flow 1 < Flow 2', url: 'https://docs.google.com/document/d/1urn0VCLMbn48QovzrjetmYvxI6208w2k0PkcEBogIkU/edit?usp=drive_link' },
    { name: 'PPA Project Plan', url: 'https://docs.google.com/presentation/d/1EVfTSKO7ZNEereT-GG62dkKBKcxbfFRw3jcwEjbywCw/edit?usp=drive_link' },
    { name: 'Restoring + Augmenting Senses?', url: 'https://docs.google.com/document/d/1lfEUQM4AEbkbtx6QxCBUYxR_ZDNTqy8pjXcvJpOLtO0/edit?usp=drive_link' },
    { name: 'Disfluency Detection', url: 'https://docs.google.com/document/d/1wvHAZdFFJ4uLqso5_9Fz6oc0dAGospf_1YE05EtiZTg/edit?usp=drive_link' },
    { name: 'Neurobiology of Sickness Behaviours', url: 'https://docs.google.com/document/d/1Ie03iPbcnY1qOcte8EkDPOT8r3Kp2tHy101cE0xFft4/edit?usp=drive_link' },
    { name: 'I1', url: 'https://docs.google.com/document/d/1z0lhuFaquth8yx7o9-KmequDQzE_RkEZLB3Qpx7xXq8/edit?usp=drive_link' },
    { name: 'Contextual Understanding', url: 'https://docs.google.com/presentation/d/1niA6Ui2kCTPU1zRjvY08GtfSf-_ZBKh0yjsnD7pHebo/edit?usp=drive_link' },
    { name: 'SSL w/ Speech', url: 'https://docs.google.com/presentation/d/1BRO7Hfr9Lqn9sSKhUjw-nr3uAteuIzTgZfph3hMz_t0/edit?usp=drive_link' },
    { name: 'High Performing Speech Synthesis', url: 'https://docs.google.com/document/d/1Trr-kTRBrcHq_0OSeET2e1g3JsLBhMvJeWHd-7GFOUI/edit?usp=drive_link' },
    { name: 'Multimodal Speech Synthesis', url: 'https://docs.google.com/presentation/d/1-Bj4CtRi6A3gykAiXFoxUsyhepvrxJ0qm5_6tXy78Fg/edit?usp=drive_link' },
    { name: 'Contextual Understanding + Deep Vision Encoding/Interpretability', url: 'https://docs.google.com/presentation/d/1veSVv1QPdWCMjYvRjXKGOeaMKV2uTGBUK5-EmubnI2c/edit?usp=drive_link' },
    { name: 'Covert Speech w/ EEG/MEG + Gaze/Visual Semantics', url: 'https://docs.google.com/presentation/d/1ga2IjbF5xfdPHDSBbfvFG0Xe5DrvIbNpbp83CZAKqq0/edit?usp=drive_link' },
    { name: 'Policy Gradient Optimization Reward Modeling', url: 'https://docs.google.com/document/d/1ObrPzR_2PeJanZtcssJLuXrPkpouhyEoLrT1rMxFOuw/edit?usp=drive_link' },
    { name: 'On a Quest for Creating an Accurate Structural/Functional Approximation of Neural Circuits!', url: 'https://docs.google.com/presentation/d/1ETIiBKayHXbCPlH7TtMJdo2Q6dkYHTi6aHfIN9gwDuo/edit?usp=drive_link' },
    { name: 'Silent Speech - Data Collection, Online/Offline Window Decoding, Streaming, Session Disentanglement', url: 'https://docs.google.com/presentation/d/141vdkoM-2obzucXb4v5UK1GqFuNY0YQyvX6a_qeY9GY/edit?usp=drive_link' },
    { name: 'Session Disentanglement', url: 'https://docs.google.com/document/d/1UYIyB6SCIDLHNAL7UZLY0PNmTXIQKWw-NvKdMSJiJBU/edit?usp=drive_link' },
    { name: 'Worm Graph Repo Breakdown', url: 'https://docs.google.com/document/d/1uYzms9UKGMZMmyPNHvoKq6_gevX4Zi_XfxhyddV1IvU/edit?usp=drive_link' },
    { name: 'RSVP Analysis', url: 'https://docs.google.com/presentation/d/16HFCZWYWq4aNwsWZIXMLnVOp0E7FcsivwIW_988TbI8/edit?usp=drive_link' },
    { name: 'C. Elegan Feature Disentanglement', url: 'https://docs.google.com/document/d/1TctEOQPz7W2ozlGypmPqtNAonN_h76i9ZmcyI-o1WeE/edit?usp=drive_link' },
    { name: 'C. Elegan Feature Disentanglement (Slides)', url: 'https://docs.google.com/presentation/d/1uC-t39NCnssoN3wJxrG9WP5m9lncZuOLF3kYrqZAN2I/edit?usp=drive_link' },
    { name: 'Worm Dataset Notes', url: 'https://docs.google.com/document/d/1rqJoJkrhkM8bP2ExRWdHQxGbZOtUHxK7z4xh_91dQQM/edit?usp=drive_link' },
    { name: '6 Month Worm Project', url: 'https://docs.google.com/document/d/17HeXlVp0IgtL0RIesBL4F2ut0Nrp-0xGg6m1NuJ-16s/edit?usp=drive_link' },
    { name: 'Vision Encoding Plan', url: 'https://docs.google.com/document/d/1VbB-YuT1ZpTaD4aKIN8GyngUJCv5e1twr6_NYlpw_wY/edit?usp=drive_link' },
    { name: 'Brain Emulation Experiments', url: 'https://docs.google.com/document/d/17v9altZdLUkt1rIQL0120VU4DAz5rSRQ3zLFtmz3xak/edit?usp=drive_link' },
    { name: 'Brain Emulation from First Principles', url: 'https://docs.google.com/document/d/11jqdbDjbVRXLms3ikaqeUX2N7IUZtis97ruaUo9exTo/edit?usp=drive_link' },
    { name: 'No Target Vision Encoding', url: 'https://docs.google.com/document/d/1v9XBZRCXoUFeqN9XGqokg36Sm8OVL5l3ZTI7yHzFp2s/edit?usp=drive_link' },
    { name: 'Adventure Game', url: 'https://docs.google.com/document/d/1KBjGROAWC3-ub9sR5Dn9cjJxnCsK7xvWJLicYMLH6Qk/edit?usp=drive_link' },
    { name: 'Investing + Trading', url: 'https://docs.google.com/document/d/1YU_tTs2SqsxDLOM1dpvmW9Ay3-pmcAl1enQ0qC-XxM8/edit?usp=drive_link' },
    { name: 'Crypto Tools', url: 'https://docs.google.com/document/d/1qhvvnWr1-28BLg3-utkgOrWTCQNe_TLr_jJLvCV3aKo/edit?usp=drive_link' },
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

export default Ideas;