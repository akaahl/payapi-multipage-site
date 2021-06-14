import styled from "styled-components";

const AboutContentTwo = () => {
  return (
    <StyledContainer>
      <header>
        <div>
          <p>Team Members</p>
          <h2>300+</h2>
        </div>

        <div>
          <p>Offices in the US</p>
          <h2>3</h2>
        </div>

        <div>
          <p>Transactions analyzed</p>
          <h2>10M+</h2>
        </div>
      </header>

      <div className="container">
        <div className="text-content">
          <h3>The Culture</h3>
          <p>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>

        <div className="text-content">
          <h3>The People</h3>
          <p>
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>

      <div className="subscribe-section">
        <h2>Ready to start?</h2>

        <div className="email-opt-in">
          <input type="email" name="email" placeholder="Enter email address" />
          <a href="#1" className="schedule-btn">
            Schedule a demo
          </a>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  padding: 2rem 8rem;
  margin-top: 2rem;

  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;

    div {
      border-top: 1px solid rgba(55, 84, 109, 0.2);
      border-bottom: 1px solid rgba(55, 84, 109, 0.2);

      h2 {
        color: #b9416f;
      }

      h2,
      p {
        margin: 1rem 0;
      }

      p {
        font-size: 14px;
        font-weight: 600;
        opacity: 0.7;
      }

      h2 {
        font-size: 3.5rem;
        font-weight: 500;
      }
    }
  }

  .container {
    margin-top: 4rem;
    padding: 0 6rem;

    .text-content {
      display: grid;
      grid-template-columns: 30% 80%;
      margin-bottom: 4rem;

      h3 {
        margin-right: 4rem;
        font-size: 2rem;
        font-weight: 500;
      }

      p {
        line-height: 1.7;
        font-size: 14px;
        font-weight: 600;
        opacity: 0.7;
      }
    }
  }

  .subscribe-section {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4rem;

    h2 {
      font-size: 3rem;
      font-weight: 500;
    }

    .email-opt-in {
      width: 55%;
      padding-left: 1.5rem;
      display: flex;
      justify-content: space-between;
      position: relative;
      background: #fff;
      border-radius: 2rem;
      box-shadow: 0 5px 25px -2px rgba(0, 0, 0, 0.1);

      input[type="email"] {
        border: none;
        margin: auto 0;
        width: 50%;
        padding: 1rem 0;
        padding-left: 1rem;

        &::placeholder {
          color: rgba(55, 84, 109, 0.5);
          font-weight: 800;
          margin-left: 1rem;
        }
      }

      .schedule-btn {
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      padding: 0;

      .text-content {
        grid-template-columns: 30% 70%;
      }
    }

    .subscribe-section {
      flex-direction: column;

      .email-opt-in {
        margin-top: 2rem;
        width: 65%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    header {
      grid-template-columns: 1fr;

      div {
        border: none;

        &:first-child {
          border-top: 1px solid rgba(55, 84, 109, 0.2);

          p {
            margin-top: 2rem;
          }
        }

        &:last-child {
          border-bottom: 1px solid rgba(55, 84, 109, 0.2);

          h2 {
            margin-bottom: 2rem;
          }
        }

        h2,
        p {
          text-align: center;
        }
      }
    }

    .container {
      .text-content {
        grid-template-columns: 1fr;

        h3 {
          margin-right: 0;
          text-align: center;
        }

        p {
          display: block;
          text-align: center;
          margin-top: 2rem;
        }
      }
    }

    .subscribe-section {
      h2 {
        text-align: center;
      }
      .email-opt-in {
        padding-left: 0;
        background: none;
        border: none;
        padding: none;
        box-shadow: none;
        display: flex;
        flex-direction: column;

        input[type="email"] {
          width: 100%;
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 5px 40px -2px rgba(0, 0, 0, 0.1);
          padding: 1rem 1.5rem;
        }

        .schedule-btn {
          margin-top: 2rem;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .subscribe-section {
      .email-opt-in {
        width: 100%;
      }
    }
  }
`;

export default AboutContentTwo;
