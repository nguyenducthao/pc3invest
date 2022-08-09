import { useEffect, useState } from "react"
import userService from "./services/userService";

const BoardAdmin = () => {
    const [content, setContent] = useState("")
    useEffect(() => {
        userService.getAdminBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);
    return (
        <>
            <div className="container">
                <header className="jumbotron">
                    <h3>{content}</h3>
                </header>
            </div>
        </>
    )
}
export default BoardAdmin