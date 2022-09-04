import styled from "styled-components";

export const FluidContainer = styled.section`
    width: 100%;
    background: rgb(0 0 0 / 80%) !important;
    display:flex;
    justify-content: center;
    position: fixed;
`



export const Navbar = styled.div`
    max-width: 1024px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px ;
    a{
        color: #fff !important;
        font-size:15px !important;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 800;
        margin-left:3px;
        margin-right:3px;
    }
    @media screen and (max-width: 627px){
        padding:0;
    }
`
