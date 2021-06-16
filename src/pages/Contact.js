import React, { useState, useRef } from "react";
import styled from "styled-components";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import HP from "../assets/shared/desktop/hewlett-packard.svg";
import Google from "../assets/shared/desktop/google.svg";
import Microsoft from "../assets/shared/desktop/microsoft.svg";
import Nvidia from "../assets/shared/desktop/nvidia.svg";
import Oracle from "../assets/shared/desktop/oracle.svg";
import Tesla from "../assets/shared/desktop/tesla.svg";
import checkIcon from "../assets/shared/desktop/right.svg";

const Contact = () => {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  const handleChange = (e) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  const handleClassList = (e) =>
    !e.target.value
      ? e.target.classList.add("alert")
      : e.target.classList.remove("alert");

  const handleEmail = (e) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !emailRegex.test(e.target.value.toLowerCase())
      ? emailRef.current.classList.add("alert-email")
      : emailRef.current.classList.remove("alert-email");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientInfo.name) {
      nameRef.current.classList.add("alert");
    }

    if (!clientInfo.email) {
      emailRef.current.classList.add("alert-email");
    }

    if (!clientInfo.company) {
      companyRef.current.classList.add("alert");
    }

    if (!clientInfo.title) {
      titleRef.current.classList.add("alert");
    }

    if (!clientInfo.message) {
      messageRef.current.classList.add("alert");
    }
  };

  return (
    <StyledContainer>
      <img
        src={circlePattern}
        alt="circle-pattern"
        className="circle-pattern"
      />
      <h1>Submit a help request and we'll get in touch shortly.</h1>

      <div className="container">
        <form action="#" onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Name"
            value={clientInfo.name}
            onChange={handleChange}
            onBlur={handleClassList}
          />
          <div className="border-line"></div>
          <input
            ref={emailRef}
            type="text"
            name="email"
            placeholder="Email Address"
            value={clientInfo.email}
            onChange={handleChange}
            onBlur={handleEmail}
          />
          <div className="border-line"></div>

          <input
            ref={companyRef}
            type="text"
            name="company"
            placeholder="Company Name"
            value={clientInfo.company}
            onChange={handleChange}
            onBlur={handleClassList}
          />
          <div className="border-line"></div>

          <input
            ref={titleRef}
            type="text"
            name="title"
            placeholder="Title"
            value={clientInfo.title}
            onChange={handleChange}
            onBlur={handleClassList}
          />
          <div className="border-line"></div>

          <textarea
            ref={messageRef}
            name="message"
            id=""
            cols="10"
            rows="10"
            placeholder="Message"
            value={clientInfo.message}
            onChange={handleChange}
            onBlur={handleClassList}
          ></textarea>
          <div className="border-line"></div>
          <small>This field cannot be empty</small>

          <div className="checkbox-container">
            <input type="checkbox" name="stay-updated" id="stay-updated" />
            <label htmlFor="stay-updated">
              Stay up-to-date with our company announcements and updates to our
              API.
            </label>
          </div>

          <button>Submit</button>
        </form>

        <div className="list-of-companies">
          <h3>Join the thousand of innovators already building with us.</h3>

          <div className="image-container">
            <img src={Tesla} alt="tesla" />
            <img src={Microsoft} alt="microsoft" />
            <img src={HP} alt="hewlett packard" />
            <img src={Oracle} alt="oracle" />
            <img src={Google} alt="google" />
            <img src={Nvidia} alt="nvidia" />
          </div>
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

const StyledContainer = styled.main`
  padding: 2rem 8rem;

  .circle-pattern {
    position: absolute;
    top: -35%;
    right: 5%;
    transform: translate(35%, -5%);
    z-index: -1;
  }

  h1 {
    font-size: 3.9vw;
    font-weight: 500;
    width: 60%;
    line-height: 1;
  }

  .container {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    margin-top: 4rem;

    form {
      flex: 0.8;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding-right: 2rem;
      position: relative;

      input[type="text"],
      input[type="email"],
      textarea {
        background: none;
        width: 100%;
        font-family: "Spartan", sans-serif;
        border: none;
        border-bottom: 1px solid rgba(55, 84, 109, 0.2);
        padding: 1.5rem;
        position: relative;

        &.alert {
          border-bottom: 1px solid #b9416f;

          &::placeholder {
            color: #b9416f;
          }
        }

        &.alert + .border-line {
          margin-bottom: 2rem;
        }

        &.alert + .border-line::before {
          display: block;
        }

        &.alert-email {
          border-bottom: 1px solid #b9416f;
          color: #b9416f;

          &::placeholder {
            color: #b9416f;
          }
        }

        &.alert-email + .border-line {
          margin-bottom: 2rem;
        }

        &.alert-email + .border-line::after {
          display: block;
        }

        &:focus {
          outline: none;
        }

        &:focus::-webkit-input-placeholder {
          color: rgb(55, 84, 109);
          font-weight: 500;
        }

        &:focus:-moz-placeholder {
          color: rgb(55, 84, 109);
          font-weight: 500;
        }

        &:focus:-ms-input-placeholder {
          color: rgb(55, 84, 109);
          font-weight: 500;
        }

        &:focus + .border-line {
          width: 100%;
          height: 1.5px;
        }
      }

      textarea {
        resize: vertical;
      }

      .border-line {
        height: 0px;
        width: 0%;
        position: relative;
        top: -1px;
        background: rgb(55, 84, 109);
        transition: width 0.5s ease-in-out;

        &:before {
          content: "This field can't be empty";
          display: none;
          width: 400px;
          height: 50px;
          position: relative;
          bottom: -10px;
          left: 20px;
          font-size: 10px;
          color: #b9416f;
        }

        &:after {
          content: "This is not a valid email address";
          display: none;
          width: 400px;
          height: 50px;
          position: relative;
          bottom: -10px;
          left: 20px;
          font-size: 10px;
          color: #b9416f;
        }
      }

      small {
        display: none;
        margin: 10px 0 0 1rem;
        font-size: 10px;
        color: #b9416f;
      }

      .checkbox-container {
        margin-top: 2rem;
        display: flex;
        align-items: flex-start;
        position: relative;

        input[type="checkbox"] {
          display: none;

          &:checked + label::before {
            background: #b9416f;
          }

          &:checked + label::after {
            visibility: visible;
            transform: scale(0.95);
          }
        }

        label {
          font-size: 13px;
          font-weight: 600;
          opacity: 0.7;
          margin-left: 2rem;
          cursor: pointer;

          &:before {
            content: "";
            background: rgba(55, 84, 109, 0.5);
            height: 15px;
            border-radius: 3px;
            width: 15px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            transition: background 0.3s ease-in-out;
          }

          &:after {
            content: "";
            background-image: url(${checkIcon});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            height: 15px;
            width: 15px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            transform: scale(2);
            visibility: hidden;
            transition: all 0.3s ease-in-out;
          }
        }
      }

      button {
        border: 1px solid rgb(55, 84, 109);
        padding: 1rem 1.5rem;
        border-radius: 2rem;
        margin-top: 3rem;
        background: none;
        cursor: pointer;
        color: rgb(55, 84, 109);
        font-weight: 600;
        transition: background 0.3s ease-in-out;

        &:hover {
          background: rgb(55, 84, 109);
          color: #fff;
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }

    .list-of-companies {
      flex: 0.8;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
      }

      .image-container {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        place-items: center;
        grid-row-gap: 6rem;
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
    }
  }

  @media (max-width: 1024px) {
    h1 {
      text-align: center;
      font-size: 3.5rem;
      width: 100%;
      margin-top: 5rem;
    }

    .container {
      flex-direction: column;
      align-items: center;

      form {
        padding-right: 0;
        width: 80%;

        button {
          display: block;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .list-of-companies {
        margin-top: 4rem;

        .image-container {
          grid-template-columns: 1fr 1fr 1fr;
        }
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

    .circle-pattern {
      display: none;
    }

    .container {
      form {
        width: 100%;
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
    .container {
      .list-of-companies {
        .image-container {
          grid-template-columns: 1fr 1fr;
        }
      }
    }

    .subscribe-section {
      .email-opt-in {
        width: 100%;
      }
    }
  }

  @media (max-width: 320px) {
    .container {
      .list-of-companies {
        .image-container {
          grid-template-columns: 1fr;
          grid-row-gap: 4rem;
        }
      }
    }
  }
`;

export default Contact;
