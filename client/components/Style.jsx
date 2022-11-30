import styled from "styled-components"

const green = "rgb(25, 50, 30)";
const white = "rgb(245, 245, 245)";
const pink = "rgb(255, 131, 114)";
const yellow = "rgb(227, 238, 96)";

export const NavContainer = styled.div`
    display: flex;
    /* grid-template-columns: 1.2fr 1fr; */
    justify-content: space-between;
    padding: 20px 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    color: ${white};
    background-color: ${green};

    ul{
        list-style-type: none;
        display: flex;
        gap: 20px;
        align-items: center;

        li{
            cursor: pointer;
        }
    }
`

export const Logo = styled.div`
    font-size: 40px;
`

export const Register = styled.div`
    background-color: ${yellow};
    padding: 10px 20px;
    color: black;
    width: fit-content;
    cursor: pointer;
`

export const Container = styled.div`
    
`

export const BannerContainer = styled.div`
    background-color: ${green};
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 88%);
    height: 100vh;
    padding: 20vh 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    
`

export const Text = styled.p`
    font-size: ${({size})=> size ?? "20px"};
    font-weight: ${({weight})=> weight ?? "400"};
    width: ${({width})=> width ?? "fit-content"};
    text-align: ${({align})=> align ?? "start"};
    color: ${({color})=> color ?? "#fff"};
    padding: ${({padding})=> padding ?? 0};
    margin: ${({margin})=> margin ?? 0};
    line-height: 1.2;

    span{
        color: ${yellow};
    }
`

export const TwoWayGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;

    img{
        width: 100%;
        height: 100%;
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    
    margin: 20px 50px;
    justify-content: center;
    gap: 20px;
    align-content: center;

    .card{
        background-color: ${green};
        border-radius: 6px;
        padding: 20px;
    }
`

export const FooterContainer = styled.div`
    padding: 30px 50px;
    background-color: ${green};
    display: grid;
    grid-template-columns: 1.5fr 1fr;
`

export const PricingContainer = styled.div`
    margin: 100px;
    .plans{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        .plan{
            background-color: white;
            box-shadow: 0 7px 20px rgba(0,0,0,0.12);
            border-radius: 15px;
            padding: 20px;

            display: grid;
            gap: 50px;

            .flex{
                display: flex;
                justify-content: space-between;
            }

            .roi{
                background-color: ${green};
                padding: 4px 15px;
                border-radius: 6px;
            }
        }
    }
`

export const ContactContainer = styled.div`
    padding: 200px 50px 100px;

    form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: start;
        width: 70%;
        margin: 30px 0;

        .submit{
            background-color: ${green};
            color: white;
            padding: 18px;
            text-align: center;
            cursor: pointer;
        }

        input, textarea{
            padding: 18px 18px;
            border: 2px solid;
            resize: none;
            width: 100%;
        }

        textarea{
            padding: 11px 18px;
            /* height: 100px; */
        }

        input::placeholder, textarea::placeholder{
            font-family: poppins;
        }
    }
`