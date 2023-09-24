import styled from 'styled-components'

export const Container = styled.div `

    padding: 4rem 0;

    h1 {
        margin: 3rem 0;

    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }


    img {
        width: 300px;
        border-radius: 1rem;
        border: 1px solid #FFF;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    button {
        background-color: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #FFF;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;

    }

    button:hover {
        background-color: #5848c2;

    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;

    }

    .release-date {
        opacity: 0.5;
    }

    @media (max-width: 550px) {
        .movie {
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: justify;
        }

        span {
            margin-left: -3rem;
            text-align: justify;
    
        }

        h1 {
            margin-left:  -3rem;
            text-align: center;
        }

    }


`