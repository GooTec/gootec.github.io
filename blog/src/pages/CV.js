import React from 'react';
import '../styles/CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Taewan Goo</h1>
        <p className="title">Ph.D. Candidate</p>
        <div className="contact-info">
          <p>Seoul National University</p>
          <p>Seoul 08826, Republic of Korea</p>
          <p>
            <a href="mailto:gootec92@snu.ac.kr">gootec92@snu.ac.kr</a>
          </p>
          <p>+82) 010-3178-7488</p>
          <p>
            <a href="https://github.com/GooTec" target="_blank" rel="noopener noreferrer">
              https://github.com/GooTec
            </a>
          </p>
        </div>
      </header>

      <section className="cv-section" id="education">
        <h2>Education</h2>
        <div className="education-item">
          <div className="edu-date">Sep. 2018 ~ Present</div>
          <div className="edu-details">
            <h3>Seoul National University</h3>
            <p>Interdisciplinary Program in Bioinformatics</p>
            <p>Advisor: Taesung Park</p>
            <p>Ph.D. Student</p>
            <p>GPA: 3.72 / 4.3</p>
          </div>
          <div className="edu-location">Seoul, Korea</div>
        </div>

        <div className="education-item">
          <div className="edu-date">Feb. 2011 ~ Aug. 2018</div>
          <div className="edu-details">
            <h3>Handong Global University</h3>
            <p>Department of Computer Engineering</p>
            <p>Advisor: Taejin Ahn</p>
            <p>B.S. in Computer Engineering</p>
          </div>
          <div className="edu-location">Pohang, Korea</div>
        </div>
      </section>

      <section className="cv-section" id="research">
        <h2>Research Interests</h2>
        <ul className="interest-list">
          <li>Precision Medicine</li>
          <li>Explainable AI (XAI)</li>
          <li>Biologically Informed Neural Network (BINN)</li>
          <li>Oncogenomics</li>
          <li>Pathway analysis</li>
        </ul>
      </section>

      <section className="cv-section" id="publications">
        <h2>Publications (SCIE/ESCI)</h2>
        <ol className="publication-list">
          <li>Lee, D., Lee, C., Han, K., <strong>Goo, T.</strong>, Kim, B., Han, Y., ... & Park, T. (2025). Machine learning models
for pancreatic cancer diagnosis based on microbiome markers from serum extracellular
vesicles. Scientific Reports, 15(1), 10995.</li>
          <li>Han, K., Apio, C., Song, H., Lee, B., Hu, X., Park, J., ... & Park, T. (2025). An ensemble approach
improves the prediction of the COVID-19 pandemic in South Korea. Journal of Global Health, 15,
04079.</li>
          <li>Hwangbo, S., Lee, S., Hosain, M. M., <strong>Goo, T.</strong>, Lee, S., Kim, I., & Park, T. (2024). Kernel-based
hierarchical structural component models for pathway analysis on survival phenotype. Genes &
Genomics, 46(12), 1415-1421.</li>
          <li>Ahn, D. W., Seo, Y., <strong>Goo, T.</strong>, Jeong, J. B., Park, T., & Yoon, S. H. (2024). Temporal Radiographic
Trajectory and Clinical Outcomes in COVID-19 Pneumonia: A Longitudinal Study. Journal of
Korean Medical Science, 40.</li>
          <li>Song, H., Han, K., Park, J., Liu, Z., <strong>Goo, T.</strong>, Krishnamurthy, A., & Park, T. (2024). K-Track-Covid:
interactive web-based dashboard for analyzing geographical and temporal spread of COVID-19
in South Korea. Frontiers in Public Health, 12, 1347862.</li>
          <li>Moon, M. K., Ham, H., Song, S. M., Lee, C., <strong>Goo, T.</strong>, Oh, B., ... & Park, T. (2024). The clinical course
of hospitalized COVID-19 patients and aggravation risk prediction models: a retrospective,
multi-center Korean cohort study. Frontiers in Medicine, 10, 1239789.</li>
          <li>Chung, H. W., Apio, C., <strong>Goo, T.</strong>, Heo, G., Han, K., Kim, T., ... & Park, T. (2021). Effects of
government policies on the spread of COVID-19 worldwide. Scientific Reports, 11(1), 20495.</li>
          <li>Kim, H., Apio, C., Ko, Y., Han, K., <strong>Goo, T.</strong>, Heo, G., ... & Park, T. (2021). Which national factors are
most influential in the spread of COVID-19?. International Journal of Environmental Research
and Public Health, 18(14), 7592.</li>
          <li>Heo, G., Apio, C., Han, K., <strong>Goo, T.</strong>, Chung, H. W., Kim, T., ... & Park, T. (2021). Statistical estimation
of effects of implemented government policies on COVID-19 situation in South Korea.
International Journal of Environmental Research and Public Health, 18(4), 2144.</li>
          <li><strong>Goo, T.</strong>, Han, K., Apio, C., & Park, T. (2021). Analysis of COVID-19 genetic risk susceptibility using
UK Biobank SNP genotype data. International Journal of Data Mining and Bioinformatics, 25(1-2),
1-16.</li>
          <li>Ahn, T., <strong>Goo, T.</strong>, Lee, C. H., Kim, S., Han, K., Park, S., & Park, T. (2020). Deep learning-based
classification and interpretation of gene expression data from cancer and normal tissues.
International Journal of Data Mining and Bioinformatics, 24(2), 121-139.</li>
        </ol>
      </section>

      <section className="cv-section" id="conferences">
        <h2>Conferences</h2>
        <ol className="conference-list">
          <li><strong>Taewan Goo</strong>, Chanhee Lee, Sangyeon Shin, Haeyoung Kim, Taesung Park, "Uncertainty
Quantification and Statistical Inference for Biologically Informed Neural Networks", 2024 IEEE
International Conference on Bioinformatics and Biomedicine (BIBM), Lisbon, Portugal (Dec.
2024) - Workshop paper</li>
          <li><strong>Taewan Goo</strong>, Kyulhee Han, Hanbyul Song, Jiwon Park, Zhe Liu, Jooha Oh, Sayooj Aby Jose,
Taesung Park, "Confidence Interval Estimation for Machine Learning Models in Forecasting
Infectious Diseases", 2024 IEEE International Conference on Bioinformatics and Biomedicine
(BIBM), Lisbon, Portugal (Dec. 2024) - Workshop paper</li>
          <li><strong>Taewan Goo</strong>, Daechan Park, Seungyeon Lee, Jin-Young Jang, "Identification of prognosis
biomarker for Pancreatic Ductal Adenocarcinoma", IEEE international conference on
bioinformatics and biomedicine 2020, Seoul, Korea (Dec. 2020) - Oral</li>
          <li>Taejin Ahn, <strong>Taewan Goo</strong>, Chan-hee Lee, SungMin Kim, Kyulhee Han, Sangick Park, Taesung
Park, "Deep learning-based identification of cancer or normal tissue using gene expression
data", 2018 IEEE international conference on bioinformatics and biomedicine (BIBM), Madrid,
Spain (Dec. 2018) - Conference paper</li>
        </ol>
      </section>

      <section className="cv-section" id="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Developing statistical prediction model and clinical application platform for implementing
cancer precision medicine based on multi-omics.</h3>
          <p className="project-source">Ministry of Health and Welfare (MOHW) and
Korea Basic Science Institute (KBSI), Korea</p>
          <p className="project-role">I managed project milestones efficiently, prepared
detailed progress and final reports, and developed tools (Aug. 2018 ~ Feb. 2023)</p>
        </div>

        <div className="project-item">
          <h3>Commercializing project for pathway analysis based on BC Platforms.</h3>
          <p className="project-source">Ministry of Small and
medium enterprises and Startups (MSS), Korea</p>
          <p className="project-role">I built a pipeline to automate pathway analysis
of genomic data, developed the front-end for pathway visualization (Feb. 2019 ~ Dec. 2019)</p>
        </div>

        <div className="project-item">
          <h3>Development of Korea data-driven decision supporting platform (COVID-19 Clinical Data
Analysis and Development of Platform)</h3>
          <p className="project-source">Bio and Medical Technology Development Program of
the National Research Foundation (NRF) supported by the Korean government (MSIT), Korea</p>
          <p className="project-role">I
collaborated with a team to meet project milestones within budget and contributed to project design (Jun. 2021 ~ Present)</p>
        </div>
      </section>

      <section className="cv-section" id="skills">
        <h2>Skills and Techniques</h2>
        <div className="skills-container">
          <div className="skill-item">
            <span className="skill-name">Python</span>
            <span className="skill-level">Proficient</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Deep learning framework (PyTorch)</span>
            <span className="skill-level">Proficient</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Linux server management (CentOS, and Ubuntu)</span>
            <span className="skill-level">Proficient</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Cluster server management (Slurm)</span>
            <span className="skill-level">Intermediate</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Basic shell script (Bash)</span>
            <span className="skill-level">Intermediate</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Statistical Analysis using R</span>
            <span className="skill-level">Intermediate</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Docker</span>
            <span className="skill-level">Intermediate</span>
          </div>
        </div>
      </section>

      <section className="cv-section" id="software">
        <h2>Software Copyright</h2>
        <ul className="software-list">
          <li>T Park, K Han, <strong>T Goo</strong>, H Kwon (2020) BC Pathways-PHARAOH</li>
          <li>T Park, K Han, <strong>T Goo</strong>, C Lee (2022) iCoViD (Intelligent COVID-19 Dashboard for forecasting and
clinical assessment)</li>
          <li>T Park, <strong>T Goo</strong> (2023) Multi-omics based clinical prediction platform for pancreatic cancer, liver
cancer, and ovarian cancer</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
