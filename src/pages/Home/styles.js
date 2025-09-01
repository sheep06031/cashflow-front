// I just couldn’t manage to make the homepage on my own, so I got some help from GPT
// I felt guilty keeping it to myself, so here’s the truth

import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow-x: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 95%;
  }

  & > section {
    width: 60%;
  }
`;

export const backgroundPattern = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.07;
  background-image: radial-gradient(
      circle at 20% 50%,
      #ffffff 5px,
      transparent 2px
    ),
    radial-gradient(circle at 80% 50%, #ffffff 1px, transparent 1px);
  background-size: 60px 60px, 30px 30px;
  animation: float 10s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

export const heroSection = css`
  position: relative;
  z-index: 2;
  padding: 80px 20px 80px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const heroTitle = css`
  font-size: 64px;
  font-weight: 800;
  color: white;
  margin-bottom: 24px;
  line-height: 1.1;

  .highlight {
    background: linear-gradient(135deg, #00d4ff, #0096ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const heroSubtitle = css`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const heroDescription = css`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ctaButton = css`
  background: linear-gradient(135deg, #00d4ff, #0096ff);
  color: white;
  border: none;
  padding: 18px 48px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 212, 255, 0.4);
    background: linear-gradient(135deg, #0096ff, #00d4ff);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const featuresSection = css`
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 30px 30px 0 0;
  margin: 0 20px;
  padding: 80px 20px;
`;

export const sectionTitle = css`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #2d3748;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const sectionTitleLast = css`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const sectionSubtitle = css`
  font-size: 18px;
  color: #718096;
  text-align: center;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;

export const featuresGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const featureCard = css`
  background: white;
  padding: 30px 24px;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.08);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: rgba(102, 126, 234, 0.2);
  }
`;

export const featureIcon = css`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  ${featureCard}:hover & {
    transform: scale(1.05) rotate(3deg);
  }
`;

export const featureTitle = css`
  font-size: 20px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 12px;
`;

export const featureDescription = css`
  font-size: 15px;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const featureTags = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  span {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const howItWorksSection = css`
  background: white;
  padding: 80px 20px;
  margin: 0 20px;
`;

export const stepsContainer = css`
  max-width: 900px;
  margin: 0 auto;
`;

export const stepItem = css`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 30px;
  align-items: center;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

export const stepNumber = css`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const stepContent = css`
  .title {
    font-size: 24px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 8px;
  }

  .description {
    font-size: 16px;
    color: #718096;
    line-height: 1.6;
  }
`;

export const aiShowcaseSection = css`
  background: linear-gradient(135deg, #f7fafc, #edf2f7);
  padding: 80px 20px;
  margin: 0 20px;
`;

export const aiDemo = css`
  max-width: 700px;
  margin: 40px auto 0;
  background: white;
  border-radius: 20px;
  padding: 0;
  border: 1px solid rgba(102, 126, 234, 0.1);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  .demo-header {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    gap: 12px;

    .icon {
      font-size: 24px;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
    }
  }

  .demo-content {
    padding: 30px;
  }

  .analysis-item {
    margin-bottom: 20px;
    padding: 16px;
    background: #f7fafc;
    border-radius: 12px;
    border-left: 4px solid #667eea;

    &:last-child {
      margin-bottom: 0;
    }

    .label {
      font-size: 13px;
      font-weight: 600;
      color: #667eea;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .content {
      font-size: 15px;
      color: #2d3748;
      line-height: 1.5;
    }
  }
`;

export const benefitsSection = css`
  background: linear-gradient(135deg, #2d3748, #4a5568);
  margin: 0 20px;
  padding: 80px 20px;
  border-radius: 0 0 30px 30px;
  margin-bottom: 40px;
  color: white;
`;

export const benefitsGrid = css`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const benefitItem = css`
  .icon {
    font-size: 48px;
    margin-bottom: 20px;
    display: block;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #00d4ff;
  }

  .description {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
  }
`;

export const confession = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;


  & > h2 {
    margin: 2px;
    text-align: center;
    color: white;
  }
`
