import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>On Going Projects</h1>
        <p>Current research projects and collaborations</p>
      </header>

      <section className="projects-section">
        <div className="project-card">
          <div className="project-header">
            <h2>NCBI-MCP</h2>
            <div className="project-tags">
              <span className="project-tag">Personal Project</span>
            </div>
          </div>
          <p className="project-description">
            Through this project, you can integrate and automate virtually all NCBI Datasets modules 
            (Genome, Gene, BioSample, Virus, Taxonomy, etc.) within a local or on-premises network environment.
          </p>
          <div className="project-details">
            <div className="project-detail">
              <span className="detail-label">GitHub:</span>
              <a href="https://github.com/GooTec/NCBI-MCP" target="_blank" rel="noopener noreferrer" className="detail-value">
                https://github.com/GooTec/NCBI-MCP
              </a>
            </div>
            <div className="project-detail">
              <span className="detail-label">My Role:</span>
              <span className="detail-value">Organizer, Developer, Tester</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h2>Statistical Inference and Interpretability in BINN</h2>
            <div className="project-tags">
              <span className="project-tag">Thesis Project</span>
            </div>
          </div>
          <p className="project-description">
            A key challenge with high-accuracy AI models is their lack of interpretability. Biologically Informed Neural Networks (BINN) 
            address this issue by incorporating biological knowledge into model architecture, enabling biological interpretation of model 
            components. This research focuses on developing methods for statistical uncertainty quantification and significance evaluation 
            for these biologically informed models.
          </p>
          <div className="project-details">
            <div className="project-detail">
              <span className="detail-label">Leader:</span>
              <span className="detail-value">Taesung Park</span>
            </div>
            <div className="project-detail">
              <span className="detail-label">Member(s):</span>
              <span className="detail-value">Chanhee Lee (Interdisciplinary Program in Bioinformatics, Seoul National University)</span>
            </div>
            <div className="project-detail">
              <span className="detail-label">GitHub:</span>
              <a href="https://github.com/GooTec/pnet_permutation" target="_blank" rel="noopener noreferrer" className="detail-value">
                https://github.com/GooTec/pnet_permutation
              </a>
            </div>
            <div className="project-detail">
              <span className="detail-label">My Role:</span>
              <span className="detail-value">Data Analysis</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h2>Rare Variants Analysis of Metabolic Syndrome in UK Biobank</h2>
            <div className="project-tags">
              <span className="project-tag">Collaborative Research</span>
            </div>
          </div>
          <p className="project-description">
            This project explores the association between rare genetic variants and metabolic syndrome using the UK Biobank dataset.
            By analyzing whole-exome sequencing data, we aim to identify rare variants that may contribute to metabolic syndrome risk
            and provide insights into potential biological mechanisms.
          </p>
          <div className="project-details">
            <div className="project-detail">
              <span className="detail-label">Leader:</span>
              <span className="detail-value">Hosun Lee (Forensic Toxicology Division, Daegu Institute, National Forensic Service)</span>
            </div>
            <div className="project-detail">
              <span className="detail-label">My Role:</span>
              <span className="detail-value">Data Analysis</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h2>Quantile-regression based Polygenic Risk Score</h2>
            <div className="project-tags">
              <span className="project-tag">Collaborative Research</span>
            </div>
          </div>
          <p className="project-description">
            Traditional linear regression-based Polygenic Risk Scores (PRS) face challenges with heteroscedastic or skewed phenotype distributions,
            leading to imprecise estimations of genomic effects. This research aims to develop a quantile regression-based approach to PRS
            calculation that better handles non-normal phenotype distributions and provides more robust genomic effect estimates across the
            entire distribution of phenotypes.
          </p>
          <div className="project-details">
            <div className="project-detail">
              <span className="detail-label">Leader:</span>
              <span className="detail-value">Mira Park (Department of Preventive Medicine, Eulji University)</span>
            </div>
            <div className="project-detail">
              <span className="detail-label">Member(s):</span>
              <span className="detail-value">Suin Kim (Department of Statistics, Korea University)</span>
            </div>
            <div className="project-detail">
              <span className="detail-label">My Role:</span>
              <span className="detail-value">Technical Support, Bioinformatics Consultant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
