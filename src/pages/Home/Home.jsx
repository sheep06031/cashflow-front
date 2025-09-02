// I just couldn’t manage to make the homepage on my own, so I got some help from GPT
// I felt guilty keeping it to myself, so here’s the truth

/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import * as s from "./styles";
import { useState } from "react";
import SignUpModal from "../../components/Modal/SignupModal/SignupModal";

function Home() {
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <>
      <div css={s.backgroundPattern}></div>

      <div css={s.container}>
        <div css={s.backgroundPattern}></div>

        <section css={s.heroSection}>
          <h1 css={s.heroTitle}>
            Smart <span className="highlight">Personal Finance</span> Management
          </h1>
          <p css={s.heroSubtitle}>
            Track, analyze, and optimize your spending with AI-powered insights
          </p>
          <p css={s.heroDescription}>
            Take control of your finances with our intuitive expense tracker.
            Create detailed transaction records, edit them anytime, and receive
            personalized AI feedback to improve your spending habits every
            month.
          </p>
          <button css={s.ctaButton} onClick={() => setOpenSignup(true)}>
            Start Tracking Your Expenses
          </button>
        </section>

        <section css={s.featuresSection}>
          <h2 css={s.sectionTitle}>
            Everything You Need for Better Money Management
          </h2>
          <p css={s.sectionSubtitle}>
            From simple transaction tracking to advanced AI analysis, we provide
            all the tools to help you make smarter financial decisions.
          </p>

          <div css={s.featuresGrid}>
            <div css={s.featureCard}>
              <div css={s.featureIcon}>✏️</div>
              <h3 css={s.featureTitle}>Easy Transaction Entry</h3>
              <p css={s.featureDescription}>
                Quickly log your income and expenses with our streamlined
                interface. Add categories, notes, and tags to keep your
                financial records organized and detailed.
              </p>
              <div css={s.featureTags}>
                <span>Quick Entry</span>
                <span>Categories</span>
                <span>Notes & Tags</span>
              </div>
            </div>

            <div css={s.featureCard}>
              <div css={s.featureIcon}>📝</div>
              <h3 css={s.featureTitle}>Real-time Editing</h3>
              <p css={s.featureDescription}>
                Made a mistake? No problem! Edit any transaction anytime with
                just a few clicks. Keep your financial records accurate and
                up-to-date effortlessly.
              </p>
              <div css={s.featureTags}>
                <span>Instant Updates</span>
                <span>Error Correction</span>
                <span>Flexible Management</span>
              </div>
            </div>

            <div css={s.featureCard}>
              <div css={s.featureIcon}>🤖</div>
              <h3 css={s.featureTitle}>AI-Powered Analytics</h3>
              <p css={s.featureDescription}>
                Get monthly insights about your spending patterns. Our AI
                analyzes your transactions and provides personalized
                recommendations to help you save more and spend smarter.
              </p>
              <div css={s.featureTags}>
                <span>Pattern Analysis</span>
                <span>Smart Recommendations</span>
                <span>Monthly Reports</span>
              </div>
            </div>
          </div>
        </section>

        <section css={s.howItWorksSection}>
          <h2 css={s.sectionTitle}>How It Works</h2>
          <p css={s.sectionSubtitle}>
            Get started in minutes and see the impact on your financial health
            within the first month.
          </p>

          <div css={s.stepsContainer}>
            <div css={s.stepItem}>
              <div css={s.stepNumber}>1</div>
              <div css={s.stepContent}>
                <div className="title">Record Your Transactions</div>
                <div className="description">
                  Start by logging your daily income and expenses. Use our
                  intuitive interface to add details like category, amount,
                  date, and personal notes. Build a comprehensive picture of
                  your spending habits.
                </div>
              </div>
            </div>

            <div css={s.stepItem}>
              <div css={s.stepNumber}>2</div>
              <div css={s.stepContent}>
                <div className="title">Edit & Organize</div>
                <div className="description">
                  Keep your records accurate by editing transactions whenever
                  needed. Organize them by categories, add tags for better
                  filtering, and maintain clean, reliable financial data that
                  truly reflects your lifestyle.
                </div>
              </div>
            </div>

            <div css={s.stepItem}>
              <div css={s.stepNumber}>3</div>
              <div css={s.stepContent}>
                <div className="title">Get AI Insights</div>
                <div className="description">
                  At the end of each month, receive detailed AI-generated
                  analysis of your spending patterns. Discover trends, identify
                  areas for improvement, and get actionable recommendations to
                  optimize your financial health.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section css={s.aiShowcaseSection}>
          <h2 css={s.sectionTitle}>AI-Powered Financial Insights</h2>
          <p css={s.sectionSubtitle}>
            See how our AI analyzes your spending patterns and provides
            actionable recommendations to help you achieve your financial goals.
          </p>

          <div css={s.aiDemo}>
            <div className="demo-header">
              <div className="icon">🤖</div>
              <div className="title">Your January 2024 Financial Analysis</div>
            </div>

            <div className="demo-content">
              <div className="analysis-item">
                <div className="label">Spending Pattern</div>
                <div className="content">
                  You spent 35% more on dining out compared to last month.
                  Consider meal prepping 2-3 times per week to reduce restaurant
                  expenses by approximately $120/month.
                </div>
              </div>

              <div className="analysis-item">
                <div className="label">Budget Optimization</div>
                <div className="content">
                  Your transportation costs decreased by 22% thanks to remote
                  work days. You could save an additional $80/month by working
                  from home one extra day per week.
                </div>
              </div>

              <div className="analysis-item">
                <div className="label">Saving Opportunity</div>
                <div className="content">
                  Based on your income and fixed expenses, you have potential to
                  save $350 more monthly by optimizing discretionary spending
                  categories identified in your analysis.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section css={s.benefitsSection}>
          <h2 css={s.sectionTitleLast}>Why Choose Our Platform?</h2>
          <p css={s.sectionSubtitle}>
            Join thousands of users who have transformed their financial habits
            with our smart tools.
          </p>

          <div css={s.benefitsGrid}>
            <div css={s.benefitItem}>
              <div className="icon">📈</div>
              <div className="title">Improve Financial Health</div>
              <div className="description">
                Users typically reduce unnecessary spending by 25% within their
                first 3 months using our AI recommendations.
              </div>
            </div>

            <div css={s.benefitItem}>
              <div className="icon">⚡</div>
              <div className="title">Save Time</div>
              <div className="description">
                Quick transaction entry and smart categorization help you
                maintain your financial records in just 5 minutes per day.
              </div>
            </div>

            <div css={s.benefitItem}>
              <div className="icon">🎯</div>
              <div className="title">Achieve Goals</div>
              <div className="description">
                Set and track financial goals with personalized insights that
                help you stay motivated and on track.
              </div>
            </div>
          </div>
        </section>
        <div css={s.confession}>
          <h2>
            I just couldn’t manage to make the homepage on my own, so I got some
            help from GPT. 
            
            
            I felt guilty keeping it to myself, so here’s the
            truth
          </h2>
          <h2>AI is impressive… honestly, it’s a bit scary.</h2>
        </div>
      </div>
      {openSignup && <SignUpModal onClose={() => setOpenSignup(false)} />}
    </>
  );
}

export default Home;
