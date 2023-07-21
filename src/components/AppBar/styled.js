import styled from "styled-components";

export const Sidenav = styled.ul`
    font-family: "Modern No. 20";
    position: fixed;
    font-size: 25px;
    letter-spacing: 1.5px;
    z-index: 1;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    margin-top: 0;
    padding-top: 70px;
    padding-left: 50px;
    background-color: #388e3c;
    overflow-x: hidden;
    transition: 0.5s;
    > li {
        &:first-child {
            position: absolute;
            top: 0;
            right: 25px;
            margin-left: 50px;
            cursor: pointer;
            font-size: 50px;
            &:hover {
                color: #f1f1f1;
            }
        }
    }
    > li {
        list-style: none;
        a {
            display: block;
            padding: 8px 8px 8px 0;
            color: #1d1a1a;
            font-size: 25px;
            text-decoration: none;
            transition: 0.3s;
            &:hover {
                color: #f1f1f1;
            }
        }
    }
`;
