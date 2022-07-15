import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from '../../assets/images/logo.png'
const ImageHeader = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col md={1} className="d-none d-lg-block">
                        <Image src={logo} fluid />
                    </Col>
                    <Col md={11} className="d-none d-lg-block">
                        <h1 style={{ color: "#001e7e", fontSize: "calc(1em + 1vw)" }}>CÔNG TY CỔ PHẦN ĐẦU TƯ ĐIỆN LỰC 3</h1>
                        <h2 style={{ color: "red", fontSize: "calc(1em + 1vw)" }}>PC3 INVESTMENT JOINT STOCK COMPANY</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ImageHeader