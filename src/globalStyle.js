import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background: #EEF3F9;
        font-family: 'Spartan', sans-serif;
        color: rgb(55, 84, 109);
        position: relative;
        overflow-x: hidden;
    }

    .schedule-btn {
        background: #b9416f;
        color: #ffffff;
        padding: 1rem 1.5rem;
        border-radius: 2rem;
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: background 0.3s ease-in-out; 

        &:hover {
            background: #d14a7e
        }

        &:active {
            transform: scale(0.98)
        }
    }

    h1 {
        font-family: 'DM Serif Display', sans-serif;
    }
`;

export default GlobalStyle;
