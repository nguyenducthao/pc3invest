import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../redux/actions/userAction";

const Login = (props) => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    let history = useHistory()
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }
    const findFormErrors = () => {
        const { tenDangNhap, matKhau } = form
        const newErrors = {}
        if (!tenDangNhap || tenDangNhap === '') newErrors.tenDangNhap = 'Chưa nhập tên đăng nhập!'
        if (!matKhau || matKhau === '') newErrors.matKhau = 'Chưa nhập mật khẩu!'
        return newErrors
    }
    const handleSubmit = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            // No errors! Put any logic here for the form submission!
            // alert('Thank you for your feedback!')
            const { tenDangNhap, matKhau } = form
            setLoading(true);
            dispatch(login(tenDangNhap, matKhau))
                .then(() => {
                    history.push('/')
                    // props.history.push("/");
                    // window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }
    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <Row>
                <Col md={3} lg={4}></Col>
                <Col md={6} lg={4}>
                    <Card bg={'light'}>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tên đăng nhập</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên đăng nhập"
                                        onChange={e => setField('tenDangNhap', e.target.value)}
                                        isInvalid={!!errors.tenDangNhap}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.tenDangNhap}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                        onChange={e => setField('matKhau', e.target.value)}
                                        isInvalid={!!errors.matKhau}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.matKhau}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3 d-grid gap-2">
                                    <Button variant="success" type="submit" disabled={loading}>Đăng nhập</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} lg={4}></Col>
            </Row>

        </>
    )
}
export default Login